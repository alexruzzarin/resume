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
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}
