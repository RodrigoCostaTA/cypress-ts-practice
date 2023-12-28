describe('Validate Navigation Menu Links and Page Loading', () => {
    
    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.fixture('menuLinks.json').then((data) => {
            cy.wrap(data['menu-links']).as('menuLinks');
        });
    });

    it('should validate navigation menu links and page loading', function() { 
        cy.visit('https://demo.nopcommerce.com/');

        //Iterate over links
        cy.get('@menuLinks').then((links: any) => {
            (links as string[]).forEach((linkText: string) => {
                cy.get('.top-menu').contains(linkText).trigger('mouseover', {force: true});
                cy.get('.top-menu').contains(linkText).click();          
                //Validate the URL and page content
                cy.get('body').should('be.visible');
  
            });
        });
    });
});
