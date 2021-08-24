import Image from 'next/image'
import Link from 'next/link'
import Price from '@/components/Price'
import Dots from '@/components/dots'
import Button from '@/components/button'

function ProductCard({ product, alt }) {
  const handle = product.node.handle
  const title = product.node.title
  const description = product.node.description
  const price = product.node.variants.edges[0].node.price

  const imageNode = product.node.images.edges[0].node

  console.log(alt);
  
  return (

    <div className="flex-wrap w-full px-4">

      <div className="py-4 md:flex md:py-8 lg:py-12">

        <div className={`${alt ? 'md:order-2' : '' } md:w-1/2`}>

          <Link
            href={`/products/${handle}`}
            passHref
            scroll={false}
          >

              <a className="block w-full cursor-pointer group">

                <p className="mb-4 text-xl font-bold tracking-widest uppercase md:hidden">{title}</p>

                <div className="relative w-full h-[400px] lg:h-[600px] bg-black">                

                  <Image
                      src={imageNode.originalSrc}
                      alt={imageNode.altText}
                      layout="fill"
                      objectFit="cover"
                      className="z-10 duration-500 ease-in-out transform group-hover:scale-110 grayscale group-hover:grayscale-0 md:w-1/2"
                  />

                </div>

              </a>

          </Link>

        </div>

        <div className="relative pt-4 md:px-8 md:flex md:justify-center md:flex-col lg:p-12 xl:p-20 md:w-1/2">

          <Dots classes={`w-[300px] h-[300px] hidden md:block absolute top-0 ${alt ? 'left-0' : 'right-0' }`} />

          <p className="hidden mb-4 text-xl font-bold tracking-widest uppercase md:block">{title}</p>

          <p>{description}</p>

          <div className="my-4 text-lg font-bold tracking-widest uppercase">
            <Price
              currency="£"
              num={price}
              numSize=""
            />
          </div>

          <Button
            destination={`/products/${handle}`}
            label="View product"
            a11yText={`View ${title} product information`}    
            extraClasses="btn--border-black mr-auto p-2"             
          />

        </div>

      </div>

      <hr className="mx-auto w-full h-[1px] bg-black/10" />

    </div>

  )
}

export default ProductCard
