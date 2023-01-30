import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import CardGallery from './CardGallery';

const SliderGalleryMobile = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

      const collection = [
        {    
          img:"https://i.ibb.co/DGDWR9r/arte.jpg",
          name:"Arte para redes",
          description:"Contenido para redes sociales.",
        },
        {
          img:"https://i.ibb.co/0DKV3Y8/branding-3-1080-x1350.jpg",
          name:"Arte para redes",
          description: "Contenido para redes sociales."
        },
        {
          img:"https://i.ibb.co/Jcx7V8v/CARRUSEL-TECNOFUEGO-1.jpg",
          name:"Carrusel Tecnofuego",
          description:"Arte de carrusel realizado para Tecnofuego.",
        },
        {
          img:"https://i.ibb.co/Wxjz9Xy/CARRUSEL-TECNOFUEGO2.jpg",
          name:"Carrusel Tecnofuego",
          description:"Arte de carrusel realizado para Tecnofuego.",
        },
        {
          img:"https://i.ibb.co/42sYgRj/CARRUSEL-TECNOFUEGO3.jpg",
          name:"Carrusel Tecnofuego",
          description:"Arte de carrusel realizado para Tecnofuego.",
        },
        {
          img:"https://i.ibb.co/vZ50Cww/DISE-O-SISTEMAS-DE-ESPUMA-INSTAGRAM.png",
          name:"Arte Instagram",
          description:"Arte realizado para empresa contra incendios.",
        },
        {
          img:"https://i.ibb.co/yygCQ6V/extintores-histori2.jpg",
          name:"Extintores contra incendios",
          description:"Arte para publicidad de extintores ANSUL.",
        },
        {
          img:"https://i.ibb.co/6YFLc5V/FECHAS-2023-Enero-a-Junio.jpg",
          name:"Diseño de calendario",
          description:"Creación de calendario para impresión.",
        },
        {
          img:"https://i.ibb.co/jZRFknb/janet-2-1080-x1350.jpg",
          name:"Arte para sitio gastronomico",
          description:"Diseño realizado para el Fogon del Tibidabo.",
        },
        {
          img:"https://i.ibb.co/25VjfMv/janet-4-1080-x1350.jpg",
          name:"Arte para sitio gastronomico",
          description:"Diseño realizado para el Fogon del Tibidabo.",
        },
        {
          img:"https://i.ibb.co/p1r2CZZ/janet-pub-1080-x1350.jpg",
          name:"Arte para sitio gastronomico",
          description:"Diseño realizado para el Fogon del Tibidabo.",
        },
        {
          img:"https://i.ibb.co/3kRc9qZ/ROCIADORES-Y-BOQUILLAS-INSTAGRAM.jpg",
          name:"Arte para empresa Tecnofuego",
          description:"Diseño para instagram sobre rociadores y boquillas contra incendios.",
        },
        {
          img:"https://i.ibb.co/FmLVCCj/SS-PERFUMES-2.jpg",
          name:"Diseño SS Perfumes",
          description:"Arte para emprendimiento de perfumeria.",
        },
        {
          img:"https://i.ibb.co/dW5PhyG/SS-PERFUMESi.jpg",
          name:"Diseño SS Perfumes",
          description:"Arte para emprendimiento de perfumeria.",
        },
        {    
          img:"https://i.ibb.co/0nkpZrm/portfolio-web.jpg",
          name:"Portfolio de Proyectos",
          description:"Plantilla para portfolio de proyectos, artes, y más.",
        },
        {
          img:"https://i.ibb.co/Drv5bPK/adricars.jpg",
          name:"Diseño Adricars",
          description: "Arte realizado a AdriCars."
        },
        {
          img:"https://i.ibb.co/HPzJF59/belagua-recicla.jpg",
          name:"Belagua Recicla",
          description:"Arte realizado como proyecto de Belagua Recicla.",
        },
        {
          img:"https://i.ibb.co/wsYtWxV/bodegon-luisa.jpg",
          name:"Bodegon Luisa",
          description:"Arte de IG para Bodegon",
        },
        {
          img:"https://i.ibb.co/z6YP3mP/consiguelo-aqui.jpg",
          name:"Consiguelo Aquí",
          description:"Arte realizado para ferreteria.",
        },
        {
          img:"https://i.ibb.co/Ltfp8RH/landing-page-yoadopto.jpg",
          name:"Landing Page YoAdopto",
          description:"Landing Page para página de adopción",
        },
        {
          img:"https://i.ibb.co/HN0HB1T/toto-burger.jpg",
          name:"Menu ToTo Burger",
          description:"Menu de comida para ToTo Burger",
        },
        {
          img:"https://i.ibb.co/2gqb8ZG/papeleria-escolar.jpg",
          name:"Arte papeleria escolar",
          description:"Promocion de articulos de venta papeleria escolar.",
        },
        {
          img:"https://i.ibb.co/GHSm5mD/papeleria-escolar-logo.jpg",
          name:"Logo Papeleria Logo",
          description:"Logo personalizado de negocio Papeleria",
        },
        {
          img:"https://i.ibb.co/KjzW7sk/tareitas.jpg",
          name:"Diseño Tarea Escolar",
          description:"Arte realizado para trabajo escolar.",
        },
        {
          img:"https://i.ibb.co/YyXsvKR/landing-page-tecno.jpg",
          name:"Landing Page Tecnología",
          description:"Plantilla de muestra para página de productos, con vista detallada de productos.",
        },
        {
          img:"https://i.ibb.co/WBGJdZH/logo-bodegon.jpg",
          name:"Logo Bodegon Luisa",
          description:"Diseño de Logo para Bodegon",
        },
        {
          img:"https://i.ibb.co/rd21Nrj/logo-dvetech-group.jpg",
          name:"Logo DVTECH",
          description:"Logo personalizado para empresa DVTECH",
        },
        {
          img:"https://i.ibb.co/d6T2Dd5/logo-dvtech.jpg",
          name:"Logo DVTECH",
          description:"Logo personalizado para empresa DVTECH",
        },
        {
          img:"https://i.ibb.co/SyZ18ns/logos-DVTECH.jpg",
          name:"Logo DVTECH",
          description:"Logo personalizado para empresa DVTECH",
        }      
      ]

  return (
    <div className='mb-24'>
      <Slider {...settings} arrows={false}>
        {collection.map((item)=>(
          <CardGallery  imgCard={item.img} name={item.name} description={item.description} />
        ))}
        
      </Slider>
    </div>
  )
}

export default SliderGalleryMobile
