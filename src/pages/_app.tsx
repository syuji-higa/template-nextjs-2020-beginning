import React from 'react'
import App, { AppProps } from 'next/app'
import 'sanitize.css'

class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps }: AppProps = this.props

    return (
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}

export default MyApp
