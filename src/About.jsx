import React from 'react'
import aboutImg from "./images/about/glasses.png"
const About = () => {
  return (
   <section className = "about mt-[88px] xl:mt-[200px] relative z-20 about-gradient  " id ="about">
    <div className = "container mx-auto xl:px-0 ">
        <div className = "flex flex-col text-center xl:text-left xl:flex-row justify-between items-center gap-8 xl:gap-[74px] ">
            <div className = "   flex-1 order-2 xl:order-none max-w-xl xl:max-w-[510px] flex flex-col items-center xl:items-start gap-8  mb-8 mt-9 "> 
            <h2 className="h1 mb-8 font-Marcellus text-3xl font-extrabold text-white/90 md:mt-7 md:4xl lg:text-4xl mt-8 md:mx-7  ">Shaking Things <span className = "text-[#39dad1] "> Up</span> <br />
             <span className = "text-[#46d1ca] font-black italic">One Cocktail</span>  at a Time</h2>
            <p className = "mb-8 font-Oswald text-xl text-[#202021] md:text-2xl mx-4 md:mx-8 ">
            At the heart of every great cocktail lies a story - and ours are waiting to be discovered. Crafted by expert hands, our cocktails are more than just drinks; they are an invitation to experience flavors that transcend the ordinary. Each glass holds a secret blend of passion, tradition, and a touch of the unexpected, perfected by our <span className = "text-[#32B9B2] lg:text-[#3de9e0] italic">world-class bartenders</span>  and refined through collaborations with some of the most innovative minds in the industry. Whether you're here to indulge in a timeless classic or explore something new, your journey starts with a sip… and where it ends is entirely up to you.
            </p>
            </div>
            <div className = "max-w-[453px] xl:order-none mx-auto xl:max-w-none xl:mx-0   "> 
            <img src = {aboutImg} alt = ""/>
            </div>
        </div>
    </div>
   </section>
  )
}

export default About
