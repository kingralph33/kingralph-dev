/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.

'use strict';

describe('Footer content', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('Displays footer message', () => {
		cy.get('[data-cy=footer-message]').should('be.visible');
	});
});

export {};
