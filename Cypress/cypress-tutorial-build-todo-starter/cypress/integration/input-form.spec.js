describe('Input form',()=>{
    it('focuses input on load',()=>{
        cy.visit('http://localhost:50175')
        cy.focused()
        .should('have.class','new-todo')

    })

    it.only('accepts input',()=>{
        const typedText="buy milk"
        cy.visit('http://localhost:50175')
        cy.get('.new-todo')
        .type(typedText)
        .should('have.value',typedText)
    })
})