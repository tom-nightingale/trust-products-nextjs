import Dots from '@/components/dots'
import Image from 'next/image'

export default function CtaShipping({  }) {
    return (
        <div className="relative flex flex-wrap items-center mx-auto my-12 mt-20 bg-black max-w-screen-2xl">

            <Dots classes="hidden md:block absolute top-0 right-0 3xl:top-[-50px] 3xl:right-[-50px] w-[150px] h-[150px] bg-dots opacity-[50%] text-black bg-black" />

            <div className="relative w-full md:w-1/2 min-h-[400px] order-2">
                <Image
                    src="/images/harley.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="z-10 duration-500 ease-in-out"
                />
            </div>

            <div className="relative z-10 w-full p-10 text-white md:p-20 md:w-1/2 md:order-3"> 
                <p className="text-xl font-black tracking-widest uppercase">Precision parts, made to order.</p>
                <p>We provide precision motorbike parts to our customers worldwide, ranging from here in the U.K to Australia, Europe and the United States.</p>
                <p>We offer express international shipping worldwide, allowing to enjoy your parts as soon as possible.</p>
            </div>

        </div>
    )
}