import Link from 'next/link'

export default function Button( {destination, a11yText, label, extraClasses} ) {
  return (
    <Link href={destination} scroll={false} passHref>
      <a aria-label={a11yText} className={`btn ${extraClasses}`}>
        <span>{label}</span>
      </a>
    </Link>
  )
}