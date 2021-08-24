import { useState, useRef } from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

function ProductImage({ images }) {
  const [mainImg, setMainImg] = useState(images[0].node)
  const ref = useRef()

  function scroll(scrollOffset) {
    ref.current.scrollLeft += scrollOffset
  }

  return (
    <div className="w-full bg-white border border-white">

      <div className="relative h-[500px] md:h-[700px] lg:h-[700px] w-full bg-gray-100">
        <Image
          src={mainImg.originalSrc}
          alt={mainImg.altText}
          layout="fill"
          objectFit="cover"
          className="duration-500 ease-in-out transform cursor-pointer hover:scale-105"
        />
      </div>
      
      <div className="relative flex border-t border-white">
        <button
          aria-label="left-scroll"
          className="absolute left-0 z-10 h-32 opacity-75 bg-palette-lighter hover:bg-palette-light"
          onClick={() => scroll(-300)}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="w-3 mx-1 text-white" />
        </button>
        <div
          ref={ref}
          style={{ scrollBehavior: "smooth" }}
          className="flex w-full space-x-1 overflow-auto border-t-2 border-white"
        >
          {
            images.map((imgItem, index) => (
              <button
                key={index}
                className="relative flex-shrink-0 w-40 h-32 rounded-sm "
                onClick={() => setMainImg(imgItem.node)}
              >
                <Image
                  src={imgItem.node.originalSrc}
                  alt={imgItem.node.altText}
                  layout="fill"
                  objectFit="cover"
                  className=""
                />
              </button>
            ))
          }
        </div>
        <button
          aria-label="right-scroll"
          className="absolute right-0 z-10 h-32 opacity-75 bg-palette-lighter hover:bg-palette-light"
          onClick={() => scroll(300)}
        >
          <FontAwesomeIcon icon={faArrowRight} className="w-3 mx-1 text-white" />
        </button>
      </div>
    </div>
  )
}

export default ProductImage
