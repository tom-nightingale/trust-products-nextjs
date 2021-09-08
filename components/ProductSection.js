import ProductImage from '@/components/ProductImage'
import ProductDetails from '@/components/ProductDetails'
import Dots from '@/components/dots'

function ProductSection({ productData }) {
  return (
      
    <div className="relative flex-wrap items-center mx-auto md:flex">

        <Dots classes={`w-[300px] h-[300px] absolute top-[-50px] md:top-[0px] right-0`} />

        <div className="w-full md:w-1/2">

          <p className="mb-4 text-xl font-bold tracking-widest uppercase md:hidden">{productData.title}</p>

          <ProductImage images={productData.images.edges} />

        </div>

        <div className="w-full md:w-1/2">

          <ProductDetails productData={productData} />

        </div>        
      
    </div>
    
  )
}

export default ProductSection
