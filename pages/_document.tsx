// This file provides the overall layout of the site via the `render` method.

import Document, { Html, Head, Main, NextScript } from "next/document";
import newrelic from "newrelic";

// In order to inject the browser agent we need to perform an asynchronous
// operation. To do that, we need to extend the `Document` object as
// described in
// https://nextjs.org/docs/pages/building-your-application/routing/custom-document#customizing-renderpage
class RootDocument extends Document {
  static async getInitialProps(context) {
    const initialProps = await Document.getInitialProps(context);

    if (newrelic.agent.collector.isConnected() === false) {
      await new Promise((resolve) => {
        newrelic.agent.on("connected", resolve);
      });
    }

    // @ts-ignore
    const browserTimingHeader = newrelic.getBrowserTimingHeader({
      hasToRemoveScriptWrapper: true,
      allowTransactionlessInjection: true,
    });

    return {
      ...initialProps,
      browserTimingHeader,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: this.props.browserTimingHeader }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default RootDocument;
