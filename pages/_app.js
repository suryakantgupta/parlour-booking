import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import createEmotionCache from '../util/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import SwiperCore, { Navigation, Autoplay, Lazy, Pagination, EffectCoverflow } from 'swiper';

import '../styles/globals.css'
import Layout from '../components/Layout/Layout';
import { ToastContainer } from "react-toastify";

const clientSideEmotionCache = createEmotionCache();

SwiperCore.use([Navigation, Autoplay, Lazy, Pagination, EffectCoverflow]);

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>

        <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick={true}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
