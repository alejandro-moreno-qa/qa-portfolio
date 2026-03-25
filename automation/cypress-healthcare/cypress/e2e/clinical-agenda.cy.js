describe('Agenda clínica - validación de cita de paciente', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.fixture('appointment-data.json').then((data) => {
      cy.loginToClinicalStation(
        data.username,
        data.password,
        data.healthcareUnit,
        data.clinicalArea,
        data.userRole,
        data.serviceType
      );
    });
  });

  it('debe localizar la cita del paciente en la agenda y validar que tenga estado visible', () => {
    cy.findPatientAppointmentInAgenda('cypress/fixtures/appointment-data.json');
  });
});
