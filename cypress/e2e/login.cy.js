describe('login test', () => {
  it('acess login', () => {
    cy.visit('find-your-employees.vercel.app/login')
    cy.get('#user').type('admin')
    cy.get('#password').type('admin')
    cy.get('[type="submit"]').click()
    cy.get('.sc-dkzDqf').click()
  })
})

