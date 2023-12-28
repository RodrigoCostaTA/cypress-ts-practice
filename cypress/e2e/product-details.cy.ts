describe('Product Details Page Tests', () => {

    beforeEach(() => {        
        cy.visit('/')
        cy.fixture('productData.json').then((data) => {
            const notebook = data.notebook;
            cy.get('#small-searchterms').type(notebook);
            cy.get('.search-box-button').click();  

            cy.contains(notebook).click();
        });
    });

    it('should validate the Product Details Page', () => {
        cy.fixture('productData.json').then((data) => {
            const notebook = data.notebook;

            // Verify the title of the Product Details Page
            cy.title().should('include', notebook);

            // Verify product overview
            cy.get('.short-description').should('exist');
            cy.get('.manufacturers').should('exist');
            cy.get('.sku').should('exist');
            cy.get('#price-value-4').should('exist');

            // Verify comprehensive specifications
            cy.get('.product-specs-box').contains('Products specifications').should('exist');
            cy.get('.spec-name').contains('Screensize').should('exist');
            cy.get('.spec-name').contains('CPU Type').should('exist');
            cy.get('.spec-name').contains('Memory').should('exist');

            // Verify reviews section
            cy.get('.product-review-links').should('exist');
            cy.get('.product-review-box').should('exist');

            cy.get('.picture-thumbs').click();
            cy.get('#main-product-img-4').should('be.visible');
        });
    });
    
});