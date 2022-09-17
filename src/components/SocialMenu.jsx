import React from 'react'
import { FaFacebookF,  } from 'react-icons/fa';
import { RiInstagramFill} from 'react-icons/ri';
import { IoLogoWhatsapp} from 'react-icons/io';

const SocialMenu = ({style,styleIcon}) => {
  return (
    <div className={`h-16 ${style} relative bottom-6 rounded-xl flex items-center text-white gap-4`}>
          <a href="https://www.instagram.com/spcreativo/" target="_blank" className={`${styleIcon}`}><RiInstagramFill size="25px" /></a>
          {/* <a href="" className={`${styleIcon}`}><FaFacebookF size="25px"/></a> */}
          <a href="https://wa.me/+584141062111?text=Hola!%20Necesito%20un%20presupuesto%20de%20diseño.%20" target="_blank" className={`${styleIcon}`}><IoLogoWhatsapp size="25px" /></a>
    </div>
  )
}

export default SocialMenu
