"use client"

import Image from "next/image"
import Regalo from '/public/Regalo.svg'
import Button from '../Button/page'

const SecondBar = ({open, setOpen}) => {

  return (
    <div className='w-[100vw] bg-olive-green p-[2rem] flex flex-col justify-center items-center'>
        <Image 
            src={Regalo}
            alt="regalo"
            className="h-[3rem] mb-[1rem] md:h-[6rem]"
        />

        <p className="text-center text-white md:text-[1.5rem] mb-[1.5rem]">Si deseás realizarnos un regalo podés colaborar con nuestra Luna de Miel...</p>
        <Button 
            text={"VER DATOS BANCARIOS"}
            action={()=> {
                open ? setOpen(false) : setOpen(true)
            }}
        />
    </div>
  )
}

export default SecondBar