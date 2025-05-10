import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className='w-10 h-10'>
      <img src="/assets/hindustan_eco_logo.jpeg" alt="Hindustan eco cycle" className='rounded-full' />
    </div>
  )
}

export default Logo