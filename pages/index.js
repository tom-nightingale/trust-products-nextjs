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
        
        <m.main
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >    

          <m.div variants={fade}>     

            <div className="md:mt-12">
              
              <Container>

                <div className="relative p-8 overflow-hidden text-white bg-black md:p-12 lg:p-20 xl:py-40 2xl:py-40">

                  {/* <img src="images/motorbike.jpg" className="absolute z-0 transform -translate-x-1/2 -translate-y-1/2 opacity-50 top-1/2 left-1/2 grayscale md:grayscale-0 md:opacity-90" alt="Motorbike image" /> */}

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

                    <p className="text-lg font-light tracking-wide opacity-90">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel aliquam lorem, non imperdiet dui.</p>

                    <Link href="/" scroll={false}>
                      <a className="inline-block p-4 mt-8 font-bold tracking-widest uppercase border border-white">
                        View products
                      </a>
                    </Link>

                  </div>
                  
                </div>
                
              </Container>
            </div>

            <ProductListings products={products} />      
          
          </m.div>
          
        </m.main>
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
