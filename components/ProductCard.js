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
    <Link
      href={`/products/${handle}`}
      passHref
      scroll={false}
    >
      <div className="border border-white md:w-1/2">

        <a className="block cursor-pointer group">
          
          <div className="relative w-full h-[700px] bg-black">

            <Image
              src={imageNode.originalSrc}
              alt={imageNode.altText}
              layout="fill"
              objectFit="cover"
              className="z-10 duration-500 ease-in-out transform group-hover:scale-110 grayscale group-hover:grayscale-0"
            />

            <div className="absolute bottom-0 left-0 z-20 p-4 text-sm text-white md:w-1/2 md:p-8">
              
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
        
      </div>
    </Link>
  )
}

export default ProductCard
