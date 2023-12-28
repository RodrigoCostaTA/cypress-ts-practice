describe('Validate Navigation Menu Links and Page Loading', () => {
    
    beforeEach(() => {
        cy.visit('/')
        cy.fixture('menuLinks.json').then((data) => {
            cy.wrap(data['menu-links']).as('menuLinks');
        });
    });

    it('should validate navigation menu links and page loading', function() { 
        //Iterate over links
        cy.get('@menuLinks').then((links: any) => {
            (links as string[]).forEach((linkText: string) => {
                cy.get('.top-menu').contains(linkText).trigger('mouseover', {force: true});
                cy.get('.top-menu').contains(linkText).click();          
                //Validate the URL and page content
                cy.get('body').should('be.visible');
                // Validate page title
                cy.title().should('include', linkText);
                // Validate URL
                cy.url().should('include', linkText.toLowerCase().replace(' ', '-'));
  
            });
        });
    });
});
