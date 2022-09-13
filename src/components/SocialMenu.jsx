import React from 'react'
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill} from 'react-icons/ri';
import { IoLogoWhatsapp} from 'react-icons/io';

const SocialMenu = ({style,styleIcon}) => {
  return (
    <div className={`h-16 ${style} relative bottom-6 rounded-xl flex items-center text-white gap-4`}>
          <a href="" className={`${styleIcon}`}><RiInstagramFill size="25px" /></a>
          <a href="" className={`${styleIcon}`}><FaFacebookF size="25px"/></a>
          <a href="" className={`${styleIcon}`}><FaTwitter size="25px"/></a>
          <a href="" className={`${styleIcon}`}><IoLogoWhatsapp size="25px" /></a>
    </div>
  )
}

export default SocialMenu
