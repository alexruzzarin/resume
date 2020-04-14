import Document, { Html, Head, Main, NextScript } from 'next/document';

class CovidDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-teal-100">
          <Main/>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CovidDocument;
