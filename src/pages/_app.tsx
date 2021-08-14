import App, { AppContext } from "next/app";
import Head from "next/head";

import resume from "../resume";
import "./_app.css";

export default class CovidApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    const { basics, work } = resume;
    const actualWork = work[0];

    return (
      <>
        <Head>
          <title>
            {basics.name} | {basics.label}
          </title>
          {/* <link rel="shortcut icon" href={config.favicon} /> */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0"
          />
          <meta
            name="description"
            content={`${basics.name} | ${basics.label} @ ${actualWork.company}`}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest"></link>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
