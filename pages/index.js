import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import ProductListings from '@/components/ProductListings'
import { fade } from '@/helpers/transitions'
import { getAllProductsInCollection } from '@/lib/shopify'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import Dots from '@/components/dots'
import Button from '@/components/button'

export default function Home({ products }) {
  return (
    <Layout>
      
      <NextSeo title="Something else" />

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

                <div className="relative flex items-center h-[90vh] min-h-[750px] p-8 py-20 pt-48 overflow-hidden text-white bg-black xs:py-20 md:py-12 lg:py-20 xl:py-40 2xl:py-40">

                  <div className="absolute top-0 bottom-0 left-0 right-0">
                    <Image
                      src="/images/motorbike.jpg"
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      className="z-10 duration-500 ease-in-out transform opacity-50 grayscale md:grayscale-0 lg:opacity-90"
                    />
                  </div>

                  <div className="w-full px-0 mx-auto max-w-screen-3xl 3xl:px-8">

                    <div className="relative z-10 md:w-2/3 lg:w-1/3">

                      <p className="mb-4 text-2xl font-black tracking-widest uppercase xs:text-3xl md:text-4xl lg:text-5xl">Aftermarket motorbike parts</p>

                      <p className="font-light tracking-wide md:text-lg opacity-90">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel aliquam lorem, non imperdiet dui.</p>

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
                  
                  <h2>Lorem ipsum dalor sit amet</h2>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar convallis maximus. Fusce eget cursus nisl. Mauris in dapibus nunc. Morbi fermentum at justo quis tincidunt. Nam in sapien quis magna elementum commodo. In nec interdum nulla. Pellentesque aliquam pellentesque urna id sodales.</p>

                  <hr className="max-w-sm mx-auto mb-4" />
                  
                  <p>Praesent quam magna, vehicula ut erat ut, fringilla ultrices nibh. In pharetra ipsum lorem, ac porta enim mollis luctus. Sed nec imperdiet felis</p>
                  
              </div>
            </Container>

            <ProductListings products={products} /> 

            <div className="relative flex flex-wrap items-center mx-auto my-12 mt-20 bg-black max-w-screen-2xl">

              <Dots classes="hidden md:block absolute top-0 right-0 3xl:top-[-50px] 3xl:right-[-50px] w-[150px] h-[150px] bg-dots opacity-[50%] text-black bg-black" />

              <div className="relative w-full md:w-1/2 min-h-[400px] order-2">
                <Image
                  src="/images/harley.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="z-10 duration-500 ease-in-out"
                />
              </div>

              <div className="relative z-10 w-full p-10 text-white md:p-20 md:w-1/2 md:order-3"> 
                <p className="text-xl font-black tracking-widest uppercase">Precision parts, made to order.</p>
                <p>We provide precision motorbike parts to our customers worldwide, ranging from here in the U.K to Australia, Europe and the United States.</p>
                <p>We offer express international shipping worldwide, allowing to enjoy your parts as soon as possible.</p>
              </div>

            </div>

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

export async function getStaticProps() {
  
  const products = await getAllProductsInCollection();

  return {
    props: {
      products
    },
  }
}
