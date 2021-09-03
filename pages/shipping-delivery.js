import sanity from "@/lib/sanity"
import BlockContent from '@sanity/block-content-to-react'
import { getAllProductsInCollection } from '@/lib/shopify'

import { NextSeo } from 'next-seo'
import Image from 'next/image'

import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'

export default function ShippingDelivery({ global, page }) {
  return (
    <Layout>
      
      <NextSeo title="Shipping &amp; Delivery | Trust Precision Engineering" />

      <Header bannerContent={global.fixedBannerContent} />

      <LazyMotion features={domAnimation}>
        
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
            <m.div variants={fade} className="mt-40 lg:mt-64">
              
              <div className="max-w-screen-md p-8 mx-auto lg:py-20">

                <h1 className="mb-4 text-2xl font-bold md:text-3xl xl:text-4xl">{page.title}</h1>
                
                <div className="mb-4 content">
                  
                  <BlockContent serializers={{ container: ({ children }) => children }} blocks={page.content} />

                </div>

              </div>

            </m.div>

        </m.div>

      </LazyMotion>

      <Footer />
    </Layout>
  )
}

const pageQuery = `*[_type == "shippingDelivery"][0] 
  {
    _id,
    title,
    heroHeading,
    heroBlurb,
    heroBackgroundImage {
      asset ->
    },
    contentHeading,
    content,
    seo {
      ...,
      shareGraphic {
        asset->
      }
    }
  }
`;

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
  const page = await sanity.fetch(pageQuery);  
  const products = await getAllProductsInCollection();

  return {
    props: {
      global,
      page,
      products
    },
  }
}
