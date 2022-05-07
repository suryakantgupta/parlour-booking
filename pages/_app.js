import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../util/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';

import '../styles/globals.css'

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        {/* <Layout> */}
          <Component {...pageProps} />
        {/* </Layout> */}
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
