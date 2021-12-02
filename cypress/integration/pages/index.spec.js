/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.

describe('Homepage content', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('displays profile image', () => {
        cy.get('[data-cy=homepage-profileImage]').should('be visible')
    })

    it('displays twitter icon', () => {
        cy.get('[data-cy=homepage-twitter]').should('be visible')
    })
    it('displays linkedin icon', () => {
        cy.get('[data-cy=homepage-linkedin]').should('be visible')
    })
    it('displays github icon', () => {
        cy.get('[data-cy=homepage-github]').should('be visible')
    })
    it('displays email icon', () => {
        cy.get('[data-cy=homepage-email]').should('be visible')
    })
})