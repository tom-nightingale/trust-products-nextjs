import sanity from "@/lib/sanity"
import BlockContent from '@sanity/block-content-to-react'
import { getAllProductsInCollection } from '@/lib/shopify'

import { NextSeo } from 'next-seo'

import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ProductListings from '@/components/ProductListings'
import CtaShipping from '@/components/Cta'
import WhyChooseUs from '@/components/WhyChooseUs'

import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'

export default function Products({ global, products }) {
  return (
    <Layout>
      
      <NextSeo title="Precision Motorbike Parts | Trust Precision Engineering" />

      <Header bannerContent={global.fixedBannerContent} />
      
      <LazyMotion features={domAnimation}>
        
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >

          <m.div variants={fade} className="mt-56 md:mt-64">      

            <ProductListings products={products} /> 

            <CtaShipping ctaHeading={global.ctaHeading} ctaBlurb={global.ctaBlurb} ctaBackground={global.ctaBackground} />

            <WhyChooseUs />             
          
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
  
  const products = await getAllProductsInCollection();
  const global = await sanity.fetch(globalQuery);

  return {
    props: {
      global,
      products
    },
  }
}
