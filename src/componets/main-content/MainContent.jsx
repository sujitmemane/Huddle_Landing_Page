import React from 'react'
import image1 from '../../assets/illustration-grow-together.svg'
import image2 from '../../assets/illustration-flowing-conversation.svg'
import image3 from '../../assets/illustration-your-users.svg'
const MainContent = () => {
  return (
    <section id='main-content'>

        <div className="container  mx-auto  flex flex-col justify-between space-y-20 p-6 mt-8 ">

            <div className="flex flex-col space-y-8 md:flex-row-reverse md:justify-between md:items-center md:text-left md:space-x-4">
            <div className='md:w-1/2 '><img src={image1} alt='First_Image' className='md:h-96' /></div> 
             <div className='md:w-1/2'>
             <h1 className="font-bold text-center text-5xl text-veryDarkCyan my-4 md:text-left">
             Grow Together
             </h1>
              <p className=" text-veryDarkCyan text-sm text-center md:text-left text-md max-w-md mt-4">
              Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.
              </p>
           
            </div>
            </div>
            <div className="flex flex-col space-y-8 md:flex-row md:justify-between md:items-center md:text-left md:space-x-4" >
             <div className='md:w-1/2 '><img src={image2} alt='First_Image' className='md:h-96' /></div> 
             <div className='md:w-1/2'>
             <h1 className="font-bold text-center text-5xl text-veryDarkCyan my-4 md:text-left">Flowing Conversations</h1>
             <p className="text-veryDarkCyan text-sm text-center md:text-left text-md max-w-md mt-4">You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow. </p>
            </div>
            </div>
            <div className="flex flex-col space-y-8 md:flex-row-reverse md:justify-between md:items-center md:text-left md:space-x-4">
            <div className='md:w-1/2 '><img src={image3} alt='First_Image' className='md:h-96' /></div> 
             <div className='md:w-1/2'>
             <h1 className="font-bold text-center text-5xl text-veryDarkCyan my-4 md:text-left"> Your Users</h1>
             <p className="text-veryDarkCyan text-sm text-center md:text-left text-md max-w-md mt-4 ">It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately. </p>
            </div>
            </div>

        </div>
      
    </section>
  )
}

export default MainContent
