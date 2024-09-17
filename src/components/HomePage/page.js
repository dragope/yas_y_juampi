import Image from "next/image";
import Nombres from '/public/nombres.png'
import Plantas from '/public/plantas.png'
import Plantas2 from '/public/plantas2.png'
import Anillos from '/public/Anillos.png'
import Fecha from '/public/Fecha.png'
import arrow_down from '/public/arrow_down.svg'



export default function HomePage() {
  return (
    <div 
      className="h-[100vh] w-[100vw] bg-[url(/background.png)] flex flex-col justify-between items-center"
    >
      <div className="w-[100vw] flex flex-row justify-start align-center">
          <Image
            src={Plantas}
            alt="plantas"
            className="w-[100%] md:w-[35%]"
          />
      </div>
      <div className="absolute md:top-[15%] top-[20%] w-[100vw] h-[50%] md:h-[70%] flex flex-col justify-between items-center">
        <Image 
          src={Anillos}
          alt="anillos"
          className="w-[35%] md:w-[10%]"
        />
        <Image
          src={Nombres}
          alt="nombres"
          className="w-[80%] md:w-[25%]"
        />
        <Image
          src={Fecha}
          alt="fecha"
          className="w-[70%] md:w-[25%]"
        />
      </div>
      <div className="absolute bottom-0 w-[100vw] flex flex-row justify-end align-center">
        <Image
          src={Plantas2}
          alt="plantas"
          className="w-[100%] md:w-[35%]"
        />
      </div>
      <div className="absolute bottom-0">
        <Image 
          src={arrow_down}
          alt="arrow down"
          className="md:h-[100px] h-[100px] opacity-50 animate-bounce"
        />
      </div>
    </div>
  );
}
