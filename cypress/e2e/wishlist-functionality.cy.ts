import 'cypress-wait-until';

describe('Verify Wishlist Functionality', () => {
  const modelName = 'Apple MacBook';

  it('should add a product to the wishlist and verify its presence', () => {
    // Navigate to the product details page
    cy.visit('https://demo.nopcommerce.com/apple-macbook-pro-13-inch');

    // Wait until the add to wishlist button is visible
    cy.waitUntil(() => 
      cy.get('#add-to-wishlist-button-4')
        .should('be.visible')
        .and('be.enabled')
    );

    // Add the product to the wishlist
    cy.get('#add-to-wishlist-button-4').click();

    // Navigate to the wishlist page
    cy.get('.wishlist-label').click();

    // Verify that the product is added to the wishlist
    cy.get('.product-name').contains(modelName).should('be.visible');

    // Manage wishlist items
    // Remove the product from the wishlist
    cy.waitUntil(() =>
      cy.get('.remove-btn').should('be.visible').click()
    );
    cy.get('.remove-btn').click()
    // Verify product removal
    cy.contains(modelName).should('not.exist');
  });
});