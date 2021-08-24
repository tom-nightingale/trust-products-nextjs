import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Container from '@/components/container'
import FancyLink from '@/components/fancyLink'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'

export default function About() {
  return (
    <Layout>
      
      <NextSeo title="Shipping &amp; Delivery" />

      <Header />

      <LazyMotion features={domAnimation}>
        
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
          className=""
        >
            <m.div variants={fade} className="mt-64">
              
              <div className="max-w-screen-md py-20 mx-auto">

                <h1 className="mb-4 text-2xl font-bold md:text-3xl xl:text-4xl">Shipping &amp; Delivery</h1>
                
                <div className="mb-4 content">
                  
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus laoreet molestie. Proin gravida sem nec lacus tincidunt, venenatis congue sem egestas. Sed ac efficitur mi, id condimentum nunc. Sed suscipit justo lobortis, rutrum eros ac, vulputate sapien. Etiam pharetra auctor enim vitae vestibulum. Cras elit mauris, faucibus sed arcu vel, vulputate consectetur velit. Integer consequat mollis mi, ut aliquam mauris aliquam sed. Nunc tincidunt, lectus at rhoncus mattis, mi purus rutrum neque, ut hendrerit enim ante dignissim elit.</p>

                  <p>Aliquam et erat dui. Quisque sit amet sollicitudin enim. Vivamus sed enim quis urna dictum vehicula. Nulla mattis laoreet massa hendrerit faucibus. Nunc vel dui orci. In hac habitasse platea dictumst. Pellentesque vitae turpis erat. Nunc aliquam, velit sit amet varius scelerisque, ligula quam laoreet quam, ac laoreet justo elit ac sapien. Mauris finibus ex mi, ac dapibus tellus tristique non. Vivamus velit dolor, pellentesque et placerat vel, porta in erat. Ut tincidunt mi et vehicula blandit. Nam in velit ac dui suscipit mollis. Nunc interdum tincidunt lacus eget dignissim. Cras dignissim ultrices lectus, a pellentesque risus. Aliquam dolor diam, dictum eu commodo eu, pellentesque nec magna. Quisque mollis urna quis nisl dignissim, in semper augue porttitor.</p>

                  <p>Cras id feugiat nisi. Nunc eu volutpat est. Integer semper dui eget turpis ultricies rhoncus. Duis vestibulum mi vel odio tincidunt, non suscipit massa semper. Nulla vel mi eu ligula egestas euismod. Praesent et dui nec tortor sollicitudin convallis. In auctor sapien id fringilla sagittis. Duis faucibus eu eros et tristique. Sed elit nisl, lacinia et nisl eu, gravida auctor nisl. Integer enim elit, rhoncus pretium tellus id, tempus dignissim libero. Mauris bibendum porttitor justo, a imperdiet arcu suscipit ut. Nullam fermentum lectus tincidunt egestas semper.</p>

                </div>

              </div>

            </m.div>

        </m.div>

      </LazyMotion>

      <Footer />
    </Layout>
  )
}
