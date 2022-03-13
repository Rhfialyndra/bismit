import React from 'react'

const Contact = ({breakpoint}) => {
  return (
    <section className={`${breakpoint} mt-4 ml-8 lg:mt-0 lg:ml-0 text-sm pb-4 flex-col lg:form-width lg:flex-row lg:border-b border-gray-200 gap-4 lg:gap-0`}>

        <div className=' lg:contact flex flex-row w-1/2 items-center'>
            <img src="../img-data/call.svg" alt="call" className=" w-4 md:w-6 h-auto mr-2"/>
            <p>+62 851-5995-4161</p>
        </div>

        <div className='flex flex-row w-1/2 items-center'>
        <img src="../img-data/mail.svg" alt="call" className=" w-4 md:w-6 h-auto mr-2"/>
        <p>customer@sabilamall.co.id</p>
        </div>


    </section>
  )
}

export default Contact