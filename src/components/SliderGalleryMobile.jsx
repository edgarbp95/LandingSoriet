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
