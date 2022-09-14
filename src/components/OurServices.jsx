import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ButtonConsult from './Button2/ButtonConsult'

const OurServices = () => {
    let services = [
        {
            name:"Logotipos",
            description: "Diseña tu logo y dale valor a tu marca. Creaciones unicas y personalizadas.",
            fullDescription:"El logo es tu identidad, por lo que es muy importante que cuentes con una imagen que represente a tu marca. El servicio de diseño de logo incluye un pack con 3 diseños diferentes para que escojas el que más se adapte a tí.",
            price:"A convenir."
        },
        {
            name:"Tarjetas y Almanaques",
            description: "Creación de tarjetas de presentación personal y empresarial, almanaques, cartas temáticas, y más...",
            fullDescription:"Tener una carta de presentación es bastante util e importante cuando se trata de hacer nuevos socios y clientes potenciales. Tenemos para ofrecerte packs a la medida, con cartas de presentación, almanaques, y otras medidas adaptadas a objetos.",
            price:"A convenir."
        },
        {
            name:"Landing Pages & Portfolios",
            description: "Ideales para emprendedores, dale visibilidad a tu negocio a un bajo costo.",
            fullDescription:"Todo negocio en la actualidad necesita de una página web para poder sobresalir y darse a conocer. Una Landing Page es una genial idea para presentar tu proyecto si estás comenzando. Tambien tenemos diseños perfectos para portfolios artisticos o laborales.",
            price:"A convenir."
        },
        {
            name:"Diseños Personalizados",
            description: "Te brindamos atención 100% personalizada, cuentamos tu idea y la hacemos realidad.",
            fullDescription:"Todos nuestros servicios son personalizados y a la medida. Trae tu idea y crearemos un diseño original y creativo. Si estás necesitando artes para promocionar tu negocio en las redes sociales, no dudes en contactarnos.",
            price:"A convenir."
        }
    ]

    const nameRef = useRef("")
    const descriptionRef = useRef("")
    const priceRef = useRef("")
    const containerService = useRef("")
    const card0 = useRef("")
    const card1 = useRef("")
    const card2 = useRef("")
    const card3 = useRef("")

    const [service, setService] = useState(0)

    useEffect(()=>{
        console.log(service)
        if(service==0){
            nameRef.current.innerHTML = services[0].name
            descriptionRef.current.innerHTML = services[0].fullDescription
            priceRef.current.innerHTML= services[0].price
            card1.current.classList.remove("active")
            card2.current.classList.remove("active")
            card3.current.classList.remove("active")
            card0.current.classList.add("active")
            setTimeout(()=>{containerService.current.classList.remove("aparecer")},500)
                       
        } else if (service==1){
            nameRef.current.innerHTML = services[1].name
            descriptionRef.current.innerHTML = services[1].fullDescription
            priceRef.current.innerHTML= services[1].price
            card0.current.classList.remove("active")
            card2.current.classList.remove("active")
            card3.current.classList.remove("active")
            card1.current.classList.add("active")
            setTimeout(()=>{containerService.current.classList.remove("aparecer")},500)
            
        } else if (service==2){
            nameRef.current.innerHTML = services[2].name
            descriptionRef.current.innerHTML = services[2].fullDescription
            priceRef.current.innerHTML= services[2].price
            card0.current.classList.remove("active")
            card1.current.classList.remove("active")
            card3.current.classList.remove("active")
            card2.current.classList.add("active")
            setTimeout(()=>{containerService.current.classList.remove("aparecer")},500)
        } else if (service==3){
            nameRef.current.innerHTML =  services[3].name
            descriptionRef.current.innerHTML = services[3].fullDescription
            priceRef.current.innerHTML= services[3].price
            card0.current.classList.remove("active")
            card2.current.classList.remove("active")
            card1.current.classList.remove("active")
            card3.current.classList.add("active")
            setTimeout(()=>{containerService.current.classList.remove("aparecer")},500)
        }
        
    },[service])

    

  return (
    <div className='flex sm:flex-col'>
        <div data-aos="fade-right" data-aos-duration="1000"  data-aos-offset="300" className='flex sm:flex-col gap-4 relative  justify-center px-20 sm:px-0'>
            <div className='flex gap-4 flex-col '>
                <a href="#container-service">
                    <div onClick={()=>{setService(0), containerService.current.classList.add("aparecer")}} ref={card0} className='h-44 w-64 sm:w-full sm:h-32 bg-gray-100 rounded-lg shadow-lg shadow-gray-400 flex flex-col items-center justify-center text-center gap-4'>
                        <h2 className='font-semibold text-blue-d'>{services[0].name} </h2>
                        <p className='text-sm w-full px-4 mx-auto'>{services[0].description}</p>
                    </div>
                </a>
                <a href="#container-service">
                    <div onClick={()=>{setService(1), containerService.current.classList.add("aparecer")}} ref={card1} className='h-44 w-64 sm:w-full sm:h-32 bg-gray-100 rounded-lg shadow-lg shadow-gray-500 flex flex-col items-center justify-center text-center gap-4'>
                        <h2 className='font-semibold text-blue-d'>{services[1].name} </h2>
                        <p className='text-sm w-full px-4 mx-auto'>{services[1].description}</p>
                    </div>
                </a>
                
            </div>
            <div className='flex gap-4 flex-col  mt-8 sm:mt-0'>
                <a href="#container-service">
                    <div onClick={()=>{setService(2),containerService.current.classList.add("aparecer")}} ref={card2} className='h-44 w-64 sm:w-full sm:h-32 bg-gray-100 rounded-lg shadow-lg shadow-gray-500 flex flex-col items-center justify-center text-center gap-4'>
                        <h2 className='font-semibold text-blue-d'>{services[2].name} </h2>
                        <p className='text-sm w-full px-4 mx-auto'>{services[2].description}</p>
                    </div>
                </a>
                <a href="#container-service">
                    <div onClick={()=>{setService(3),containerService.current.classList.add("aparecer")}} ref={card3} className='h-44 w-64 sm:w-full sm:h-32 bg-gray-100 rounded-lg shadow-lg shadow-gray-500 flex flex-col items-center justify-center text-center gap-4'>
                        <h2 className='font-semibold text-blue-d'>{services[3].name}</h2>
                        <p className='text-sm w-full mx-auto px-4'>{services[3].description}</p>
                    </div>
                </a>
            </div>
        </div>
        <div id='container-service' ref={containerService} className="w-full p-10 flex flex-col gap-4">
            <h2 ref={nameRef} data-aos="zoom-in" data-aos-duration="500" data-aos-offset="300" className="uppercase mb-6 text-3xl font-bold tracking-wide sm:text-2xl sm:text-center"></h2>
            <p ref={descriptionRef} data-aos="zoom-in" data-aos-duration="500" data-aos-offset="300" className='text-justify sm:text-sm'></p>
            <p data-aos="zoom-in" data-aos-duration="500" data-aos-offset="300" className='text-blue-d sm:text-sm sm:font-semibold'>Costo: <span className='text-black' ref={priceRef}></span></p>
            <div data-aos="zoom-in" data-aos-duration="500" data-aos-offset="300" className='mt-6'>
             <ButtonConsult />
            </div>
        </div>
      
    </div>
  )
}

export default OurServices
