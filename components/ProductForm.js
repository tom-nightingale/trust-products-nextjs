import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useCartContext, useAddToCartContext } from '@/context/Store'

function ProductForm({ title, handle, variants, setVariantPrice, mainImg }) {
  const [quantity, setQuantity] = useState(1)
  const [variantId, setVariantId] = useState(variants[0].node.id)
  const [variant, setVariant] = useState(variants[0])
  const isLoading = useCartContext()[2]
  const addToCart = useAddToCartContext()

  const atcBtnStyle = isLoading ?
    `mt-8 md:mt-0 w-full md:w-1/3 bg-black text-white py-4 flex items-center justify-center text-sm font-black tracking-widest uppercase opacity-25 cursor-none`
    :
    `mt-8 md:mt-0 w-full md:w-1/3 bg-black text-white py-4 flex items-center justify-center text-sm font-black tracking-widest uppercase`

  function handleSizeChange(e) {
    setVariantId(e)
    // send back size change
    const selectedVariant = variants.filter(v => v.node.id === e).pop()
    setVariantPrice(selectedVariant.node.price)

    // update variant
    setVariant(selectedVariant)
  }

  async function handleAddToCart() {
    const varId = variant.node.id
    // update store context
    if (quantity !== '') {
      addToCart({
        productTitle: title,
        productHandle: handle,
        productImage: mainImg,
        variantId: varId,
        variantPrice: variant.node.price,
        variantTitle: variant.node.title,
        variantQuantity: quantity
      })
    }
  }

  function updateQuantity(e) {
    if (e === '') {
      setQuantity('')
    } else {
      setQuantity(Math.floor(e))
    }
  }

  return (
    <div className="mb-8">

      <div className="flex flex-wrap items-center justify-start w-full mt-8">
        
        <div className="flex flex-wrap items-center w-1/3">
          <label className="mr-2 text-sm font-bold uppercase text-primary">Qty.</label>
          <input
            type="number"
            inputMode="numeric"
            id="quantity"
            name="quantity"
            min="1"
            step="1"
            value={quantity}
            onChange={(e) => updateQuantity(e.target.value)}
            className="w-16 px-2 py-1 border text-primary border-primary/25 focus:border-primary/50"
          />
        </div>

        <button
          className={atcBtnStyle}
          aria-label="cart-button"
          onClick={handleAddToCart}
        >
          Add To Cart
          <FontAwesomeIcon icon={faShoppingCart} className="w-5 ml-2 text-sm" />
        </button>

      </div>      
      
    </div>
  )
}

export default ProductForm
