import React from 'react'
import "./buttonConsult.css"
import {FaWhatsapp} from "react-icons/fa"

const ButtonConsult = () => {
  return (
    <a href="">
        <div className="button mx-auto">
            <div className="button-wrapper">
                <div className="text">Consultar</div>
                <span className="icon">
                    <FaWhatsapp size="25px"/>
                </span>
            </div>
        </div>
    </a>
  )
}
export default ButtonConsult
