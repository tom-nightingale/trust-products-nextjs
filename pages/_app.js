import '@/styles/main.css'
import { useEffect, React } from 'react';
import { AnimatePresence } from 'framer-motion'
import { CartProvider } from '@/context/Store'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => { 
      window.setTimeout(() => window.scrollTo(0, 0), 500)
      // gtag.pageview(url)
    }
    router.events.on('routeChangeStart', handleRouteChange)
  }, [router.events])

  return (
    <CartProvider>
      <DefaultSeo {...SEO} />

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
      
    </CartProvider>
  )
}