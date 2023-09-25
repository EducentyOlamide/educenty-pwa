import Image from "next/image"


export const EnvHero = () => {
  return (
    <div className="flex mb-4 gap-2 flex-col justify-center items-center bg-accent w-screen h-[300px]  ">
{/* NOTE: current port logo, portal name, LGA(if institute)/Personal(if general) */}
<Image src="/educentylogo.png" alt="Educenty portal" width={100} height={100} className=" rounded-3xl" />
<div className="text-center">
    <h1 className="font-bold text-2xl">{'Portal name'}</h1>
    <h1>{'portal LGA or personal'}</h1>
</div>
    </div>
  )
}
