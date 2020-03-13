import * as React from 'react'
import { render, cleanup } from '@testing-library/react'
import Index from '~/pages/index'

afterEach(cleanup)

describe('Index page', (): void => {
  it('link to Next.js site', (): void => {
    const { getByText } = render(<Index />)
    expect(getByText('Next.js!').getAttribute('href')).toBe(
      'https://nextjs.org'
    )
  })
  it.todo('Index TODO')
})
