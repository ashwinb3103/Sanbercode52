describe('Submit Addres', () => {
    it('Login, Buka My Account, Buka Manage Addresses, dan Isi Field Add New Address', () => {
      // Mengunjungi halaman login
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
  
      // Memasukkan informasi login
      cy.get('#email').type('ashwinbr3103@gmail.com');
      cy.get('#pass').type('P@ssw0rd3103');
      cy.get('#send2').click();
  
      // Memastikan login berhasil (misalnya, memeriksa teks selamat datang)
      cy.contains('My Account').click();
  

      // Navigasi ke halaman My Account
      cy.visit('https://magento.softwaretestingboard.com/customer/account/');  
      // Memastikan bahwa halaman My Account terbuka
      cy.contains('Account Information').should('exist');
  
      // Navigasi ke halaman Manage Addresses
      cy.contains('Address Book').click();
  
      // Memastikan bahwa halaman Manage Addresses terbuka
      cy.contains('Manage Addresses').should('exist');
  
      // Navigasi ke halaman Add New Address
      cy.visit('https://magento.softwaretestingboard.com/customer/address/edit/');
  
      // Mengisi field Add New Address (sesuaikan dengan struktur dan ID yang sebenarnya)
      cy.get('#firstname').type('NamaDepan');
      cy.get('#lastname').type('NamaBelakang');
      cy.get('#street_1').type('AlamatBaris1');
      cy.get('#city').type('Kota');
      cy.get('#region_id').select('New York'); // Contoh untuk dropdown region, sesuaikan dengan struktur aktual
      cy.get('#postcode').type('12345');
      cy.get('#telephone').type('081234567890');
  
      // Menyimpan alamat baru
      cy.get('button[title="Save Address"]').click();
  
      // Memastikan bahwa pesan berhasil disimpan muncul atau alamat terdaftar di halaman
      cy.contains('The address has been saved.').should('exist');
    });
  });