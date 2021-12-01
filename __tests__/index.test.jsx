/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'


describe('Home', () => {
    it('renders a site title', () => {
        render(<Home />)

        const siteTitle = screen.getByTitle('KingRalph.dev')

        expect(siteTitle).toBeInTheDocument()
    })

})