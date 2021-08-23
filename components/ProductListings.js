import ProductCard from '@/components/ProductCard'
import Container from '@/components/container'

function ProductListings({ products }) {
  return (

      <div className="flex-wrap max-w-screen-xl mx-auto mb-8 md:flex md:mb-12 lg:mb-16">
        {
          products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))
        }
      </div>
      
  )
}

export default ProductListings
