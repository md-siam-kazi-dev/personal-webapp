import { useState } from 'react'

import './index.css'

import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/all';
import { SplitText } from 'gsap/all';
import { TrastedCompany } from './components/trusted';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main className='bg-[#111]'>
     <NavBar />
     <Banner />
     <TrastedCompany />
 
 
    </main>
  )
}

export default App
