describe('Login', () => {

    it('Gagal masuk password salah', () => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
        cy.get('#email').type ('ashwinbr03@gmail.com') //input email
        cy.get('#pass').type('P@ssw') // input password
        cy.get('#send2').click() // login button
        cy.get('.message-error').should('contain.text', 'The account sign-in was incorrect or your account is disabled temporarily.')

    })

    it('Berhasil masuk', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
      cy.get('#email').type ('ashwinbr3103@gmail.com') //input email
      cy.get('#pass').type('P@ssw0rd3103') // input password
      cy.get('#send2').click() // login button
      cy.contains('Welcome').should('exist')  
    })


    it('Berhasil masuk, menggunakan custom command', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
      cy.userlogin('ashwinbr3103@gmail.com','P@ssw0rd3103')
      cy.contains('Welcome').should('exist')    

    })
    
   // it('Login menggunakan Custom Command', () => {
    //  cy.visit('https://magento.softwareteogin/refereuZ2JvYXJkLmNvbS8%2C/')
        //cy.userlogin('ashwinbr3103@gmail.com', 'P@ssw0rd3103')

    })
   
        
   // })