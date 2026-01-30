import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import gsap from "gsap"
export const TrastedCompany = () => {
    useGSAP(() => {
        gsap.from('.trusted',{
            opacity:0,
            y:60,
           ease:'power1.inOut',
       
            scrollTrigger:{
                trigger:'.trusted',
                scrub:true,
                start:'top 90%',
                end:'top 60%'
            }


        })
        gsap.to(' .trusted img',{
            transform:'translate(-200%)',
            scrollTrigger:{
                trigger:'.trusted',
                scrub:true,
                start:'top 90%',
                end:'bottom top'
            }
        })
    })
    return(
        <div className="mt-40 text-center trusted">
        <h1 className="text-2xl text-white opacity-70 mb-10">Allready chosen By Market Leaders</h1>
        <div className="py-4 overflow-hidden trusted-company flex shadow-[inset_-10px_0_15px_-10px_[#111]],inset_10px_0_30px_-10px_[#111]]  flex-0
        justify-between gap-7 mx-auto w-full ">
            <img src="/images/acme-corp.svg"></img>
            <img src="/images/apex.svg"></img>
            <img src="/images/celestial.svg" ></img>
            <img src="/images/echo-valley.svg" ></img>
            <img src="/images/quantum.svg"></img>
            <img src="/images/quantum.svg"></img>
            <img src="/images/acme-corp.svg"></img>
            <img src="/images/apex.svg"></img>
            <img src="/images/celestial.svg" ></img>
            <img src="/images/echo-valley.svg" ></img>
            <img src="/images/quantum.svg"></img>
            <img src="/images/quantum.svg"></img>
        </div>
        <div className="h-[100vh]"></div>
        </div>
        
    )
}