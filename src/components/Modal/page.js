import Image from "next/image"
import Close from '/public/close.svg'

const Modal = ({ setOpen }) => {
  return (
    <div className="fixed top-0 w-full h-full flex flex-col justify-center items-center z-30">

        <div className="w-[80%] md:w-[30%]  rounded-2xl bg-white shadow-md p-[2rem]">
            <div className="flex flex-col items-end justify-center">
                <Image 
                    src={Close}
                    alt="close button"
                    className="w-[1rem] cursor-pointer"
                    onClick={()=> setOpen(false)}
                />
            </div>
            <div className="mb-[1rem]">
                <p className="font-bold mb-[0.5rem] text-[1.2rem] w-full text-center">DATOS BANCARIOS</p>
                <hr />
            </div>
            <div className="w-full flex flex-col items-center justify-center">
                <b className="text-[1rem]">CBU</b>
                <p className="text-[1.2rem] mb-[1rem]">1234000005543222012</p>
                <b className="text-[1rem]">Alias</b>
                <p className="text-[1.2rem] mb-[1rem]">LANRGRITA.MEJOR.NEUROLOGA</p>
                <b className="text-[1rem]">Banco</b>
                <p className="text-[1.2rem]">BBVA Francés</p>

            </div>

        </div>
    </div>
  )
}

export default Modal