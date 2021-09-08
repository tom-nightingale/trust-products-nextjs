import ProductCard from '@/components/ProductCard'
import Container from '@/components/container'

function ProductListings({ products }) {
  return (
      <Container>
      <div className="flex-wrap mx-auto mb-8 md:flex md:mb-12 lg:mb-16">

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
      </Container>
      
  )
}

export default ProductListings
