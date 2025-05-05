import React from 'react'

function Postcard(
  {contents={},}
) {
  return (
    <>
    {contents.map(content=>(

        <div className='w-full bg-gray-100 rounded-2xl p-4 my-10'> 
            <div className='w-full justify-center mb-4 '>
            <h2 className='text-xl font-bold text-center'
            >{content.title}</h2>
            <p className='text-lg md:text-2xl'>{content.description}</p>
            </div>
        </div>
            )
          )}
    </>
  )
}

export default Postcard
