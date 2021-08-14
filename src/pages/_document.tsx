import Document, { Html, Head, Main, NextScript } from 'next/document';

class CovidDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-teal-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CovidDocument;
