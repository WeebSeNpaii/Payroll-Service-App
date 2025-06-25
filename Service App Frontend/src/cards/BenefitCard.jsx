import React from 'react'

const BenefitCard = ({Benefits, icons}) => {
  return (
   
       <div className="rounded flex gap-10 items-center p-8 px-10 mb-10 bg-black animated-benefit-border">
      <img className='h-[60px] w-[60px] rounded' src={icons} alt={Benefits}  />
      <p className='text-white text-md text-left'>{Benefits}</p>
 
  
    </div>
  )
   
}

export default BenefitCard