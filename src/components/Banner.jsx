import { useGSAP } from "@gsap/react"
import { useEffect } from "react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { ScrollTrigger } from "gsap/all"


export const Banner = () =>{
    useGSAP(() => {
        
        const tl = gsap.timeline();
        const h1Split = new SplitText('h1',{type:'lines'})
        console.log(h1Split);

        const pSplit = new SplitText('p',{type:'lines'});


        tl.from('.banner-first-tag',{
            y:30,
            opacity:0,
            delay:1
        })
        tl.from(h1Split.lines,{
            y:30,
            opacity:0,
            stagger:0.1,
            ease:'none',
            duration:0.5
        })
        tl.from(pSplit.lines,{
            y:30,
            opacity:0,
            stagger:0.1,
            ease:'none',
            duration:0.5
        })
        tl.from('.banner-input-field',{
            y:30,
            opacity:0,
            stagger:0.1,
            ease:'none',
            duration:0.5
        })
        tl.from('.left-img',{
            x:-100,
            opacity:0,
            duration:1
        },3)
        tl.from('.right-img',{
            x:50,
            opacity:0,
            duration:1
        },3)

        gsap.to('.left-img',{
            y:-200,
            scrollTrigger:{
                trigger:'.banner',
                 start:'top [30%]',
               
                scrub:1,


            }
        })
        gsap.to('.right-img',{
            y:100,
            scrollTrigger:{
                trigger:'.banner',
                start:'top [30%]',
                scrub:1,


            }
        })
        
    })
    return (
        <div className="w-[100%] banner overflow-x-hidden px-5 mt-10 sm:mt-20 lg:mt-25 xl:mt-40">

            <img src="/images/design-example-1.png" alt="" className="hidden lg:absolute lg:block left-img left-[-50px] w-[30%] top-100 max-w-[300px]"/>
             
            <img src="/images/design-example-2.png" alt="" className="hidden lg:absolute lg:block right-img right-[-50px] top-40 w-[30%] max-w-[400px]"/>


            <div className="banner-first-tag bg-blue-300 rounded-full
            w-50 mx-auto p-1 text-center mb-6">
                $7.5M seed round raised
            </div>


            <div className="banner-header ">
                <h1 className="text-6xl lg:text-7xl   font-bold font-roboto mb-6  mx-auto">Impactiful design created effortlessly</h1>
                <p className="opacity-60 font-medium lg:w-[90%] mx-auto w-full">Design tools shouldn't slow you down. Layers combines powerful feature with an intutive interface that keeps you in your creative flow</p>


            </div>

           <div className="banner-input-field ">
             <input  placeholder="Enter your email" className="border-none ml-4 font-medium opacity-65 text-white outline-none"></input>
             <button className="green-btn">Sign Up</button>
           </div>

           
        </div>
    )
}