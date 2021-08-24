import Container from '@/components/container'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-white bg-black">

    <div className="py-12 border-b border-opacity-25 opacity-75 border-primary-light">
        <Container>
            <div className="flex flex-wrap justify-start text-xs leading-loose tracking-widest uppercase sm:-mx-5">

                <div className="w-full mb-8 sm:w-1/2 md:w-1/4 sm:px-5 md:mb-0">
                  <Link href="/" scroll={false}>
                      <a className="block m-0">
                        <img src="/images/logo.svg" alt="Trust Precision Products Logo" className="block w-[150px] lg:w-[200px]" />
                      </a>
                  </Link>
                </div>

                <div className="w-full mb-8 sm:w-1/2 md:w-1/4 sm:px-5 md:mb-0">
                    <address className="not-italic">
                        <span className="block" property="name">Trust Precision Products</span>
                        <span className="block" property="addressLocality">Unit 2 Meadowbank Court</span>
                        <span className="block" property="addressRegion">Nottinghamshire</span>
                        <span className="block" property="postalCode">NG16 3SL</span>
                        <span className="block" property="addressCountry">United Kingdom</span>
                    </address>
                </div>

                <div className="w-full mb-8 sm:w-1/2 md:w-1/4 sm:px-5 md:mb-0">
                    <a href="mailto:test@test.com" className="block no-underline break-words hover:text-secondary focus:text-secondary">test@test.com</a>
                    <a href="tel:01773719239" className="block mb-5 no-underline hover:text-secondary focus:text-secondary">01773 719 239</a>
                </div>

                <div className="w-full mb-8 sm:w-1/2 md:w-1/4 sm:px-5 md:mb-0">
                    <nav role="navigation" aria-label="Footer Navigation">
                        <ul>
                            <li className="mb-2">
                              <Link href="/">
                                <a className="text-white hover:text-secondary focus:text-secondary custom-class">Home</a>
                              </Link>
                            </li>

                            <li className="mb-2">
                              <Link href="/products">
                                <a className="text-white hover:text-secondary focus:text-secondary custom-class">Products</a>
                              </Link>
                            </li>

                            <li className="mb-2">
                              <Link href="/shipping-delivery">
                                <a className="text-white hover:text-secondary focus:text-secondary custom-class">Shipping &amp; Delivery</a>
                              </Link>
                            </li>

                            <li className="mb-2">
                              <Link href="/contact">
                                <a className="text-white hover:text-secondary focus:text-secondary custom-class">Contact</a>
                              </Link>
                            </li>

                            <li className="mb-2">
                              <Link href="/">
                                <a className="text-white hover:text-secondary focus:text-secondary custom-class">Terms &amp; Conditions</a>
                              </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </Container>
    </div>
</footer>
  )
}