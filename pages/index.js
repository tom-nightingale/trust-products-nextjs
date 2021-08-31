import sanity from "@/lib/sanity"
import BlockContent from '@sanity/block-content-to-react'
import { useNextSanityImage } from 'next-sanity-image';
import { getAllProductsInCollection } from '@/lib/shopify'

import { NextSeo } from 'next-seo'
import Image from 'next/image'

import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import ProductListings from '@/components/ProductListings'
import { fade } from '@/helpers/transitions'

import { LazyMotion, domAnimation, m } from 'framer-motion'
import Button from '@/components/button'
import CtaShipping from '@/components/Cta'

export default function Home({ global, home, products }) {

  const heroBackgroundProps = useNextSanityImage(
		sanity,
		home.heroBackgroundImage
	);

  return (
    <Layout>
      
      <NextSeo title={home.seo.metaTitle} />

      <Header bannerContent={global.fixedBannerContent} />
      
      <LazyMotion features={domAnimation}>
        
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >

          <m.div variants={fade}>     

            <div className="relative z-20">

                <div className="relative flex items-center h-[90vh] min-h-[750px] p-8 py-20 pt-48 overflow-hidden text-white bg-black xs:py-20 md:py-12 lg:py-20 xl:py-40 2xl:py-40">

                  <div className="absolute top-0 bottom-0 left-0 right-0">
                    <Image
                      {...heroBackgroundProps}
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      className="z-10 duration-500 ease-in-out transform opacity-50 grayscale md:grayscale-0 lg:opacity-90"
                    />
                  </div>

                  <div className="w-full px-0 mx-auto max-w-screen-3xl 3xl:px-8">

                    <div className="relative z-10 md:w-2/3 lg:w-1/3">

                      <p className="mb-4 text-2xl font-black tracking-widest uppercase xs:text-3xl md:text-4xl lg:text-5xl">{home.heroHeading}</p>

                      <p className="font-light tracking-wide md:text-lg opacity-90">{home.heroBlurb}</p>

                      <Button
                        destination="/products"
                        label="View products"
                        a11yText="View our products"    
                        extraClasses="mt-8 btn--border-white"   
                      />

                    </div>

                  </div>                 
                  
                </div>
                
            </div>

            <Container>
              <div className="max-w-screen-md p-8 mx-auto text-center md:p-12 lg:p-20 content">
                  
                  <h1>{home.contentHeading}</h1>

                  <BlockContent serializers={{ container: ({ children }) => children }} blocks={home.content} />
                  
              </div>
            </Container>

            <ProductListings products={products} /> 

            <CtaShipping ctaHeading={global.ctaHeading} ctaBlurb={global.ctaBlurb} ctaBackground={global.ctaBackground} />

            <div className="mx-auto my-12 max-w-screen-2xl">

              <div className="flex flex-wrap bg-white">

                <div className="relative p-4 text-center md:w-1/3 md:p-8 lg:p-16 after:absolute after:right-0 after:top-[50%] md:after:w-[1px] after:h-1/2 after:transform after:-translate-y-1/2 after:bg-black/10">           
                  <p className="mb-2 font-black tracking-widest uppercase">AS9100 Aerospace Accredited</p>
                  <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis faucibus lorem, a aliquam turpis ullamcorper vel. Pellentesque leo felis, tempor tempus viverra non, faucibus non ligula.</p>
                </div>    

                <div className="relative p-4 text-center md:w-1/3 md:p-8 lg:p-16 after:absolute after:right-0 after:top-[50%] md:after:w-[1px] after:h-1/2 after:transform after:-translate-y-1/2 after:bg-black/10">           
                  <p className="mb-2 font-black tracking-widest uppercase">International Shipping</p>
                  <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis faucibus lorem, a aliquam turpis ullamcorper vel. Pellentesque leo felis, tempor tempus viverra non, faucibus non ligula.</p>
                </div>   

                <div className="relative p-4 text-center md:w-1/3 md:p-8 lg:p-16">           
                  <p className="mb-2 font-black tracking-widest uppercase">Customer Focused Service</p>
                  <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis faucibus lorem, a aliquam turpis ullamcorper vel. Pellentesque leo felis, tempor tempus viverra non, faucibus non ligula.</p>
                </div>                   

              </div>
          
            </div>            
          
          </m.div>
          
        </m.div>
        
      </LazyMotion>

      <Footer />
      
    </Layout>
  )
}

const homeQuery = `*[_type == "home"][0] 
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
  const home = await sanity.fetch(homeQuery);  
  const products = await getAllProductsInCollection();

  return {
    props: {
      global,
      home,
      products
    },
  }
}
