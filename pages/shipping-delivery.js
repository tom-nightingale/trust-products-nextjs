import sanity from "@/lib/sanity"
import BlockContent from '@sanity/block-content-to-react'
import { getAllProductsInCollection } from '@/lib/shopify'

import { NextSeo } from 'next-seo'
import Image from 'next/image'

import Container from "@/components/container";
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CtaShipping from '@/components/Cta'
import WhyChooseUs from "@/components/WhyChooseUs";

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
            <m.div variants={fade} className="mt-40 md:mt-56 lg:mt-64">

              <Container>
                
                <div className="flex-wrap py-10 mx-auto lg:py-20 lg:flex">
                  
                  <div className="relative h-auto bg-black lg:w-1/2 min-h-[40vw] lg:min-h-0 mb-8 lg:mb-0">
                    {/* <Image
                        {...heroBackgroundProps}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="z-10 duration-500 ease-in-out transform"
                      /> */}
                  </div>
                  
                  <div className="lg:w-1/2 content lg:p-12 xl:p-20">
                      
                      <h1>{page.title}</h1>

                      <BlockContent serializers={{ container: ({ children }) => children }} blocks={page.content} />
                      
                  </div>
                </div>
              </Container>

              <WhyChooseUs />   

              <CtaShipping ctaHeading={global.ctaHeading} ctaBlurb={global.ctaBlurb} ctaBackground={global.ctaBackground} />

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
