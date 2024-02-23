describe("Test Assessment Request", () => {
    beforeEach(() => {
        cy.visit(Cypress.env('home_url'))
        cy.get('input[placeholder="Search Address"]')
        cy.intercept('GET', `/get-test-url`, { fixture: "mockAssessmentResults.js" })
    })

    it("Assess by Address Search", () => {
        cy.get('input[placeholder="Search Address"]').type('a').type('{downArrow}').type('{enter}')
        cy.get('[data-testid="KeyboardReturnIcon"]').click()
        
        cy.wait(1000)
        cy.get("p").contains("500000")

        cy.get('[data-testid="ExitToAppIcon"]').click()
    })

    it("Assess by Filters", () => {
        cy.get('[data-testid="FilterDropDown"]').click()

        cy.get('span').contains('Location').parent().parent().siblings('input').type('Fredericton')
        cy.get('span').contains('Rooms').parent().parent().siblings('input').click().type('{upArrow}{upArrow}{upArrow}')
        cy.get('span').contains('Bedrooms').parent().parent().siblings('input').click().type('{upArrow}')
        cy.get('span').contains('Bathrooms').parent().parent().siblings('input').click().type('{upArrow}')
        cy.get('span').contains('Date Constructed').parent().parent().siblings('input').type('1998')

        cy.get('button').contains('Assess by Filters').click()

        cy.wait(1000)
        cy.get("p").contains("500000")

        cy.get('[data-testid="ExitToAppIcon"]').click()

    })

    it("Assess by Map Select", () => {
        // Implement once Map is Setup 
    })
})