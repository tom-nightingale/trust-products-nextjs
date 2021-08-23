import Image from 'next/image'
import Link from 'next/link'
import Price from '@/components/Price'

function ProductCard({ product }) {
  const handle = product.node.handle
  const title = product.node.title
  const description = product.node.description
  const price = product.node.variants.edges[0].node.price

  const imageNode = product.node.images.edges[0].node

  return (
    <div className="w-full p-4 md:w-1/2">
      
      <Link
        href={`/products/${handle}`}
        passHref
        scroll={false}
      >

          <a className="block w-full cursor-pointer group">
            
            <div className="relative w-full h-[600px] bg-black">

              <Image
                src={imageNode.originalSrc}
                alt={imageNode.altText}
                layout="fill"
                objectFit="cover"
                className="z-10 duration-500 ease-in-out transform group-hover:scale-110 grayscale group-hover:grayscale-0"
              />

              <div className="absolute bottom-0 left-0 z-20 p-4 text-sm text-white md:w-2/3 md:p-8">
                
                <div className="text-xl font-bold tracking-widest uppercase">
                  {title}
                </div>

                <div className="text-lg tracking-widest uppercase">
                  <Price
                    currency="£"
                    num={price}
                    numSize=""
                  />
                </div>
                
              </div>

            </div>

          </a>
          
        {/* </div> */}
      </Link>
      
    </div>

  )
}

export default ProductCard
