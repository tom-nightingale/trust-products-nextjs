import { useState, useEffect } from 'react'
import FancyLink from '@/components/fancyLink'
import Container from '@/components/container'
import MobileMenu from '@/components/mobile-menu'
import { useCartContext } from '@/context/Store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Header() {

  const cart = useCartContext()[0]
  const [cartItems, setCartItems] = useState(0)

  useEffect(() => {
    let numItems = 0
    cart.forEach(item => {
      numItems += item.variantQuantity
    })
    setCartItems(numItems)
  }, [cart])

  const navItems = [
    'Home',
    'Products',
    'Shipping & Delivery',
    'Cart',
    'Contact'
  ]

  return (
    <header className="">

      <div className="fixed top-0 z-50 w-full uppercase bg-primary-dark">

        <Container>

          <div className="flex items-center justify-center text-xs tracking-widest text-white md:justify-between">
        
            <p className="hidden p-4 md:block">International shipping now available on all products!</p>
            
            <Link
              href="/cart"
              passHref
              scroll={false}
            >
              <a className="relative flex items-center py-4 font-bold text-center" aria-label="cart">
                <FontAwesomeIcon className="w-6 mb-0 mr-2 text-sm" icon={faShoppingCart} />
                Cart
                {
                  cartItems === 0 ?
                    null
                    :
                    <>
                      <span className="ml-1">({cartItems})</span>
                    </>
                }
              </a>
            </Link>

          </div>

        </Container>
        
      </div>     

      <div className="absolute left-0 z-20 w-full top-[50px]">

        <Container>

          <div className="flex flex-wrap items-center justify-between py-4 md:py-8">          
        
            <div className="text-center sm:w-1/2 md:text-left md:w-5/12">
              <Link href="/" scroll={false}>
                  <a className="inline-block mx-auto">
                    <img src="/images/logo.svg" alt="Trust Precision Products Logo" className="hidden sm:block w-[375px]" />
                    <img src="/images/logo-mobile.svg" alt="Trust Precision Products Logo" className="block sm:hidden w-[100px]" />
                  </a>
              </Link>
            </div>

            <MobileMenu navItems={navItems} />

            <nav className="justify-between hidden w-6/12 text-sm tracking-widest text-white uppercase xl:w-5/12 lg:flex 2xl:w-1/3">
              <Link href="/" scroll={false}>
                <a className="" aria-label="Home">
                  Home
                </a>
              </Link>

              <Link href="/products" scroll={false}>
                <a className="" aria-label="Products">
                  Products
                </a>
              </Link>

              <Link href="/shipping-delivery" scroll={false}>
                <a className="" aria-label="Products">
                  Shipping &amp; Delivery
                </a>
              </Link>
              
              <Link href="/contact" scroll={false}>
                <a className="" aria-label="Contact">
                  Contact
                </a>
              </Link>
            </nav>

          </div>

        </Container>
          
      </div>
      
      {/* <div className="bg-primary">
        <Container>
            <div className="flex flex-wrap text-xs text-center text-white">

              <div className="hidden w-1/3 p-4 lg:p-6 lg:px-8 xl:p-10 xl:px-16 md:block">
                <p className="mb-1 text-sm font-black tracking-widest uppercase">Made with precision in the U.K.</p>
                <p>Made in our Precision Engineering factory using the latest cutting edge machinery.</p>
              </div>

              <div className="hidden w-1/3 p-4 border-l border-r lg:p-6 lg:px-8 xl:p-10 xl:px-16 border-white/25 md:block">
                <p className="mb-1 text-sm font-black tracking-widest uppercase">Express delivery options</p>
                <p>Want faster delivery? We've got you covered with our express shipping options.</p>
              </div>

              <div className="hidden w-1/3 p-4 lg:p-6 lg:px-8 xl:p-10 xl:px-16 md:block">
                <p className="mb-1 text-sm font-black tracking-widest uppercase">Worldwide shipping available</p>
                <p>Don't worry if you're not in the U.K. We can ship our aftermarket products to your door!</p>
              </div>
              
            </div>
        </Container>
      </div> */}
      
    </header>
  )
}