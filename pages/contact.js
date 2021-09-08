import sanity from "@/lib/sanity"

import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'

import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function Contact({ global }) {
  
  return (

    <Layout>
      
      <NextSeo title="Contact | Trust Precision Engineering" />

      <Header bannerContent={global.fixedBannerContent} />

      <LazyMotion features={domAnimation}>
        
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
            <m.div variants={fade} className="mt-40 md:mt-56 lg:mt-64">
              
                <Container>

                  <div className="flex flex-col flex-wrap py-10 mx-auto lg:py-20 lg:flex-row">
                    
                    <div className="relative order-2 mt-8 bg-black/10 lg:w-1/2">

                      <iframe className="min-h-[40vw] lg:min-h-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2400.069916628486!2d-1.3221973483209855!3d53.019106106773734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879ecbd0616de47%3A0xfa91205448a62a08!2sTrust%20Precision%20Engineering!5e0!3m2!1sen!2suk!4v1631119673554!5m2!1sen!2suk" width="100%" height="100%" AllowFullScreen="" loading="lazy"></iframe>
                      
                    </div>
                    
                    <div className="lg:w-1/2 content lg:p-12 xl:p-20 lg:order-2">

                        <h1 className="mb-4 text-2xl font-bold md:text-3xl xl:text-4xl">Contact</h1>
                        
                        <p>If you have any questions about our services, products or shipping please contact us using the details below and one of our team members will get back to you as soon as possible.</p>

                        <p>Trust Precision Products</p>

                        <p>Address</p>

                        <p>Telephone: </p>

                        <p>Email: </p>

                        <p className="text-xs opacity-75">Fields marked with a * are required.</p>
                      
                        <form id="form" action="REPLACE ME" method="POST" className="flex flex-col overflow-x-hidden md:flex-wrap md:flex-row">

                          <label>
                            <span className="sr-only"></span>
                            <input required type="text" name="name" placeholder="Name *" />
                          </label>

                          <label>
                            <span className="sr-only"></span>
                            <input required type="text" name="postcode" placeholder="Postcode *" />
                          </label>

                          <label>
                            <span className="sr-only"></span>
                            <input required type="email" name="email" placeholder="Email *" />
                          </label>

                          <label>
                            <span className="sr-only"></span>
                            <input required type="tel" name="telephone" placeholder="Telephone *" />
                          </label>
                          
                          <label className="w-full">
                            <span className="sr-only"></span>
                            <textarea required placeholder="Your message *" name="message" className="w-full"></textarea>
                          </label>

                          <input type="text" name="_gotcha" className="hidden" />
                          
                          <div className="w-full mx-auto md:p-3">
                            <input type="submit" className="font-black tracking-widest text-center text-white uppercase bg-black" value="Send Enquiry" />
                          </div>

                        </form>
                        
                    </div>
                    
                  </div>

              </Container>

            </m.div>

        </m.div>

      </LazyMotion>

      <Footer />
    </Layout>
  )
}

const globalQuery = `*[_type == "global"][0] 
  {
    fixedBannerContent,
    ctaBackground {
      asset ->
    },
    ctaHeading,
    ctaBlurb
  }
`;

export async function getStaticProps() {
  const global = await sanity.fetch(globalQuery);
  return {
    props: {
      global
    },
  }
}