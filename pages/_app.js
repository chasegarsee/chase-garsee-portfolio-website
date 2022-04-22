import '../styles/globals.scss'

//import { useEffect } from 'react'
import Script from 'next/script'
import Head from 'next/head'
//import { useRouter } from 'next/router'
import * as gtag from '../library/gtag'

import Navigation from '../components/navigation'
import useDarkMode from "../hooks/useDarkMode";
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  const [colorTheme, setTheme] = useDarkMode();
  // const router = useRouter()
  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageView(url)
  //   }
  //   router.events.on('routeChangeComplete', handleRouteChange)
  //   router.events.on('hashChangeComplete', handleRouteChange)
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //     router.events.off('hashChangeComplete', handleRouteChange)
  //   }
  // }, [router.events])


  return (
    <div className="app-container bg-white text-gray-700 dark:bg-gray-900 dark:text-white">
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Head>
        <Script
          strategy="afterInteractive" 
          src="https://www.googleoptimize.com/optimize.js?id=OPT-PTXJ8BQ"
          />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <Navigation colorTheme={colorTheme} setTheme={setTheme} />
      <Component colorTheme={colorTheme} {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
