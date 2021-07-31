import ProductImage from '@/components/ProductImage'
import ProductDetails from '@/components/ProductDetails'
import Container from '@/components/container'

function ProductSection({ productData }) {
  return (
    // <div className="flex flex-col items-center justify-center w-11/12 max-w-6xl mx-auto space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8">
    <Container>
      <div className="flex flex-col items-center justify-center mx-auto md:flex-row md:items-start md:mt-12">
        <ProductImage images={productData.images.edges} />
        <ProductDetails productData={productData} />
      </div>
    </Container>
  )
}

export default ProductSection
