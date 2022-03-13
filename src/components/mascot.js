import React from 'react'

const Mascot = ({breakpoint}) => {
  return (
    <div className={`${breakpoint} flex-col items-center`}>

        <img src="../img-data/mascot.svg" alt="maskot" className=''/>
        <h1 className='font-bold text-xl text-gray-700 text-center'>Follow SabillaMall Yuk!</h1>
        
        <section className='mt-2 flex flex-row gap-2'>
            <img src="../img-data/facebook.svg" alt="facebook" className='w-8 h-auto'/>
            <img src="../img-data/twitter.svg" alt="facebook" className='w-8 h-auto'/>
            <img src="../img-data/instagram.svg" alt="facebook" className='w-8 h-auto'/>
            <img src="../img-data/linkedin.svg" alt="facebook" className='w-8 h-auto'/>

        </section>

    </div>
  )
}

export default Mascot