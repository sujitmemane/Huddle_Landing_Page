import React from 'react'
import icon1 from '../../assets/icon-communities.svg'
import icon2 from '../../assets/icon-messages.svg'
const Numbers = () => {
  return (
    <section id='numbers'>
      <div className=" container mx-auto mt-8 flex flex-col space-y-4 justify-center items-center md:px-10 md:py-6  md:flex-row  md:justify-around">
         <div className="flex flex-col space-y-4 p-7 justify-start items-start  ">
            <img src={icon1} alt='Community_Image' />
             <h1 className="text-bold text-left text-7xl num text-veryDarkCyan">
                1.4K+
             </h1>
             <p className='text-xl  text-veryDarkCyan'>
                Communities Formed
             </p>
         </div>
         <div className="flex flex-col space-y-4 p-3 justify-start items-start">
            <img src={icon2} alt='Community_Image' />
             <h1 className="text-bold text-left text-7xl num text-veryDarkCyan">
                2.7m+
             </h1>
             <p className='text-xl text-veryDarkCyan '>
                Messages Sent
             </p>
         </div>
      </div>
    </section>
  )
}

export default Numbers
