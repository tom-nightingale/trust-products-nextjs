import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import { getProductSlugs, getProduct } from '@/lib/shopify'
import ProductSection from '@/components/ProductSection'
import Dots from '@/components/dots'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { fade } from '@/helpers/transitions'

function ProductPage({ productData }) {  

  return (
    <Layout>
      
      <Header />

      <LazyMotion features={domAnimation}>
        
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >

          <m.div variants={fade} className="mt-56 md:mt-64">
            
              <ProductSection productData={productData} />

              <div className="relative flex flex-wrap items-center mx-auto my-12 mt-20 bg-black max-w-screen-2xl">

              <Dots classes="absolute bottom-0 right-0 w-1/2 h-full bg-dots opacity-[5%]" />

              <div className="relative w-full md:w-1/2 min-h-[400px] order-2">
                <Image
                  src="/images/harley.jpg"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                  className="z-10 duration-500 ease-in-out transform opacity-50 grayscale md:grayscale-0 lg:opacity-90"
                />
              </div>

              <div className="w-full p-10 text-white md:p-20 md:w-1/2 md:order-3"> 
                <p className="text-xl font-black tracking-widest uppercase">Precision parts, made to order.</p>
                <p>We provide precision motorbike parts to our customers worldwide, ranging from here in the U.K to Australia, Europe and the United States.</p>
                <p>We offer express international shipping worldwide, allowing to enjoy your parts as soon as possible.</p>
              </div>

            </div>

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
  const productData = await getProduct(params.product)  

  return {
    props: {
      productData,
    },
  }
}

export default ProductPage
