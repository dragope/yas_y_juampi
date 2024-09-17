"use client"

import Image from "next/image"
import wedding_ring from '/public/wedding_ring.svg'

const FinalBar = () => {

  return (
    <div className='w-[100vw] bg-[#ddc190] p-[4rem] flex flex-col justify-center items-center'>
        <Image 
            src={wedding_ring}
            alt="wedding ring"
            className="h-[3rem] mb-[1rem] md:h-[5rem]"
        />

        <p className="text-white text-center md:text-[2rem]">¡Gracias por acompañarnos en este momento tan importante!</p>
    </div>
  )
}

export default FinalBar