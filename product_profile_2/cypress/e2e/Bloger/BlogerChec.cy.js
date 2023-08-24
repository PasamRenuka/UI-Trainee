describe('example to-do app', () => {
    beforeEach(() => {

      cy.visit('http://localhost:3000/')

    })
    
     

    it('Entering into the Profile Page', () => {

        cy.get("#User-Router").click()

     })
     it('Entering into the Login Page', () => {

      cy.get("#User-Router").click()
      cy.get("#LoginButton").click()

   })
   it('Entering into the Login Page', () => {

      cy.get("#User-Router").click()
      cy.get("#LoginButton").click()
      cy.get("#ProtectedPageBtn").click()

 })
 it('Enter publish value',()=>{
   cy.get("#User-Router").click()
   cy.get("#LoginButton").click()
   cy.get("#ProtectedPageBtn").click() 
    cy.get('#publishName').type('Google')
  cy.get('#publishName').should('have.value','Google')
 })

 it('Enter Name value',()=>{
  cy.get("#User-Router").click()
  cy.get("#LoginButton").click()
   cy.get("#ProtectedPageBtn").click() 
  cy.get('#Name').type('Renuka')
  cy.get('#Name').should('have.value','Renuka')
 })

 it('Enter LastName value',()=>{
  cy.get("#User-Router").click()
  cy.get("#LoginButton").click()
   cy.get("#ProtectedPageBtn").click() 
  cy.get('#LastName').type('Pasam')
  cy.get('#LastName').should('have.value','Pasam')
 })


 it('Enter Headline value',()=>{
  cy.get("#User-Router").click()
  cy.get("#LoginButton").click()
   cy.get("#ProtectedPageBtn").click() 
  cy.get('#Headline').type('Mortage')
  cy.get('#Headline').should('have.value','Mortage')
 })

 it('Enter posturl value',()=>{
  cy.get("#User-Router").click()
  cy.get("#LoginButton").click()
   cy.get("#ProtectedPageBtn").click() 
  cy.get('#posturl').type('/example.com')
  cy.get('#posturl').should('have.value','/example.com')
  // cy.get("#save").click()
 })


 
 it(' click on cancel',()=>{
   cy.get("#User-Router").click()
   cy.get("#LoginButton").click()
    cy.get("#ProtectedPageBtn").click() 
   cy.get("#image1").selectFile("/Users/renukakrishna/Documents/UI-Trainee/product_profile_2/cypress/e2e/Bloger/wallpaper.jpg");
   cy.get("#image2").selectFile("/Users/renukakrishna/Documents/UI-Trainee/product_profile_2/cypress/e2e/Bloger/wallpaper.jpg");
 
   cy.get('#publishName').type('Google')
   cy.get('#publishName').should('have.value','Google')
   cy.get('#Name').type('Renuka')
   cy.get('#Name').should('have.value','Renuka')
   cy.get('#LastName').type('Pasam')
   cy.get('#LastName').should('have.value','Pasam')
   cy.get('#Headline').type('Mortage')
   cy.get('#Headline').should('have.value','Mortage')
   cy.get('#posturl').type('/example.com')
   cy.get('#posturl').should('have.value','/example.com')
   cy.get("#cancle").click()
})

it('choosing profile picture value and saving profile ',()=>{
   cy.get("#User-Router").click()
   cy.get("#LoginButton").click()
    cy.get("#ProtectedPageBtn").click() 
   cy.get("#image1").selectFile("/Users/renukakrishna/Documents/UI-Trainee/product_profile_2/cypress/e2e/Bloger/wallpaper.jpg");
   cy.get("#image2").selectFile("/Users/renukakrishna/Documents/UI-Trainee/product_profile_2/cypress/e2e/Bloger/wallpaper.jpg");
 
   cy.get('#publishName').type('Google')
   cy.get('#publishName').should('have.value','Google')
   cy.get('#Name').type('Renuka')
   cy.get('#Name').should('have.value','Renuka')
   cy.get('#LastName').type('Pasam')
   cy.get('#LastName').should('have.value','Pasam')
   cy.get('#Headline').type('Mortage')
   cy.get('#Headline').should('have.value','Mortage')
   cy.get('#posturl').type('/example.com')
   cy.get('#posturl').should('have.value','/example.com')
   cy.get("#save").click()
  })

  it(' saving profile page to edit page ',()=>{
   cy.get("#User-Router").click()
   cy.get("#LoginButton").click()
    cy.get("#ProtectedPageBtn").click() 
   cy.get("#image1").selectFile("/Users/renukakrishna/Documents/UI-Trainee/product_profile_2/cypress/e2e/Bloger/wallpaper.jpg");
   cy.get("#image2").selectFile("/Users/renukakrishna/Documents/UI-Trainee/product_profile_2/cypress/e2e/Bloger/wallpaper.jpg");
 
   cy.get('#publishName').type('Google')
   cy.get('#publishName').should('have.value','Google')
   cy.get('#Name').type('Renuka')
   cy.get('#Name').should('have.value','Renuka')
   cy.get('#LastName').type('Pasam')
   cy.get('#LastName').should('have.value','Pasam')
   cy.get('#Headline').type('Mortage')
   cy.get('#Headline').should('have.value','Mortage')
   cy.get('#posturl').type('/example.com')
   cy.get('#posturl').should('have.value','/example.com')
   cy.get("#save").click()
   cy.get('#edit').click()
   cy.get("#image1").selectFile("/Users/renukakrishna/Documents/UI-Trainee/product_profile_2/cypress/e2e/Bloger/wallpaper.jpg");
   cy.get("#image2").selectFile("/Users/renukakrishna/Documents/UI-Trainee/product_profile_2/cypress/e2e/Bloger/wallpaper.jpg");
 
   cy.get('#publishName').type('Google')
   cy.get('#publishName').should('have.value','Google')
   cy.get('#Name').type('Renuka')
   cy.get('#Name').should('have.value','Renuka')
   cy.get('#LastName').type('Pasam')
   cy.get('#LastName').should('have.value','Pasam')
   cy.get('#Headline').type('Mortage')
   cy.get('#Headline').should('have.value','Mortage')
   cy.get('#posturl').type('/example.com')
   cy.get('#posturl').should('have.value','/example.com')
   cy.get("#save").click()
   cy.get("#Logout-Button").click()

  })

    

    })