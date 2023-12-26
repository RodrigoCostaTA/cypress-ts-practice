describe('Verify Wishlist Functionality', () => {
    const modelName = 'Apple MacBook';

    
    it('should add a product to the wishlist and verify its presence', () => {
      // Navigate to the product details page
      cy.visit('https://demo.nopcommerce.com/apple-macbook-pro-13-inch');
      
      // Add the product to the wishlist
      cy.get('#add-to-wishlist-button-4').click();
      cy.get('.bar-notification').should('be.visible');
      
      // Navigate to the Wishlist page
      cy.get('.ico-wishlist').click(); // Replace with the actual URL
      
      // Verify that the product is added to the wishlist
      cy.contains(modelName).should('exist'); // Replace 'Product Name' with the actual product name
      
      // Manage wishlist items
      
      // Verify product removal
      cy.get('.remove-btn').click();
      cy.contains(modelName).should('not.exist'); // Verify product removal
    });
        
  });