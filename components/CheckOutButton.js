import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function CheckOutButton({ webUrl }) {
  return (
    <a
      href={webUrl}
      aria-label="checkout-products"
      className="w-full mb-8 ml-auto text-center text-white bg-black md:mb-0 btn md:w-auto md:order-3"
    >
      <span>
        Check Out
        <FontAwesomeIcon icon={faArrowRight} className="inline-flex w-4 ml-2" />
      </span>
    </a>
  )
}

export default CheckOutButton
