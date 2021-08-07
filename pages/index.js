import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { getAllProductsInCollection } from '@/lib/shopify'
import ProductListings from '@/components/ProductListings'
import Link from 'next/link'
import Image from 'next/image'

export default function Home({ products }) {
  return (
    <Layout>
      
      <NextSeo title="Home" />

      <Header />
      
      <LazyMotion features={domAnimation}>
        
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >    

          <m.div variants={fade}>     

            <div className="relative">

                <div className="relative flex items-center min-h-screen p-8 py-20 overflow-hidden text-white bg-black md:p-12 lg:p-20 xl:py-40 2xl:py-40 mt-[48px]">

                  <div className="absolute top-0 bottom-0 left-0 right-0">
                    <Image
                      src="/images/motorbike.jpg"
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      className="z-10 duration-500 ease-in-out transform opacity-50 grayscale md:grayscale-0 lg:opacity-90"
                    />
                  </div>

                  <div className="relative z-10 lg:w-1/3">

                    <p className="mb-4 text-2xl font-black tracking-widest uppercase md:text-5xl">Aftermarket motorbike parts</p>

                    <p className="font-light tracking-wide md:text-lg opacity-90">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel aliquam lorem, non imperdiet dui.</p>

                    <Link href="/" scroll={false}>
                      <a className="inline-block p-4 mt-8 font-bold tracking-widest uppercase border border-white">
                        View products
                      </a>
                    </Link>

                  </div>
                  
                </div>
                
            </div>

            <ProductListings products={products} />      
          
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
