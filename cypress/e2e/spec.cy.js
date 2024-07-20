describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="form"]').should("exist")

    cy.get('input#email')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Enter your email')
      .type('admin@store.com').should('have.value', 'admin@store.com')

    cy.get('input#password')
      .should('be.visible')
      .should('have.attr', 'placeholder', 'Enter your password')
      .type('123456').should('have.value', '123456')   

    cy.get('[data-testid="submit"]').click()

    cy.get('div.home')
      .should('be.visible')  

    cy.get('div.sidebar')
      .should('be.visible')   
    
    //sidebar -> categories
    cy.get('[data-testid="categories"]', {timeout: 10000}).should('be.visible').click()  
    cy.wait(5000); //tunggu 5 detik setelah masuk ke categories
    cy.url().should('include', '/categories'); //memastikan jika masuk ke halaman yg benar
    cy.get('div.mydatatableTitle').contains('All Data')

    //untuk klik tombol add new
    cy.get('[data-testid="add-new"]').click()
    cy.wait(3000) //tunggu selama 3 detik setelah menekan add new

    //menulis dessert pada placeholder yang ada
    cy.get('input[placeholder="Coffee"]', {timeout: 10000})
      .should('be.visible')
      .type('Appetizer')
      .should('have.value', 'Appetizer')

    //menekan button send 
    cy.get('button[type="submit"]').click()  


  })
})