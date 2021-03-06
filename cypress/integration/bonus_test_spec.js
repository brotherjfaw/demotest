/// <reference types="Cypress"/>

describe("User Interacts with Automation Practice Site", () => {
    let dateTimeStamp = new Date().getTime()

    beforeEach(()=>{
        cy.visit("http://automationpractice.com/")

    })

    it("Basic Failed Search", ()=> { 
        //cy.visit("http://automationpractice.com/")
        cy.get('#search_query_top').type('Ties')
        cy.get('#searchbox > .btn').click()
        cy.contains("0 results have been found.")
    
    })

    it("Good Search", ()=> {
        cy.get('#search_query_top').type('Dresses')
        cy.get('#searchbox > .btn').click()
        cy.contains("7 results have been found.")
    
    })

    //Bug found in this script due to State selection
    it("Create an Account Part", ()=> {

        //Confirm Search Box loads
        cy.get('#search_query_top')
    
        cy.get('.login').click()
        cy.get('#email_create').type(dateTimeStamp + 'some123@gmail.com')
        cy.get('#SubmitCreate > span').click().wait(5000)

        //Confirm Authentication is present on page
        cy.contains("Authentication")

        cy.get('#account-creation_form > div:nth-child(1) > h3').then(($el) =>{
          expect($el).to.have.text("Your personal information")
        })

        cy.get('#customer_firstname').type("Testuser")
        cy.get('#customer_lastname').type("automation")
        cy.get('#passwd').type('password00')
        cy.get('#address1').type('Somewhere Nice')
        cy.get('#city').type('ACity')
        //This field appears to have an issue with selecting state.
        cy.get('#id_state').select('Maryland')
        cy.get('#postcode').type('21229')
        cy.get('#id_country').select("United States")
        cy.get('#phone').type("4438904678")
        cy.get('#submitAccount > span').click()


        cy.get('.info-account')

    
    })

    it("Try To Create an account for an Email thats registered already", ()=> {
        /*Test Credentials 
        demo_cypress@gmail.com/password00
        */

        //Confirm Search Box loads
        cy.get('#search_query_top')
        
        //Enter an account already registered.
        cy.get('.login').click()
        cy.get('#email_create').type('demo_cypress@gmail.com')
        cy.get('#SubmitCreate > span').click()

        //Confirm correct message appears
        cy.contains('An account using this email address has already been registered. Please enter a valid password or request a new one.')
    })

    it("Shopping Cart Search", ()=> { 
        cy.get('#search_query_top').type('Dresses')
        cy.get('#searchbox > .btn').click()
        cy.contains("7 results have been found.")

        //Click on first Dress
        cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.contains('There is 1 item in your cart.')//.should("have.text", "There is 1 item in your cart.")
        cy.get('.continue > span').click()

        //Click on second Dress
        cy.get(':nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click()
        cy.contains('There are 2 items in your cart.')//.should("have.text", "There are 2 items in your cart.")
        cy.get('.continue > span').click()

        cy.get('[title="View my shopping cart"]').trigger('mouseover')

        //Reached a Resouce limit 

        //Remove 1st Item
        cy.get('.remove_link').eq(0).click()

        //Remove 2nd Item
        cy.get('.remove_link').eq(1).click()

        //Confirm Shopping Cart is empty
        cy.get('[title="View my shopping cart"]').click()

        cy.contains("Your shopping cart is empty.")
    
    })


})