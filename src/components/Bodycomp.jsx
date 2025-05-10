import React from 'react'
import {AnimatedHeading} from './'
function Bodycomp(
    {
        title="",title2="",para1="",para2="",className=""
    }
) {
  return (
    <div
      className={`flex items-center justify-center text-white text-center px-4 w-full bg-green-600 ${className}`}
    >     
      <div className="opacity-70 p-8 rounded-xl max-w-2xl text-cyan-50">
        {title && 
        <h1 className="text-3xl md:text-6xl font-bold">
            {title}
        </h1> }
        {title2 && 
        <AnimatedHeading text={title2} />
        }
        {/* <h1 className='md:text-8xl text-6xl font-bold mb-4 animate-pulse hover:text-green-400 '>Tommorow</h1> */}
        {para1 && 
        <p className="text-lg md:text-2xl text-white relative inline-block">
            {para1}         
        </p>       
         }
        {para2 && 
        <p className="text-md mt-4">
            {para2}
        </p>
        
        }
        

      </div>
    </div>
    
  )
}

export default Bodycomp
