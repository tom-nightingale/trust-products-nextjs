import { NextSeo } from 'next-seo'
import Image from 'next/image'

import sanity from "@/lib/sanity"
import { getProductSlugs, getProduct } from '@/lib/shopify'

import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import ProductSection from '@/components/ProductSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import CtaShipping from '@/components/Cta'


import { LazyMotion, domAnimation, m } from 'framer-motion'
import { fade } from '@/helpers/transitions'


function ProductPage({ global, productData }) {  

  return (
    <Layout>

      <NextSeo title={`${productData.title} | Trust Precision Engineering`} />
      
      <Header bannerContent={global.fixedBannerContent} />

      <LazyMotion features={domAnimation}>
        
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >

          <m.div variants={fade} className="mt-56 md:mt-64">

            <Container>
            
              <ProductSection productData={productData} />

            </Container>

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

export async function getStaticPaths() {
  const productSlugs = await getProductSlugs()

  const paths = productSlugs.map((slug) => {    
    const product = String(slug.node.handle)
    return {
      params: { product }
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const global = await sanity.fetch(globalQuery);
  const productData = await getProduct(params.product)  

  return {
    props: {
      global,
      productData,
    },
  }
}

export default ProductPage
