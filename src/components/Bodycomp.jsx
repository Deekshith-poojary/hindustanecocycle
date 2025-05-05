import React from 'react'

function Bodycomp(
    {
        title="",para1="",para2=""
    }
) {
  return (
    <div
      className="flex items-center justify-center text-white text-center px-4 w-full h-screen"
    >     
      <div className="bg-black opacity-50 p-8 rounded-xl max-w-2xl">
        {title && 
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {title}
        </h1> }
        {para1 && 
        <p className="text-lg md:text-2xl">
            {para1}
        </p> }
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
