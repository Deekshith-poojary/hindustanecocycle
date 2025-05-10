import React from 'react'

function Postcard(
  {contents={},}
) {
  return (
    <div className='flex md:flex-row flex-col w-full md:justify-center md:items-center'>
    {contents.map(content=>(

        <div className='bg-white rounded-2xl shadow-2xl p-4 md:my-10 my-5 md:w-1/2 mx-10'> 
            <div className='w-full justify-center mb-4 '>
            <h2 className='text-xl md:text-3xl mb-4 font-bold text-center'
            >{content.title}</h2>
            <p className='text-lg md:text-2xl text-justify'>{content.description}</p>
            </div>
        </div>
            )
          )}
    </div>
  )
}

export default Postcard
