import React from 'react'
import { useRef } from 'react'
import Button from './Button/Button';
import imgBanner from "/src/images/imagen-banner.png"




const Banner = () => {

  
  let array = ["Crea", "Diseña", "Personaliza"];

  let index = 0;

  let completo = false;

  let txt = "";

  let velocidad = 300;

  const textRef = useRef(array)

  const textoAnimado = ()=>{
      let currentIndex = index % array.length;   
      let palabra = array[currentIndex];
      
      if(completo){
          txt = palabra.substring(0,txt.length -1);
          velocidad = 200;
      } else{
          txt = palabra.substring(0,txt.length +1);
          velocidad = 200;
      }
      textRef.current.innerHTML = txt;
      

      if(completo){
          velocidad /= 2;
      }

      if(!completo && palabra === txt){
          completo = true;
          velocidad = 2000;
      } else if(completo && txt === "") {
          completo = false;
          index++;
          velocidad = 300;
      }
    
      setTimeout(textoAnimado,velocidad)
  }

   textoAnimado()

  return (
    <>
    <div className='pt-8 pb-10 sm:pb-4 w-full py-10 px-20 mx-auto flex justify-center sm:flex-col sm:px-0'>
      
      <div className='w-2/4 flex flex-col gap-1 justify-center relative sm:w-full sm:px-4 sm:text-justify'>
        <p className='text-base pb-1 text-gray-500 sm:text-xs'>Muestrale al mundo lo que eres capaz de hacer</p>
        <p className='text-3xl sm:text-2xl'><span ref={textRef} className='border-r-2 border-blue-500 text-4xl sm:text-3xl font-semibold text-blue-l pr-1'>Crea</span> tu pagina web</p>
        <p className='text-base text-gray-700 w-11/12 mt-2 sm:text-sm sm:w-full'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque cupiditate corporis amet dolorem ratione enim numquam saepe porro quae vitae sint fugiat possimus totam culpa doloribus, quam voluptatem corrupti soluta?</p>
        
        <Button />
      </div>
      <div className='w-2/4 flex justify-center sm:w-full sm:pt-4'>
        <img className='h-min relative ' src={imgBanner} alt="" />
      </div>
     
      
    </div>
    
    </>
  )
}

export default Banner 
