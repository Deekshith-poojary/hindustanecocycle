import React from 'react'
import { Bodycomp, PostCard } from '../components'
import {Aboutdata,bodydata,aboutdesc} from '../Contents/Aboutdata'
import TypingHeading from '../components/TypingHeading'
function About() {
  return (
    <>
      <Bodycomp title={bodydata.title} para1={bodydata.para1} para2={bodydata.para2} className='' />
      <div className='bg-slate-100 rounded-t-4xl h-auto pb-10'>
      <p className='text-cyan-950 text-justify mb-10 text-lg md:text-2xl py-10 md:px-40 px-10'
        >
          {aboutdesc}
        </p>
        
        <PostCard contents={Aboutdata} />
    </div>
    </>
  )
}

export default About