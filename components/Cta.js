import sanity from "@/lib/sanity"
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image';
import BlockContent from '@sanity/block-content-to-react'
import Dots from '@/components/dots'

export default function CtaShipping({ ctaHeading, ctaBlurb, ctaBackground }) {

    const ctaBackgroundProps = useNextSanityImage(
        sanity,
        ctaBackground
    );

    return (
        <div className="relative flex flex-wrap items-center mx-auto my-12 mt-20 bg-black max-w-screen-2xl">

            <Dots classes="hidden md:block absolute top-0 right-0 3xl:top-[-50px] 3xl:right-[-50px] w-[150px] h-[150px] bg-dots opacity-[50%] text-black bg-black" />

            <div className="relative w-full md:w-1/2 min-h-[400px] order-2">
                <Image
                    {...ctaBackgroundProps}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="z-10 duration-500 ease-in-out"
                />
            </div>

            <div className="relative z-10 w-full p-10 text-white md:p-20 md:w-1/2 md:order-3"> 
                <p className="mb-8 text-xl font-black tracking-widest uppercase">{ctaHeading}</p>
                <div className="content">
                    <BlockContent serializers={{ container: ({ children }) => children }} blocks={ctaBlurb} />
                </div>
            </div>

        </div>
    )
}