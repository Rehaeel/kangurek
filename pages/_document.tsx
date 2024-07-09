import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/js/newrelic.js";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <Html lang="pl-PL">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
