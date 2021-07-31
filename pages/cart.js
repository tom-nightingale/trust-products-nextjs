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

      <Header />

      <LazyMotion features={domAnimation}>
        
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className="mb-12 md:mb-16 xl:mb-24"
        >

          <Container>
            <m.div variants={fade}>

              <div className="container min-h-screen mx-auto mb-20">
              
              <CartTable cart={cart} />
              
              <div className="flex flex-col items-center justify-between w-full px-2 md:flex-row">
                <CheckOutButton webUrl={checkoutUrl} />
                <BackToProductButton />
              </div>

            </div>


            </m.div>

          </Container>

        </m.div>

      </LazyMotion>

    </Layout>
  )
}

export default CartPage
