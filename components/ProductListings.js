import ProductCard from '@/components/ProductCard'
import Container from '@/components/container'

function ProductListings({ products }) {
  return (
    <div>
      <Container>
      <div className="flex-wrap mt-4 md:mt-12 md:flex lg:mt-12 ">
        {
          products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        }
      </div>
      </Container>
    </div>
  )
}

export default ProductListings
