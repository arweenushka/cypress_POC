export class MainPage {

    acceptCookies() {
        cy.get("#L2AGLb").click()
    }

    searchForAValue(searchValue) {
        cy.get('[title="Buscar"]').type(searchValue).type("{enter}")
    }

    verifySearchResult() {
        cy.get('[eid] >div').then(results => {
            expect(results.length).to.be.greaterThan(0)
        })
    }

    navigateToImages() {
        cy.contains("Images").click()
    }

    openFirstImage() {
        cy.get('#islrg >div>div div')
            .first()
            .click()
    }
}

export const mainPage = new MainPage()