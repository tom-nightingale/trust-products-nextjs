import Container from '@/components/container'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer class="bg-primary-dark text-white">

    <div class="py-12 bg-primary">
        <Container>
            <span class="block uppercase font-bold tracking-widest text-center leading-tight">Lorem ipsum dolor sit amet consec? Call for <span class="font-black">free advice</span> on <a href="tel:08000000000" class="inline-block text-secondary font-bold hover:text-secondary-dark focus:text-secondary-dark">0800 000 000</a> or <a href="/contact" class="bg-secondary hover:bg-secondary-dark focus:bg-secondary-dark text-white px-4 py-4 inline-block ml-3">Get in touch</a></span>
        </Container>
    </div>

    <div class="py-12 border-b border-primary-light border-opacity-25 opacity-75">
        <Container>
            <div class="flex flex-wrap sm:-mx-5 justify-start uppercase tracking-widest text-xs leading-loose">

                <div class="w-full sm:w-1/2 md:w-1/4 sm:px-5 mb-8 md:mb-0">
                <span class="block font-bold uppercase tracking-widest mb-5">Address</span>
                    <address class="not-italic">
                        <span class="block" property="name">Trust Precision Products</span>
                        <span class="block" property="addressLocality">Unit 2 Meadowbank Court</span>
                        <span class="block" property="addressRegion">Nottinghamshire</span>
                        <span class="block" property="postalCode">NG16 3SL</span>
                        <span class="block" property="addressCountry">United Kingdom</span>
                    </address>
                </div>

                <div class="w-full sm:w-1/2 md:w-1/4 sm:px-5 mb-8 md:mb-0">
                    <span class="block text-white font-bold uppercase tracking-widest mb-5">Contact Details</span>
                    <a href="mailto:test@test.com" class="block no-underline break-words hover:text-secondary focus:text-secondary">test@test.com</a>
                    <a href="tel:01773719239" class="block no-underline mb-5 hover:text-secondary focus:text-secondary">01773 719 239</a>
                </div>

                <div class="w-full sm:w-1/2 md:w-1/4 sm:px-5 mb-8 md:mb-0">
                    <span class="block text-white font-bold uppercase tracking-widest mb-5">Navigation</span>
                    <nav role="navigation" aria-label="Footer Navigation">
                        <ul>
                            <li class="mb-2">
                              <Link href="/">
                                <a class="text-white hover:text-secondary focus:text-secondary custom-class">Home</a>
                              </Link>
                            </li>

                            <li class="mb-2">
                              <Link href="/products">
                                <a class="text-white hover:text-secondary focus:text-secondary custom-class">Products</a>
                              </Link>
                            </li>

                            <li class="mb-2">
                              <Link href="/shipping-delivery">
                                <a class="text-white hover:text-secondary focus:text-secondary custom-class">Shipping &amp; Delivery</a>
                              </Link>
                            </li>

                            <li class="mb-2">
                              <Link href="/contact">
                                <a class="text-white hover:text-secondary focus:text-secondary custom-class">Contact</a>
                              </Link>
                            </li>

                            <li class="mb-2">
                              <Link href="/">
                                <a class="text-white hover:text-secondary focus:text-secondary custom-class">Terms &amp; Conditions</a>
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