describe('login test', () => {
  it('acess login', () => {
    cy.visit('find-your-employees.vercel.app/login')
    cy.get('#user').type('admin')
    cy.get('#password').type('admin')
    cy.get('[type="submit"]').click()
  })
})

describe('Testing funcionalities', () => {
  it('using filters and find employee', () => {
    cy.get('select').select("Funcionário(a)")
    cy.get('input').type('Roman')
  })

  it("Remove Roman of table", () => {
    cy.get('.deleteIcon').click()
  }); 

  it("Remove Roman of input and Scroll down view and click in button 'Back to top'", () => {
    cy.get('input').clear()
    cy.scrollTo(0, 1000)
    cy.get('.active').click()
  }); 

  it("Click on sort data, to see employees order to A-Z", () => {
    cy.get('[alt="Icon with arrow"]').click()
  })
})
