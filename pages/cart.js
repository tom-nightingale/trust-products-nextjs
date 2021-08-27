import { NextSeo } from 'next-seo'
import Layout from '@/components/layout'
import Header from '@/components/header'
import { fade } from '@/helpers/transitions'
import Container from '@/components/container'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import CartTable from '@/components/CartTable'
import CheckOutButton from '@/components/CheckOutButton'
import BackToProductButton from '@/components/BackToProductButton'
import { useCartContext } from '@/context/Store'

function CartPage() {
  const [cart, checkoutUrl] = useCartContext()

  return (

    <Layout>

      <NextSeo title="Cart | Trust Precision Engineering" />

      <Header />

      <LazyMotion features={domAnimation}>
        
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >

          <m.div variants={fade} className="mt-64">
            
            <Container>

            <div className="container min-h-screen mx-auto mb-20">
            
            <CartTable cart={cart} />
            
            <div className="flex flex-col items-center justify-between w-full px-2 md:flex-row">
              <CheckOutButton webUrl={checkoutUrl} />
              <BackToProductButton />
            </div>

          </div>


            </Container>

          </m.div>

        </m.div>

      </LazyMotion>

    </Layout>
  )
}

export default CartPage
