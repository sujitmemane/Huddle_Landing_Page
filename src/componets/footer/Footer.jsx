import React from 'react'
import logo from '../../assets/logo.svg'
import phone from '../../assets/icon-phone.svg'
import email from '../../assets/icon-email.svg'
import  {AiFillInstagram,AiFillFacebook,AiFillTwitterSquare} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer id='footer' className='mt-12 bg-veryDarkCyan'>

        <div className="container flex flex-col items-center justify-center space-y-12 mx-auto px-12 pt-16 border">
             <div className="flex flex-col items-left justify-center space-y-4">
                <h2 className="font-bold uppercase text-white text-xl text-left">
                    NewsLetter
                </h2>
               
                <p className=" font-bold text-sm text-left text-white leading-6">
                 To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address 
                </p>
                <div className="">
                    <form action="" className='flex flex-col items-left justify-center space-y-4 '>
                        <input type="text" className='h-12 rounded-md' />
                        <a href='#' className='bg-pink px-3 py-4 rounded-md text-white text-center font-bold text-md'>Subscribe</a>
                    </form>
                </div>
             </div>

             <div className="flex flex-col items-center justif-center space-y-6">
              <img src={logo} alt='Logo' />
              <p className="text-white text-sm text-left">
                 For Free Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem. 
              </p>
              <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row items-center justify-between text-white">
                <img src={phone} alt='Phone' />
                <p>Phone: +1-543-123-4567 </p>
                </div>
                <div className="flex flex-row items-center justify-between text-white">
                <img src={email} alt='Email' />
                <p>Email: example@huddle.com </p>
                </div>
              </div>
             </div>
             <div className="flex flex-row space-between items-center space-x-4">
             <AiFillFacebook/>
             <AiFillInstagram/>
             <AiFillTwitterSquare/>
             </div>
        </div>
      
    </footer>
  )
}

export default Footer
