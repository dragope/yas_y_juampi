"use client"

import Image from "next/image"
import brindis from '/public/brindis.svg'
import Button from '../Button/page'
import { useRouter } from "next/navigation"

const FirstBar = () => {

    const router = useRouter()

  return (
    <div className='w-[100vw] bg-white p-[2rem] flex flex-col justify-center items-center'>
        <Image 
            src={brindis}
            alt="brindis"
            className="h-[3rem] mb-[1rem] md:h-[5rem]"
        />
        <p className="text-center text-[1.5rem] md:text-[2.5rem] font-bold mb-[1rem]">FIESTA</p>
        <hr 
            className="w-[80vw] md:w-[40vw] mb-[1rem]"
        />
        <p className="text-center md:text-[1.5rem]">Festejamos nuestro casamiento en Quinta La Paz, Fátima.</p>
        <p className="text-center md:text-[1.5rem] mb-[1.5rem]">Te esperamos!</p>
        <Button 
            text={"LLEGAR A LA FIESTA"}
            action={()=> router.push('https://maps.app.goo.gl/px8xUc2xjEvPXBtF8')}
        />
    </div>
  )
}

export default FirstBar