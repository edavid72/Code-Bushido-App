import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* Roboto+Mono Font: From Google Fonts */}
      <meta name="description" content="Code Bushido - Manga & Anime Shop" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Normalize */}
      <link
        rel="stylesheet"
        href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
