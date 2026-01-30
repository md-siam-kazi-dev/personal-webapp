import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const NavBar = () =>{


     useGSAP(() => {
            gsap.from('.nav',{
                y:-50,
                opacity:0,
               
            })
        })

    return (
        <nav className="nav">
           
           <div className="inner-nav">
            <img src='/images/logo.svg' className="ml-3"></img>
           
           <ul className="nav-ul">
            <li><a href="#">Home</a></li>
            <li><a href="#">Feature</a></li>
            <li><a href="#">Integrations</a></li>
            <li><a href="#">FAQs</a></li>
           </ul>
           <div className="nav-btn  gap-4 hidden lg:flex">
             
             <button className="transparent-btn">Sign Up</button>
             <button className="green-btn">Log in</button>
           </div>
           <a href="#" className="text-white font-bold text-3xl lg:hidden" ><i className="fa-solid fa-bars "></i>
</a>
           </div>

        </nav>
    )
}
