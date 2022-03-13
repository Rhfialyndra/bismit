import React from 'react'
import Contact from './contact'

const Form = () => {
  return (
    <div className="flex flex-col w-screen lg:form-width">
        
        <div className='mx-4 lg:mx-0 pb-4'>
            <Contact breakpoint={"hidden lg:flex"}/>

            
            <h1 className=" text-2xl text-gray-700 font-bold my-6">Tinggalkan Pesan</h1>
            <form action="" method="POST">

                <div className="relative flex flex-col gap-3">

                    <div className='relative'>
                        <input className="w-full border border-gray-300 rounded-md p-2 pl-14" 
                        placeholder='Nama Anda' type="text" id="nama" name="nama">  
                        </input>
                        <img src="../img-data/people.svg" alt="peeps" className='absolute bottom-2 left-3'/>
                    </div>

                    <div className='relative'>
                        <input className="w-full border border-gray-300 rounded-md p-2 pl-14" 
                        placeholder='Email Anda' type="text" id="email" name="email">  
                        </input>
                        <img src="../img-data/mail-form.svg" alt="peeps" className='absolute bottom-3 left-3'/>
                    </div>
                    
                    <div className='relative'>
                        <input className="w-full border border-gray-300 rounded-md p-2 pl-14" 
                        placeholder='Nomor telepon Anda' type="text" id="telp" name="telp">  
                        </input>
                        <img src="../img-data/call-form.svg" alt="peeps" className='absolute bottom-2 left-3'/>
                    </div>

                    <textarea placeholder="Tulis pesan Anda di sini" className="w-full border border-gray-300 rounded-md p-2 h-28" 
                    type="text" id="nama" name="nama"></textarea>

                    <button type='submit' className='lg:absolute -bottom-14 right-0 py-2 
                    px-8 bg-red-600 rounded-md text-white font-bold hover:bg-white hover:text-red-500
                    transition-all duration-300'>Kirim</button>
                </div>

            
            </form>

        </div>

    </div>
  )
}

export default Form