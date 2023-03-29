import React from 'react'

const CTA = () => {
  return (
    <section id='cta' className='mt-16 border'>

      <div className="container flex flex-col space-y-8 items-center p-8 border">
        <h1 className="font-bold text-3xl  text-veryDarkCyan text-center sub md:text-5xl">
          Ready To Build Your Community?
        </h1>
        <a href="#" className=" border px-14 py-4 text-sm  rounded-full bg-pink  text-veryPaleBlue shadow hover:opacity-80 md:text-xl ">
            Get Started For Free 
        </a>
      </div>
      
    </section>
  )
}

export default CTA
