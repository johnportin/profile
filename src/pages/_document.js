import { Html, Head, Main, NextScript } from "next/document";
import ProfilePicture from "../images/profile.jpg";

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <title>John Portin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="John Portin" />
        <meta property="og:description" content="John Portin's Portfolio." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://johnportin.me" />
        <meta property="og:image" content={ProfilePicture} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
