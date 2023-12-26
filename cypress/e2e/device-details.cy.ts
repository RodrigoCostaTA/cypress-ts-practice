describe('Device Details Page Tests', () => {
    const modelName = 'Apple MacBook';

    beforeEach(() => {
        cy.visit('https://demo.nopcommerce.com/');

        cy.get('#small-searchterms').type(modelName);
        
        cy.get('.search-box-button').click();  

        cy.contains(modelName).click();
    });

    it('should validate the Device Details Page', () => {

        // Verify the title of the Device Details Page
        cy.title().should('include', modelName);

        // Verify product overview
        cy.get('.short-description').should('exist');
        cy.get('.manufacturers').should('exist');
        cy.get('.sku').should('exist');
        cy.get('#price-value-4').should('exist');

        // Verify comprehensive specifications
        cy.contains('Products specifications').should('exist');
        cy.contains('Screensize');
        cy.contains('CPU Type');
        cy.contains('Memory');

        // Verify reviews section
        cy.get('.product-review-links').should('exist');
        cy.get('.product-review-box').should('exist');

        cy.get('.picture-thumbs').click();
        cy.get('#main-product-img-4').should('be.visible');

        cy.viewport(320, 480); // Mobile view
        cy.viewport(1280, 720); // Desktop view
    });
    
});