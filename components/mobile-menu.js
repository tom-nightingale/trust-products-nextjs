import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function mobileMenu({ navItems }) {

    const router = useRouter();
    let currentPath = router.pathname;

    //State management for mobile menu
    const [open, setOpen] = useState(false);

    const container = {
        hidden: { opacity: 0 },
        show: {
        opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const listItem = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    };

    return (
        <>
            <button aria-label="Open Menu" open={open} onClick={() => setOpen(!open)} className={`btn-mobile-menu ${open ? 'open' : ''}`}>
                <span />
                <span />
                <span />
            </button>

            {/* Mobile Menu */}
            <div open={open} className={`fixed top-0 left-0 w-full h-full p-4 transition-all duration-200 bg-black ${open ? 'opacity-100 z-40' : 'opacity-0 -z-10'}`}>
                
                <div className="flex flex-col items-center justify-center h-screen">

                <motion.div variants={container} initial="hidden" animate={open ? 'show' : ''}>

                    {/* {navItems.map((item, i) => {
                        
                        return(
                        <motion.div className="mb-5 text-center" variants={listItem} key={i}>
                            <Link href={`/${item}`}>
                            <a className="text-white relative inline-block tracking-widest uppercase after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-black hover:after:w-full" onClick={() => setOpen(!open)}>
                                {item}
                            </a>
                            </Link>
                        </motion.div>
                        )
                    })} */}
                    
                    <motion.div className="mb-5 text-center" variants={listItem}>
                        <Link href="/" scroll={false}>
                            <a className="text-white relative inline-block tracking-widest uppercase after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-black hover:after:w-full" onClick={() => setOpen(!open)} aria-label="Home">
                            Home
                            </a>
                        </Link>
                    </motion.div>

                    <motion.div className="mb-5 text-center" variants={listItem}>
                        <Link href="/products" scroll={false}>
                            <a className="text-white relative inline-block tracking-widest uppercase after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-black hover:after:w-full" onClick={() => setOpen(!open)} aria-label="Products">
                            Products
                            </a>
                        </Link>
                    </motion.div>

                    <motion.div className="mb-5 text-center" variants={listItem}>
                        <Link href="/shipping-delivery" scroll={false}>
                            <a className="text-white relative inline-block tracking-widest uppercase after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-black hover:after:w-full" onClick={() => setOpen(!open)} aria-label="Shipping &amp; Delivery">
                            Shipping &amp; Delivery
                            </a>
                        </Link>
                    </motion.div>

                    <motion.div className="mb-5 text-center" variants={listItem}>
                        <Link href="/cart" scroll={false}>
                            <a className="text-white relative inline-block tracking-widest uppercase after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-black hover:after:w-full" onClick={() => setOpen(!open)} aria-label="Cart">
                            Cart
                            </a>
                        </Link>
                    </motion.div>

                    <motion.div className="mb-5 text-center" variants={listItem}>
                        <Link href="/contact" scroll={false}>
                            <a className="text-white relative inline-block tracking-widest uppercase after:absolute after:bottom-0 after:left-1/2 after:right-1/2 after:w-[0px] after:h-[1px] after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-black hover:after:w-full" onClick={() => setOpen(!open)} aria-label="Contact">
                            Contact
                            </a>
                        </Link>
                    </motion.div>
                
                    <motion.div className="text-center" variants={listItem}>
                        <a className="tracking-widest text-white uppercase transition-all duration-200" variants={listItem} href="tel:01773719239">Tel: <span className="font-bold">01773 719 239</span></a>                    
                    </motion.div>

                </motion.div>

                </div>
            </div>
            {/* End Mobile Menu */}
        </>
    )
}