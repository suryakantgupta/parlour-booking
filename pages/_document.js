import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '../util/createEmotionCache';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link rel="icon" href="/favicon.ico" type="image/ico" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/ico" />
          <link rel="apple-touch-icon" href="/images/gifttown-og-logo.png" />
          <link rel="android-touch-icon" href="/images/gifttown-og-logo.png" /> */}

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />


          {/* <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
          <meta name="geo.region" content="India" />
          <meta property="og:type" content="Website" />
          <meta property="og:title" content="The Gifttown-Customized Plaque | Online Gift Shop" />
          <meta property="og:url" content="https://thegifttown.com/" />
          <meta property="og:description" content="Buy customized plaques online. Personalized Spotify plaque, Apple plaque, music keychain is available at the gifttown store" />
          <meta property="og:site_name" content="The Gifttown" />
          <meta property="og:image" content="/images/gifttown-og-logo.png" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async ctx => {
  // Render app and page and get the context of the page with collected side effects.
  const originalRenderPage = ctx.renderPage

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => {
        return <App emotionCache={cache} {...props} />;
      },
    });
  const initialProps = await Document.getInitialProps(ctx)

  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      ...emotionStyleTags,
    ],
  };
}

export default MyDocument