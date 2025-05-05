import React from 'react'
import { Bodycomp, PostCard } from '../components'
import {Aboutdata,bodydata,aboutdesc} from '../Contents/Aboutdata'
function About() {
  return (
    <div className='md:mx-50 mx-10 '>
      <Bodycomp title={bodydata.title} para1={bodydata.para1} para2={bodydata.para2} />
      <p className='text-cyan-100 text-justify mb-10 text-lg md:text-2xl'
        >
          {aboutdesc}
        </p>
        <PostCard contents={Aboutdata} />
    </div>
  )
}

export default About