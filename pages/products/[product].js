import Layout from '@/components/layout'
import Header from '@/components/header'
import { getProductSlugs, getProduct } from '@/lib/shopify'
import ProductSection from '@/components/ProductSection'
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
          className="mb-12 md:mb-16 xl:mb-24"
        >

          <m.div variants={fade}>

            <div className="min-h-screen">
              <ProductSection productData={productData} />
            </div>

          </m.div>
          
      </m.div>

    </LazyMotion>
      
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
