import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta property="og:title" content="John Portin" />
        <meta
          property="og:description"
          content="John is an aspiring software engineer. ."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://johnportin.me" />
        <meta
          property="og:image"
          content="https://johnportin.me/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile.f438ed6a.jpg&w=828&q=75"
        />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
