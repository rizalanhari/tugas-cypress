/// <reference types="cypress" />

describe('Form input', () => {
    it('visit form', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
    });

    it('Fill Inline form', () => {
        cy.get('input[placeholder="Jane Doe"]').type('Rizal Anhari').should('have.value', 'Rizal Anhari');
        cy.get('[placeholder="Email"][type="text"]').type('rizalanhari6@gmail.com').should('have.value', 'rizalanhari6@gmail.com');
        cy.get('.custom-checkbox').first().click()
    });

    it('Fill Using the Grid', () => {
        cy.get('#inputEmail1').type('rizalanhari6@gmail.com').should('have.value', 'rizalanhari6@gmail.com');
        cy.get('#inputPassword2').type('123456').should('have.value', '123456');
        cy.get('.text').contains('Option 1').click()
        cy.get('.text').contains('Option 2').click()
    });

    it('Fill Basic form', () => {
        cy.get('#exampleInputEmail1').type('rizalanhari6@gmail.com').should('have.value', 'rizalanhari6@gmail.com');
        cy.get('#exampleInputPassword1').type('123456').should('have.value', '123456');
        cy.get('.custom-checkbox').eq(1).click()
    });

    it('Fill Form without labels', () => {
        cy.get('[placeholder="Recipients"]').type('Rizal Anhari').should('have.value', 'Rizal Anhari');
        cy.get('[placeholder="Subject"]').type('Asalamualaikum').should('have.value', 'Asalamualaikum');
        cy.get('textarea[placeholder="Message"]').type('You gonna catch a cold from the ice inside your soul').should('have.value', 'You gonna catch a cold from the ice inside your soul');
    });

    it('Fill Horizontal form', () => {
        cy.get('#inputEmail3').type('rizalanhari6@gmail.com').should('have.value', 'rizalanhari6@gmail.com');
        cy.get('#inputPassword3').type('123456').should('have.value', '123456');
        cy.get('.custom-checkbox').last().click()
    });

    it('Fill Block form', () => {
        cy.get('#inputFirstName').type('Rizal').should('have.value', 'Rizal');
        cy.get('#inputLastName').type('Anhari').should('have.value', 'Anhari');
        cy.get('#inputEmail').type('rizalanhari6@gmail.com').should('have.value', 'rizalanhari6@gmail.com');
        cy.get('#inputWebsite').type('www.zanha-lu.com').should('have.value', 'www.zanha-lu.com');
    });
})