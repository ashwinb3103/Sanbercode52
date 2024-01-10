describe('Registrasi', () => {
  it('First Name kosong', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type ('aswin')
    cy.get('#lastname').type ('Reswara')
    cy.get('#email_address').type ('ashwinbr31@gmail.com')
    cy.get('#password').type ('P@ssw0rd3103')
    cy.get('#password-confirmation').type ('P@ssw0r')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
    cy.get('#password-confirmation-error').should('contain.text', 'Please enter the same value again.')

  })

  it('Berhasil Registrasi', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    cy.get('#firstname').type ('Aswin')
    cy.get('#lastname').type ('Reswara')
    cy.get('#email_address').type ('ashwinbr3103@gmail.com')
    cy.get('#password').type ('P@ssw0rd3103')
    cy.get('#password-confirmation').type ('P@ssw0rd3103')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()

  })
})