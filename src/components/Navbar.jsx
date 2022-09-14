import React from 'react'
import logoSoriet from "/src/images/logo.png"


const Navbar = () => {
  return (
    <div className='flex justify-between px-10 pt-8 pb-0 items-center sm:flex-col sm:px-0  '>
      <img className='h-16 sm:pb-4 sm:h-20' src={logoSoriet} alt="Logo Soriet" />
      <ul className='flex gap-8 font-semibold'>
        <a href="#services" className='hover:text-blue-l duration-300 text-sm'><li>Servicios</li></a>
        <a href="#gallery" className='hover:text-blue-l duration-300 text-sm'><li>Gallería</li></a>
        <a href="https://wa.me/+584141062111?text=Hola!%20Necesito%20un%20presupuesto%20de%20diseño.%20" target="_blank" className='hover:text-blue-l duration-300 text-sm'><li>Contacto</li></a>
      </ul>
    </div>
  )
}

export default Navbar
