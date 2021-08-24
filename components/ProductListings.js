import ProductCard from '@/components/ProductCard'
import Container from '@/components/container'

function ProductListings({ products }) {
  return (
      <div className="flex-wrap max-w-screen-xl mx-auto mb-8 md:flex md:mb-12 lg:mb-16">

        {products.map((product, i) => {
          return (
            <div className="" key={i}>
              {i %2 != 0 && 
                <ProductCard key={i} product={product} />
              }

              {i %2 == 0 && 
                <ProductCard key={i} product={product} alt />
              }
            </div>
          )            
        })}
      </div>
      
  )
}

export default ProductListings
