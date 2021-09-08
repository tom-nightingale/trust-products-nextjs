import { useState, useEffect } from 'react'
import Container from '@/components/container'
import MobileMenu from '@/components/mobile-menu'
import { useCartContext } from '@/context/Store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Header({ bannerContent }) {

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
    <header>

      <div className="fixed top-0 z-50 w-full uppercase bg-black">

        <Container>

          <div className="flex items-center justify-center w-full px-6 text-xs tracking-widest text-white md:justify-between">
        
            <p className="hidden py-4 md:inline-block">{bannerContent}</p>
            
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

      <div className="absolute left-0 w-full top-[48px] bg-black">

        <Container>

          <div className="flex flex-wrap items-center justify-between py-4 md:py-8">          
        
            <div className="relative z-30 text-center md:text-left md:w-5/12">
              <Link href="/" scroll={false}>
                  <a className="inline-block m-0">
                    <img src="/images/logo.svg" alt="Trust Precision Products Logo" className="block w-[150px] lg:w-[200px]" width="150px" height="77px" />
                  </a>
              </Link>
            </div>            

            <nav className="relative z-30 justify-between hidden w-6/12 text-sm tracking-widest text-white uppercase xl:w-5/12 lg:flex 2xl:w-1/3">
              <Link href="/" scroll={false}>
                <a className="hover:underline" aria-label="Home">
                  Home
                </a>
              </Link>

              <Link href="/products" scroll={false}>
                <a className="hover:underline" aria-label="Products">
                  Products
                </a>
              </Link>

              <Link href="/shipping-delivery" scroll={false}>
                <a className="hover:underline" aria-label="Products">
                  Shipping &amp; Delivery
                </a>
              </Link>
              
              <Link href="/contact" scroll={false}>
                <a className="hover:underline" aria-label="Contact">
                  Contact
                </a>
              </Link>
            </nav>

          </div>

          <MobileMenu navItems={navItems} />

        </Container>
          
      </div>
      
    </header>
  )
}