import App, { Container } from 'next/app';
import Router from "next/router";
import React from 'react'
import { PageTransition } from 'next-page-transitions';
import smartquotes from "smartquotes";
import withGA from "next-ga";

export class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    smartquotes().listen();
  }

  render() {
    const { Component, pageProps, router } = this.props

    return (
      <Container>
        <PageTransition timeout={150} classNames="page-transition">
          <Component {...pageProps} key={router.route} />
        </PageTransition>
      </Container>
    )
  }
}

export default withGA("UA-83971195-1", Router)(MyApp);
