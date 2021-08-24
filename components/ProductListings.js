import ProductCard from '@/components/ProductCard'
import Container from '@/components/container'

function ProductListings({ products }) {
  return (

      <div className="flex-wrap max-w-screen-xl mx-auto mb-8 md:flex md:mb-12 lg:mb-16">
        {products.map((product, index) => {
          return (
            <>
              {index %2 != 0 && 
                <ProductCard key={index} product={product} />
              }

              {index %2 == 0 && 
                <ProductCard key={index} product={product} alt />
              }
              
              
            </>
          )            
        })}
      </div>
      
  )
}

export default ProductListings
