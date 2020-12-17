import React from 'react'
<reference types="Cypress"/>

describe("Form App", ()=>{
    beforeEach(()=>{

        cy.visit("http://localhost:3000")
    })//end before each
    function nameInput(){
        return cy.get('input[name="name"]')
    }
    function emailInput(){
        return cy.get("input[name='email']")
    }
    function passwordInput(){
        return cy.get('input[name="password"]')
    }
    function userCheck(){
        return cy.get('input[name="eula"]')
    }


    it("can input form values", ()=>{
        nameInput()
            .should('exist')
            .should('have.value', "")
            .type('Jamie')
            .should('have.value', "Jamie")

            emailInput()
                .should('exist')
                .should('have.value', "")
                .type('jamie@gmail.com')
                .should('have.value', "jamie@gmail.com")

            passwordInput()
                .should('exist')
                .should('have.value', "")
                .type('jlh81699')
                .should('have.value', "jlh81699")

            userCheck()
                .should('exist')
                .should('have.value', "false")
                .click()
                .should('have.value', "true")

            cy.contains('Submit')
                .click()

            nameInput()
                .should('have.value', "")
        })

    it("shows validation errors",()=>{
        nameInput()
            .type("j")

        cy.contains(/name must be 3 characters long/i)

        passwordInput()
            .type('2')

        cy.contains(/password must be 8 characters/i)

        emailInput()
            .type("j")
        cy.contains(/must be a valid email/i)
    })
})