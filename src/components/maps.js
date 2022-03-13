import React from 'react'

const Maps = () => {
  return (
    <div className='max-w-sm lg:w-96 flex flex-col justify-center items-center'>
        <iframe title="map of UI" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.24168836983!2d106.8248595144946!3d-6.362758464014457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ec1a804e8b85%3A0xd7bf80e1977cea07!2sUniversitas%20Indonesia!5e0!3m2!1sid!2sid!4v1647166887040!5m2!1sid!2sid" 
        width="350" height="350" className="rounded-xl pb-4" allowfullscreen="" loading="lazy"></iframe>

        <section className='flex flex-row max-w-full items-start'>
            <img className="w-10 ml-2 object-top"src="../img-data/location.svg" alt="location"/>
            
            <article className='text-xs poppins mx-2 md:mx-4'>
                <p>Satria Building 2nd Lt 2 Unit A204-A206, 
                    Jl. Akses UI No.24-26, Tugu, Kec. Cimanggis, Kota Depok, Jawa Barat Depok Jawa Barat, 16451 Indonesia
                </p>
                <button className="mt-2 px-2 py-1 border-amber-500 border rounded-sm text-amber-600 font-bold 
                hover:text-white hover:bg-amber-500 transition-all duration-200"type="button"> Lihat di Google Maps </button>
            </article>

        </section>

    </div>
  )
}

export default Maps;