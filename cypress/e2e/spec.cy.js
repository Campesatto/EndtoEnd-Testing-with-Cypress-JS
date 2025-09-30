describe('Atualizaçoes do My Info + Login', () => {
//Teste de Login simples com viewport e validação de assert 
  it('Login - Teste Simples', function(){
//Teste com viewport     
   // cy.viewport('macbook-16');
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').click().type('Admin');
    cy.get('[name="password"]').click().type('admin123');
    cy.get('.oxd-button').click();
    cy.title().should('eq', 'OrangeHRM');


  })
//Teste de atualização de menu
it('My Info + NickName', function(){
  
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //cy.title().should('include', 'Login')
    cy.get('[name="username"]').click().type('Admin');
    cy.get('[name="password"]').click().type('admin123');
    cy.get('.oxd-button').click();
    cy.wait(3000);
    cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click();
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click();
    cy.wait(3000);
    cy.get('[name="firstName"]').click().clear().type('Vitor');
    
  })
  //Testes de Assertions (como o codigo deve funcionar para algo especifico)
   it('Assertion - Exist', function(){
  
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').click().type('Admin');
    cy.get('[name="password"]').click().type('admin123');
    cy.get('.oxd-button').click();
    cy.get(':nth-child(6) > .oxd-main-menu-item').click();
    cy.wait(2000)
    cy.get('.oxd-grid-1 > .oxd-grid-item > [data-v-6653c066=""] > :nth-child(1) > .oxd-label')
    .should('exist');
    

  })
  //Testes de Assertions (como o codigo deve funcionar para algo especifico)
    it('Assertion - Visible', function(){
  
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').click().type('Admin');
    cy.get('[name="password"]').click().type('admin123');
    cy.get('.oxd-button').click();
    cy.get(':nth-child(6) > .oxd-main-menu-item').click();
    cy.get('.oxd-grid-1 > .oxd-grid-item > [data-v-6653c066=""] > :nth-child(1) > .oxd-label')
    .should('be.visible');
   

  })

    it('Assertion - Contain', function(){
  
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').click().type('Admin');
    cy.get('[name="password"]').click().type('admin123');
    cy.get('.oxd-button').click();
    cy.get(':nth-child(6) > .oxd-main-menu-item').click();
    cy.get('.oxd-grid-1 > .oxd-grid-item > [data-v-6653c066=""] > :nth-child(1) > .oxd-label')
    .should('contain', 'Employee Full Name');

  })

    it('Teste de CSS - Dashboard', function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').click().type('Admin');
    cy.get('[name="password"]').click().type('admin123');
    cy.get('.oxd-button').click();
    cy.get('.orangehrm-attendance-card-state')
    .should('have.css', 'color', 'rgb(255, 123, 29)') //cor elemento;
    .should('have.css', 'font-size', '12px') //font size;
    .should('have.css', 'font-family', '"Nunito Sans", sans-serif') //nome da fonte do texto;
    cy.get('.employee-image')
    .should('have.attr', 'src', '../pim/viewPhoto/empNumber/7'); //validação da imagem
  })


  })

  


