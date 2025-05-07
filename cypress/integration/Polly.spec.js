describe("Polly dashboard", () => {
    it("should select Sales", () => {
      cy.visit("/");


      cy.get(".card").children().as("cardsChildren");
    
      cy.get("@cardsChildren").eq(0).should("have.text", "CellFast Sales");
    
      cy.get("@cardsChildren").eq(1).should("have.text", "$ 2311");
    
      cy.get("@cardsChildren").eq(2).should("have.text", "CellNow subscriptions");
    
      cy.get("@cardsChildren").eq(3).should("have.text", "$ 381");
});
})