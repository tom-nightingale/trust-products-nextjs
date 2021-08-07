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

            <div className="relative z-20">

                <div className="relative flex items-center min-h-screen p-8 py-20 pt-48 overflow-hidden text-white bg-black xs:py-20 md:py-12 lg:py-20 xl:py-40 2xl:py-40">

                  <div className="absolute top-0 bottom-0 left-0 right-0">
                    <Image
                      src="/images/motorbike.jpg"
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      className="z-10 duration-500 ease-in-out transform opacity-50 grayscale md:grayscale-0 lg:opacity-90"
                    />
                  </div>

                  <div className="w-full mx-auto max-w-screen-3xl">

                    <div className="relative z-10 sm:w-2/3 lg:w-1/3">

                      <p className="mb-4 text-2xl font-black tracking-widest uppercase xs:text-3xl md:text-4xl lg:text-5xl">Aftermarket motorbike parts</p>

                      <p className="font-light tracking-wide md:text-lg opacity-90">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel aliquam lorem, non imperdiet dui.</p>

                      <Link href="/" scroll={false}>
                        <a className="inline-block p-4 mt-8 font-bold tracking-widest uppercase border border-white">
                          View products
                        </a>
                      </Link>

                    </div>

                  </div>
                  
                </div>
                
            </div>

            <Container>
              <div className="max-w-screen-md py-8 mx-auto text-center md:py-12 lg:py-20 content">
                  <h2>Lorem ipsum dalor sit amet</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar convallis maximus. Fusce eget cursus nisl. Mauris in dapibus nunc. Morbi fermentum at justo quis tincidunt. Nam in sapien quis magna elementum commodo. In nec interdum nulla. Pellentesque aliquam pellentesque urna id sodales.</p>
                  <p>Praesent quam magna, vehicula ut erat ut, fringilla ultrices nibh. In pharetra ipsum lorem, ac porta enim mollis luctus. Sed nec imperdiet felis</p>
              </div>
            </Container>

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
