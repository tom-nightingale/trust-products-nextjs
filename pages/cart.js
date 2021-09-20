import sanity from "@/lib/sanity"
import { useCartContext } from '@/context/Store'

import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import CartTable from '@/components/CartTable'
import CheckOutButton from '@/components/CheckOutButton'
import BackToProductButton from '@/components/BackToProductButton'

import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'


export default function CartPage({ global }) {
  const [cart, checkoutUrl] = useCartContext();

  return (

    <Layout>

      <NextSeo title="Cart | Trust Precision Engineering" />

      <Header bannerContent={global.fixedBannerContent} />

      <LazyMotion features={domAnimation}>
        
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >

          <m.div variants={fade} className="mt-64">
            
            <Container>

            <div className="container min-h-screen mx-auto mb-20">
            
              <CartTable cart={cart} />
              
              <div className="flex flex-col items-center justify-between w-full px-2 md:flex-row">
                <CheckOutButton webUrl={checkoutUrl} />
                <BackToProductButton />
              </div>

            </div>


            </Container>

          </m.div>

        </m.div>

      </LazyMotion>

      <Footer />

    </Layout>
  )
}

const globalQuery = `*[_type == "global"][0] 
  {
    fixedBannerContent,
    ctaBackground {
      asset ->
    },
    ctaHeading,
    ctaBlurb
  }
`;

export async function getStaticProps() {
  const global = await sanity.fetch(globalQuery);
  return {
    props: {
      global
    },
  }
}
