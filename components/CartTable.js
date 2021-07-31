import { useState, useEffect } from 'react'
import { useUpdateCartQuantityContext } from '@/context/Store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import Price from '@/components/Price'
import { getCartSubTotal } from '@/utils/helpers'

function CartTable({ cart }) {
  const updateCartQuantity = useUpdateCartQuantityContext()
  const [cartItems, setCartItems] = useState([])
  const [subtotal, setSubtotal] = useState(0)

  useEffect(() => {
    setCartItems(cart)
    setSubtotal(getCartSubTotal(cart))
  }, [cart])

  function updateItem(id, quantity) {
    updateCartQuantity(id, quantity)
  }

  return (
    <div className="w-full mx-auto my-4 min-h-80 sm:my-8">
      
      <table className="w-full mx-auto">
        <thead>
          <tr className="text-xs font-black tracking-widest uppercase border-b sm:text-sm text-primary">
            <th className="px-6 py-4 font-normal">Product</th>
            <th className="px-6 py-4 font-normal">Quantity</th>
            <th className="hidden px-6 py-4 font-normal sm:table-cell">Price</th>
            <th className="px-6 py-4 font-normal">Remove</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-primary/10">
          {cartItems.map(item => (
            <tr key={item.variantId} className="text-sm text-center text-gray-600 sm:text-base">
              <td className="flex items-center px-4 py-4 font-black sm:px-6">
                <img
                  src={item.productImage.originalSrc}
                  alt={item.productImage.altText}
                  height={64}
                  width={64}
                  className={`hidden sm:inline-flex mr-2`}
                />
                <Link passHref href={`/products/${item.productHandle}`} scroll={false}>
                  <a className="pt-1 text-xs tracking-widest uppercase">
                    {item.productTitle}
                  </a>
                </Link>
              </td>
              <td className="px-4 py-4 text-sm font-black sm:px-6">
                <input
                  type="number"
                  inputMode="numeric"
                  id="variant-quantity"
                  name="variant-quantity"
                  min="1"
                  step="1"
                  value={item.variantQuantity}
                  onChange={(e) => updateItem(item.variantId, e.target.value)}
                  className="w-16 p-1 text-gray-900 border border-gray-300 rounded-sm form-input focus:border-palette-light focus:ring-palette-light"
                />
              </td>
              <td className="hidden px-4 py-4 text-base font-light sm:px-6 sm:table-cell">
                <Price
                  currency="£"
                  num={item.variantPrice}
                  numSize=""
                />
              </td>
              <td className="px-4 py-4 font-black sm:px-6">
                <button
                  aria-label="delete-item"
                  className=""
                  onClick={() => updateItem(item.variantId, 0)}
                >
                  <FontAwesomeIcon icon={faTimes} className="p-1 text-3xl" />
                </button>
              </td>
            </tr>
          ))}
          {
            subtotal === 0 ?
              null
              :
              <tr className="text-sm font-black tracking-widest text-center uppercase">
                <td></td>
                <td className="px-4 py-4 sm:px-6">Subtotal</td>
                <td className="px-4 py-4 sm:px-6">
                  <Price
                    currency="£"
                    num={subtotal}
                    numSize=""
                  />
                </td>
                <td></td>
              </tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default CartTable
