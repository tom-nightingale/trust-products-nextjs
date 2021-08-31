import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Dots from '@/components/dots'
import ProductListings from '@/components/ProductListings'
import { fade } from '@/helpers/transitions'
import { getAllProductsInCollection } from '@/lib/shopify'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import CtaShipping from '@/components/Cta'

export default function Home({ products }) {
  return (
    <Layout>
      
      <NextSeo title="Precision Motorbike Parts | Trust Precision Engineering" />

      <Header />
      
      <LazyMotion features={domAnimation}>
        
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >

          <m.div variants={fade} className="mt-56 md:mt-64">           

            <ProductListings products={products} /> 

            <CtaShipping />

            <div className="mx-auto my-12 max-w-screen-2xl">

              <div className="flex flex-wrap bg-white">

                <div className="relative p-4 text-center md:w-1/3 md:p-8 lg:p-16 after:absolute after:right-0 after:top-[50%] after:w-[1px] after:h-1/2 after:transform after:-translate-y-1/2 after:bg-black/10">           
                  <p className="mb-2 font-black tracking-widest uppercase">AS9100 Aerospace Accredited</p>
                  <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis faucibus lorem, a aliquam turpis ullamcorper vel. Pellentesque leo felis, tempor tempus viverra non, faucibus non ligula.</p>
                </div>    

                <div className="relative p-4 text-center md:w-1/3 md:p-8 lg:p-16 after:absolute after:right-0 after:top-[50%] after:w-[1px] after:h-1/2 after:transform after:-translate-y-1/2 after:bg-black/10">           
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

export async function getStaticProps() {
  
  const products = await getAllProductsInCollection();

  return {
    props: {
      products
    },
  }
}
