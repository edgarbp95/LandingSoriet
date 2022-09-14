import SocialMenu from "./SocialMenu"
import logoSoriet from "/src/images/logo.png"

const Footer = () => {
    return (
      <div className="bg-gray-800 w-full pb-7 px-72 pt-12  flex sm:text-xs bottom-0 sm:px-4 sm:flex-col sm:h-96 md:px-32 md:pt-6 md:gap-4"> 
        <div className="flex flex-col gap-8 w-3/4 mt-6 sm:w-full sm:text-justify"> 
        
          <img className='w-16 sm:mx-auto' src={logoSoriet} alt="Logo Soriet" />
          <p className="text-sm text-gray-200 font-light">Te ayudamos a desarrollar tu marca personal con diseños adaptados a tus necesidades. Destaca entre la competencia, gana visibilidad y aumenta tus ventas. </p> 
          <SocialMenu style={"w-full mx-auto justify-center"} styleIcon={"hover:text-yellow-l duration-300"}/>
        </div>
        <ul className="text-white mt-10 flex h-6 gap-5 w-full justify-end sm:gap-2 sm:grid sm:grid-cols-2 sm:content-center sm:hidden">
          <a href="#services"><li className="nav_menu_option cursor-pointer hover:text-blue-l font-normal text-sm relative md:text-xs sm:text-center">SERVICIOS</li></a>
          <a href="https://wa.me/+584141062111?text=Hola!%20Necesito%20un%20presupuesto%20de%20diseño.%20" target="_blank" ><li className="nav_menu_option cursor-pointer hover:text-blue-l font-normal text-sm relative md:text-xs sm:text-center">CONTACTO</li></a>        
        </ul>
      </div>
    )
  }
  
  export default Footer