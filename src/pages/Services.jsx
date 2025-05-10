import React from 'react'
import { ExpandableCard } from '../components'
import {Bodycomp} from '../components'

function Services() {
  return (
    <div>
        <Bodycomp title="Our Services" className='' />
      <div className='rounded-t-4xl p-8 bg-slate-100 h-full flex items-center justify-center flex-col'>
        <ExpandableCard title='Bio-Medical Waste Management'
        desc='Recyclofy safely collects and disposes of waste from hospitals and clinics, like used syringes, gloves, and bandages. This kind of waste can be harmful, so we handle it very carefully. We use special containers and follow safety rules to protect people and the environment. The waste is treated to kill germs before final disposal.'
        />
        <ExpandableCard title='Bio-Mining of Legacy Waste'
        desc='We clean up old garbage that has been sitting in landfills for years. Recyclofy separates useful items like plastic and metal from the waste. The rest is processed in an eco-friendly way. This helps free up land and reduces pollution.'
        />
        <ExpandableCard title='Construction & Demolition Waste Management'
        desc='Recyclofy manages waste from building and demolition sites, like bricks, cement, and wood. We collect, sort, and recycle these materials so they can be reused. This reduces the amount of waste that goes to landfills. It also supports cleaner and greener construction.'
        />
        <ExpandableCard title='Day-to-Day Waste Management'
        desc='We collect daily waste from homes, offices, and shops. Our team makes sure garbage is picked up on time and disposed of properly. We also separate waste into useful and non-useful parts. This keeps streets clean and helps in recycling.
'
        />
        <ExpandableCard title='Municipality Waste Management'
        desc='Recyclofy works with city governments to manage all types of city waste. We collect garbage from homes, public places, and markets. The waste is sorted, treated, and either recycled or safely thrown away. We also help educate people about proper waste disposal.'
        />
        <ExpandableCard title='Organic Waste Management'
        desc='We handle food waste, garden leaves, and other natural waste. This waste is turned into compost or gas instead of being dumped. Compost can be used in farming, and the gas can be used for energy. It’s a great way to turn waste into something useful.'
        />
      <ExpandableCard title='Plastic Waste Management'
      desc='Recyclofy collects plastic waste and sends it for recycling. We make sure the plastic is clean and sorted before recycling. This helps reduce plastic pollution. We also teach people how to dispose of plastic properly.'
      />
        </div>
    </div>
  )
}

export default Services