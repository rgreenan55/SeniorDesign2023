describe("Test Assessment Request", () => {
    beforeEach(() => {
        // Setup API Intercepts
        cy.intercept('GET', `/get-all-addresses-by-prefix*`, { fixture: "mockAddresses.json" });
        cy.intercept('GET', `/get-ai-args*`, { fixture: "mockFilters.json" });
        cy.intercept('GET', `/get-assessment-by-address*`, { fixture: "mockByAddress.json" });
        cy.intercept('GET', `/get-assessment-by-arguments*`, { fixture: "mockByFilters.json" });

        cy.visit(Cypress.env('home_url'));
        cy.get('input[placeholder="Search Address"]');
    })

    it("Assess by Address Search", () => {
        cy.get('input[placeholder="Search Address"]').type('{downArrow}').type('{enter}');
        cy.get('[data-testid="KeyboardReturnIcon"]').click();
        cy.wait(1000);

        cy.get("p").contains("Test Address 1");
        cy.get("p").contains("Actual: $10.00");
        cy.get("p").contains("Estimate: $11.00");
        cy.get("p").contains("Difference: $1.00 (10.00%)");

        cy.get('[data-testid="ExitToAppIcon"]').click();
    })
 
    it("Assess by Filters", () => {
        cy.get('[data-testid="FilterDropDown"]').click();

        cy.get('span').contains('Rooms').parent().parent().siblings('input').click().type('{backspace}3');
        cy.get('span').contains('Bedrooms').parent().parent().siblings('input').click().type('{backspace}1');
        cy.get('span').contains('Bathrooms').parent().parent().siblings('input').click().type('{backspace}1');
        cy.get('span').contains('Square Footage').parent().parent().siblings('input').type('{backspace}2000');
        cy.get('button').contains('Assess by Filters').click();
        cy.wait(1000);

        cy.get("p").contains("Estimate: $11.00");

        cy.get('[data-testid="ExitToAppIcon"]').click();
    });
});