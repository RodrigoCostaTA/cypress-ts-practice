describe('Verify Wishlist Functionality', () => {
    const modelName = 'Apple MacBook';

    
    it('should add a product to the wishlist and verify its presence', () => {
      // Navigate to the product details page
      cy.visit('https://demo.nopcommerce.com/apple-macbook-pro-13-inch');
      
      // Add the product to the wishlist
      cy.get('.wishlist-label').should('be.visible');
      cy.get('.wishlist-qty').should('be.visible');
      cy.get('#add-to-wishlist-button-4').click();
      
      //Go to the wishlist page
      cy.get('.wishlist-label').click();
      
      // Verify that the product is added to the wishlist
      cy.contains(modelName).should('exist'); 
      
      // Manage wishlist items
      // Verify product removal
      cy.get('.remove-btn').click();
      cy.contains(modelName).should('not.exist');
    });
        
  });