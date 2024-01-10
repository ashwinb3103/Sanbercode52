describe('edit username', () => {
    it('First Name Kosong', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
      cy.get('#email').type ('ashwinbr3103@gmail.com')
      cy.get('#pass').type('P@ssw0rd3103')
      cy.get('#send2').click()
      cy.visit('https://magento.softwaretestingboard.com/customer/account/');
      cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
      cy.get('#firstname').clear()
      cy.get('button[title="Save"]').click()
      cy.get('#firstname-error').should('contain.text','This is a required field.');

    })

    it('Berhasil Ganti Username', () => {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
      cy.get('#email').type ('ashwinbr3103@gmail.com')
      cy.get('#pass').type('P@ssw0rd3103')
      cy.get('#send2').click()
      cy.visit('https://magento.softwaretestingboard.com/customer/account/');
      cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
      cy.get('#firstname').clear().type('Babi')
      cy.get('button[title="Save"]').click()
      cy.contains('You saved the account information.').should('exist')
  
    })
})



//cy.contains('My Dashboard')
//cy.contains('My Account').click();
//cy.contains('Account Informatiogn');
//cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span')