import React from 'react'
import "./buttonConsult.css"
import {FaWhatsapp} from "react-icons/fa"

const ButtonConsult = () => {
  return (
    <a href="https://wa.me/+584141062111?text=Hola!%20Necesito%20un%20presupuesto%20de%20diseño.%20" target="_blank">
        <div className="button sm:mx-auto">
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
