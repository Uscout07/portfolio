import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Services({ themeColor = "" }) {
    return (
        <div id='services-section' className='relative py-4'>
            <h1 className='text-center font-bold py-10 uppercase text-[8vh] max-md:text-[6vh]'>Services</h1>
            <div data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <p className='uppercase text-[5vh] ibm-plex-mono-regular px-8 max-md:text-[3vh]'>
                to put my skills to practical use i started a freelance agency called <b style={{ color: themeColor }}>PARIKALPANA IO</b> BACK IN 2O24
            </p>
            <div className='flex flex-col md:flex-row w-screen h-auto items-center justify-center gap-10 py-10'>
                <Link 
                    href={'https://thecaringpaws.com'}
                    className="w-full md:w-[30vw] h-[58.33vw] md:h-[17.6vw] bg-cover bg-center px-2 py-3 border-4 border-[#FFD700] hover:scale-110 transition-all duration-200 ease-in-out"
                    style={{ backgroundImage: "url('/theCaringPaws.png')" }}
                >
                    <p className='px-3 py-1 ibm-plex-mono-regular rounded-full bg-[#FFD700] inline'>
                        <b>Deployed</b>
                    </p>
                </Link>

                <Link
                    href="https://mttalento.vercel.app"
                    className='w-full md:w-[30vw] h-[58.33vw] md:h-[17.6vw] bg-amber-100 px-2 py-3 text-white bg-cover bg-center hover:scale-110 transition-all duration-300 ease-in-out'
                    style={{ backgroundImage: "url('/Mttalento.png')", borderWidth: "4px", borderStyle: "solid", borderColor: themeColor }}
                >
                    <p className='px-3 py-1 ibm-plex-mono-regular rounded-full inline'
                        style={{ backgroundColor: themeColor }}>
                        <b>Under Development</b>
                    </p>
                </Link>
            </div>
            <div className='flex flex-col md:flex-row w-screen h-auto items-center justify-center py-10'>
                <div className="max-w-full md:max-w-[30vw] bg-cover bg-center px-5 py-5 flex flex-col ibm-plex-mono-regular justify-center text-white md:text-[1vw]"
                    style={{ backgroundColor: themeColor }}
                >
                    <p>
                        "Udit and his team listen to all our needs and did the best job.
                        Reasonable prices, professional, honest, and reliable. Always
                        accessible and never minded the changes. We highly recommend
                        them!"
                    </p>
                    <p className='text-right pt-3'>
                        <b>- Sylvia Martha Torres, The Caring Paws</b>
                    </p>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <Link href="#contact-section" className="text-[4vh] max-md:text-[3vh] text-white py-2 px-5 rounded-full animate-pulse hover:animate-none transition-all duration-300 ease-in-out hover:scale-105 my-4"
                    style={{ backgroundColor: themeColor }}
                >
                    INQUIRE NOW
                </Link>
            </div>
            </div>
        </div>
    )
}
