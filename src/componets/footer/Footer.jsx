import React from 'react'
import logo from '../../assets/logo-white.svg'
import phone from '../../assets/icon-phone.svg'
import email from '../../assets/icon-email.svg' 
import image1 from '../../assets/bg-section-bottom-desktop-1.svg'
import image2 from '../../assets/bg-footer-top-mobile.svg'
import  {AiFillInstagram,AiFillFacebook,AiFillTwitterSquare} from 'react-icons/ai'

const Footer = () => {
  return (<div className='mt-16'>
      <img src={image1} alt=''  className='-mb-40 w-full  z-10 hidden md:block'/>
       <img src={image2} alt=''  className='-mb-16 w-full  z-10  md:hidden'/>
    <footer id='footer' className='mt-12 bg-veryDarkCyan md:p-24'>

        <div className="container flex flex-col items-center justify-center space-y-12 mx-auto px-12 p-16  md:flex-row-reverse md:justify-between md:px-4 md:space-y-10 md:space-x-14">
             <div className="flex flex-col items-left justify-center space-y-6 md:w-1/2 ">
                <h2 className="font-bold uppercase text-white text-xl text-left">
                    NewsLetter
                </h2>
               
                <p className="  text-sm text-left text-veryPaleBlue font-bold leading-6 md:max-w-sm">
                 To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address 
                </p>
                <div className="">
                    <form action="" className=' flex flex-col space-y-4 md:flex-row md:items-center md:justify-around  md:space-x-4  md:space-y-0'>
                        <input type="text" className='h-12  md:basis-3/4 rounded-md ' />
                        <a href='#' className='bg-pink px-3 py-3 rounded-md  text-white text-center font-bold text-md md:basis-1/4'>Subscribe</a>
                    </form>
                </div>
             </div>

             <div className="flex flex-col items-left justif-center space-y-6 md:w-1/2">
              <img src={logo} alt='Footer_Logo' className='md:w-40'/>
              <p className="text-left text-veryPaleBlue text-sm leading-5 font-bold md:max-w-sm">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
              </p>
              <div className="flex flex-col items-left justify-between space-y-4">
                <div className="flex flex-row items-center justify-start space-x-8 ">
                  <img src={phone} alt='Phone'  className=' h-4'/>
                   <p className='text-white text-sm font-bold text-left' >
                    Phone: +1-543-123-4567
                   </p>
                </div>
                <div className="flex flex-row items-center justify-start space-x-8">
                  <img src={email} alt='Email' className=' h-4' />
                   <p className='text-white text-sm font-bold text-left'>
                    Email: example@huddle.com
                   </p>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center space-x-4">
                <AiFillInstagram size={30} color='white' className='hover:text-blue' />
                <AiFillFacebook size={30} color='white'/>
                <AiFillTwitterSquare size={30} color='white'/>
              </div>
              </div>
        </div>
      
    </footer>
    </div>
  )
}

export default Footer
