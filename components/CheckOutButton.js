import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function CheckOutButton({ webUrl }) {
  return (
    <a
      href={webUrl}
      aria-label="checkout-products"
      className="order-2 p-4 text-sm font-black tracking-widest text-white uppercase bg-secondary"
    >
      Check Out
      <FontAwesomeIcon icon={faArrowRight} className="inline-flex w-4 ml-2" />
    </a>
  )
}

export default CheckOutButton
