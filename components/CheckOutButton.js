import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function CheckOutButton({ webUrl }) {
  return (
    <a
      href={webUrl}
      aria-label="checkout-products"
      className="w-full p-4 mb-8 text-sm font-black tracking-widest text-center text-white uppercase md:w-auto md:mb-0 md:order-2 bg-secondary"
    >
      Check Out
      <FontAwesomeIcon icon={faArrowRight} className="inline-flex w-4 ml-2" />
    </a>
  )
}

export default CheckOutButton
