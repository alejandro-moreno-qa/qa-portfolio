Cypress.Commands.add('loginToClinicalStation', (username, password, healthcareUnit, clinicalArea, userRole, serviceType) => {
  const timeout = 40000;

  cy.get('#input_username_login', { timeout }).should('be.visible').type(username);
  cy.get('#input_password_login', { timeout }).should('be.visible').type(password);

  cy.intercept('POST', '**/auth/**').as('loginRequest');
  cy.get('#btn_login').click();

  cy.wait('@loginRequest', { timeout }).then((interception) => {
    expect(interception.response.statusCode).to.eq(200);
  });

  const normalizedHealthcareUnit = healthcareUnit
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/ /g, '_')
    .replace(/\./g, '\\.');

  cy.get(`#btn_select_healthcare_unit_${normalizedHealthcareUnit}`, { timeout }).click();

  cy.intercept('GET', '**/permissions/**').as('permissionsRequest');

  const normalizedClinicalArea = clinicalArea
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/ /g, '_')
    .replace(/\./g, '\\.');

  cy.get(`#btn_select_area_${normalizedClinicalArea}`, { timeout }).click();

  cy.wait('@permissionsRequest', { timeout }).then((interception) => {
    expect(interception.response.statusCode).to.eq(200);
  });

  cy.get('.user-menu > .user-name', { timeout }).click();
  cy.get('#menu_switch_account', { timeout }).click();

  const normalizedUserRole = userRole
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/ /g, '_')
    .replace(/\./g, '\\.');

  cy.get(`#role_option_${normalizedUserRole} > div`, { timeout }).click();

  cy.get('#btn_toggle_menu', { timeout }).click();
  cy.get('#menu_clinical_agenda', { timeout }).click();
  cy.contains('Agenda').click();
  cy.get('.service-selector-button', { timeout }).click();
  cy.contains(serviceType).click();
  cy.get('#btn_toggle_menu', { timeout }).click();

  cy.get('table tbody', { timeout }).should('be.visible');
});

Cypress.Commands.add('findPatientAppointmentInAgenda', (fixturePath) => {
  const timeout = 40000;

  cy.readFile(fixturePath).then((data) => {
    const patient = data.patient.trim().toLowerCase();
    const appointmentTime = data.appointmentTime.trim().toLowerCase().replace(/^0/, '');

    let found = false;

    cy.log(`Buscando cita de ${patient} a las ${appointmentTime}`);

    cy.get('table tbody tr', { timeout }).each(($row) => {
      const rowText = $row.text().replace(/\s+/g, ' ').trim().toLowerCase();

      if (rowText.includes(patient) && rowText.includes(appointmentTime)) {
        found = true;

        cy.wrap($row)
          .find('span.status-tag')
          .invoke('text')
          .then((statusText) => {
            const normalizedStatus = statusText.trim();
            cy.log(`Estado encontrado: ${normalizedStatus}`);
            expect(normalizedStatus).to.not.equal('');
          });
      }
    }).then(() => {
      expect(found, 'La cita del paciente debe existir en la agenda').to.eq(true);
    });
  });
});
