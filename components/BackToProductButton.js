import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

function BackToProductButton() {
  return (
    <Link href="/products" passHref scroll={false}>
      <a
        aria-label="back-to-products"
        className="flex items-center text-xs font-black tracking-widest uppercase opacity-50 hover:opacity-full"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="inline-flex w-4 mr-2 text-sm" />
        Back To All Products
      </a>
    </Link>
  )
}

export default BackToProductButton
