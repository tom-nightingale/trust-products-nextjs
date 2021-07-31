import Container from '@/components/container'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="text-white bg-primary-dark">

    <div className="py-12 bg-primary">
        <Container>
            <span className="block font-light leading-tight tracking-widest text-center uppercase">Looking for a specific part? Call for more information on <a href="tel:01773719239" className="inline-block font-bold text-secondary hover:text-secondary-dark focus:text-secondary-dark">01773 719 239</a> or <a href="/contact" className="inline-block px-4 py-4 ml-3 font-bold text-white bg-secondary hover:bg-secondary-dark focus:bg-secondary-dark">Get in touch</a></span>
        </Container>
    </div>

    <div className="py-12 border-b border-opacity-25 opacity-75 border-primary-light">
        <Container>
            <div className="flex flex-wrap justify-start text-xs leading-loose tracking-widest uppercase sm:-mx-5">

                <div className="w-full mb-8 sm:w-1/2 md:w-1/4 sm:px-5 md:mb-0">
                <span className="block mb-5 font-bold tracking-widest uppercase">Address</span>
                    <address className="not-italic">
                        <span className="block" property="name">Trust Precision Products</span>
                        <span className="block" property="addressLocality">Unit 2 Meadowbank Court</span>
                        <span className="block" property="addressRegion">Nottinghamshire</span>
                        <span className="block" property="postalCode">NG16 3SL</span>
                        <span className="block" property="addressCountry">United Kingdom</span>
                    </address>
                </div>

                <div className="w-full mb-8 sm:w-1/2 md:w-1/4 sm:px-5 md:mb-0">
                    <span className="block mb-5 font-bold tracking-widest text-white uppercase">Contact Details</span>
                    <a href="mailto:test@test.com" className="block no-underline break-words hover:text-secondary focus:text-secondary">test@test.com</a>
                    <a href="tel:01773719239" className="block mb-5 no-underline hover:text-secondary focus:text-secondary">01773 719 239</a>
                </div>

                <div className="w-full mb-8 sm:w-1/2 md:w-1/4 sm:px-5 md:mb-0">
                    <span className="block mb-5 font-bold tracking-widest text-white uppercase">Navigation</span>
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