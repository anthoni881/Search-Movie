describe("home", () => {
  beforeEach(() => {
    cy.server();
    cy.intercept(
      "GET",
      "http://www.omdbapi.com/?apikey=fd0ce476&s=superman&page=1",
      {
        fixture: "search",
      }
    );
    cy.intercept("GET", "http://www.omdbapi.com/?apikey=fd0ce476&i=tt2975590", {
      fixture: "detail",
    });
  });

  it("Initial Check", () => {
    cy.visit(`/`);
    cy.contains("Find Your Favorite Movie Here!!!").should("be.visible");
    cy.get("input").should("be.visible");
    cy.get("[data-cy=button-search]").should("be.visible");
  });

  it("search", () => {
    cy.visit(`/`);
    cy.get("input").type("superman");
    cy.get("[data-cy=button-search]").click();
    cy.get("[data-cy=list-wrapper]").should("be.visible");
    cy.url().should("include", "/superman");
    cy.get("[data-cy=poster-img]").eq(0).click();
    cy.get("[data-cy=modal-container]").should("be.visible");
    cy.get("[data-cy=modal-img]").should("be.visible");
    cy.get("[data-cy=close-btn]").click();
  });
  it("detail", () => {
    cy.visit(`/`);
    cy.get("input").type("superman");
    cy.get("[data-cy=button-search]").click();
    cy.get("[data-cy=detail-btn]").eq(0).click();
    cy.get("[data-cy=poster-detail]").should("be.visible");
    cy.get("[data-cy=title-year]").contains("Batman Begins(2005)");
    cy.get("[data-cy=rating-detail]").contains("8.2");
    cy.get("[data-cy=detail-genre]").contains("Action, Adventure");
    cy.get("[data-cy=detail-actors]").contains(
      "Christian Bale, Michael Caine, Ken Watanabe"
    );
    cy.get("[data-cy=detail-language]").contains("English, Mandarin");
    cy.get("[data-cy=detail-type]").contains("movie");
    cy.get("[data-cy=detail-director]").contains("Christopher Nolan");
    cy.get("[data-cy=detail-country]").contains(
      "United Kingdom, United States"
    );
    cy.get("[data-cy=detail-runtime]").contains("140 min");
    cy.get("[data-cy=detail-plot]").contains(
      "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption."
    );
    cy.get("[data-cy=button-back-home]").should("be.visible");
  });
});
