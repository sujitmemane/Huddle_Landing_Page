import React from 'react'
import  HeroImage from '../../assets/screen-mockups.svg'
const Hero = () => {
  return (
    <section id='hero' className=''>
      <div className="container flex flex-col justify-center items-center  space-y-8 mx-auto md:px-8 md:py-6  p-3 ">
        <h1 className="font-bold md:text-5xl text-3xl text-center mt-24 text-veryDarkCyan heading">
            Build The Community Your Fans Will Love
        </h1>
        <p className=" text-sm max-w-xs md:text-xl  md:max-w-xl text-center text-veryDarkCyan">
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. 
        </p>
        <a href="#" className=" border px-14 py-4 text-sm  rounded-full bg-pink  text-veryPaleBlue shadow hover:opacity-80 md:text-xl ">
            Get Started For Free 
        </a>
        <img src={HeroImage} alt='Main-Image' />
      </div>
    </section>
  )
}

export default Hero
