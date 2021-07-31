import Price from '@/components/Price'

function ProductInfo({ title, description, price }) {
  return (
    <div className="mt-8">
      
      <h1 className="text-lg">{title}</h1>

      <p className="">{description}</p>
      
      <div className="mt-4 text-lg">
        <Price
          currency="£"
          num={price}
          numSize=""
        />
      </div>

    </div>
  )
}

export default ProductInfo
