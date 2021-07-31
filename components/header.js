import { useState, useEffect } from 'react'
import FancyLink from '@/components/fancyLink'
import Container from '@/components/container'
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

  return (
    <header className="">

      <div className="fixed top-0 z-50 flex items-center justify-between w-full text-xs tracking-widest text-white uppercase bg-primary-dark">
        
        <p className="p-4">International shipping now available on all products!</p>
        
        <Link
          href="/cart"
          passHref
          scroll={false}
        >
          <a className="relative p-4 font-bold text-center" aria-label="cart">
            <FontAwesomeIcon className="w-6 mb-1 mr-2 text-sm xs:mb-0" icon={faShoppingCart} />
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
        
      <Container>

        <div className="flex flex-wrap items-center justify-between py-12 pb-8 mt-12 md:py-12 ">
          
          
          <div className="w-full text-center md:text-left md:w-7/12">
            <Link href="/" scroll={false}>
                <a className="inline-block mx-auto leading-tight tracking-widest text-center uppercase md:text-left">
                  <span className="block text-lg font-black">Trust Precision Products</span>
                  <span className="text-xs">Precision aftermarket motorbike parts</span>
                </a>
            </Link>
          </div>

          <nav className="justify-between hidden w-5/12 text-sm font-black tracking-widest uppercase lg:w-1/3 md:flex">
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
      
      <div className="bg-primary">
        <Container>
            <div className="flex flex-wrap text-xs text-center text-white">
              <div className="hidden w-1/3 p-4 lg:p-6 lg:px-8 md:block">
                <p className="font-black tracking-widest uppercase">Made with precision in the U.K.</p>
                <p>Lorem ipsum dalor</p>
              </div>

              <div className="hidden w-1/3 p-4 border-l border-r lg:p-6 lg:px-8 border-white/25 md:block">
                <p className="font-black tracking-widest uppercase">Express delivery options available</p>
                <p>Lorem ipsum dalor</p>
              </div>

              <div className="hidden w-1/3 p-4 lg:p-6 lg:px-8 md:block">
                <p className="font-black tracking-widest uppercase">Worldwide shipping available</p>
                <p>Lorem ipsum dalor</p>
              </div>
              
            </div>
        </Container>
      </div>
      
    </header>
  )
}