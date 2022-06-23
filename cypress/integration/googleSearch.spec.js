/// <reference types="cypress" />

import { mainPage } from "../support/page_objects/MainPage"

describe("Google search", () => {

    var searchValue = "Adidas movie"

    beforeEach("Open Google" , () => {
        cy.visit("https://www.google.es/")
    })

    it("Search for a product", () => {
        mainPage.acceptCookies();
        mainPage.searchForAValue(searchValue);
        mainPage.verifySearchResult();
        mainPage.navigateToImages();
        mainPage.openFirstImage();
    })
})