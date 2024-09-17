"use client"

import Image from "next/image"
import rsvp from '/public/rsvp.svg'
import Button from '../Button/page'
import { useRouter } from "next/navigation"

const ThirdBar = () => {

    const router = useRouter()

  return (
    <div className='w-[100vw] bg-white p-[2rem] flex flex-col justify-center items-center'>
        <Image 
            src={rsvp}
            alt="rsvp"
            className="h-[3rem] mb-[1rem] md:h-[5rem]"
        />
        <p className="text-center text-[1.5rem] md:text-[2.5rem] font-bold mb-[1rem]">CONFIRMACIÓN DE ASISTENCIA</p>
        <hr 
            className="w-[80vw] md:w-[40vw] mb-[1rem]"
        />
        <p className="text-center md:text-[1.5rem] mb-[1.5rem]">Esperamos que seas parte de esta gran celebración. ¡Confirmanos tu asistencia!</p>
        <Button 
            text={"CONFIRMAR ASISTENCIA"}
            action={()=> router.push('https://forms.gle/fSdTgt7FXD5iCbbcA')}
        />
    </div>
  )
}

export default ThirdBar