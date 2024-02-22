'use client'
import Image from 'next/image';
import Link from 'next/link';
import { CustomButton } from '.';
const Navbar = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById("about_footer");
    
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex
        justify-between items-center sm:px-16 px-6 py-4'>
            <Link href='/' className='flex justify-center items-center'>
                <Image
                    src="/logo-updated.svg"
                    alt="logo"
                    width={180}
                    height={50}
                    className="object-contain"
                />
            </Link>

            <CustomButton 
                title='About'
                btnType="button"
                containerStyles='text-primary-blue
                rounded-full bg-white min-w-[130px]' 
                handleClick={handleScroll}
            />


        </nav>

    </header>
  )
}

export default Navbar