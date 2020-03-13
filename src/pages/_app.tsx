import React from 'react'
import App, { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import 'sanitize.css'

const theme = {}

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps }: AppProps = this.props

    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default MyApp
