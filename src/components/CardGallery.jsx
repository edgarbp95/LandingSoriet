import React from 'react'
import "../css/App.scss"

const CardGallery = ({imgCard,name,description}) => {
  return (
        <div className="card-wrapper sm:p-0 sm:mb-20">
                <div className="card">
                    <div className="card-image">
                        <img src={imgCard} />
                    </div>
                    
                    {/* <ul className="social-icons">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul> */}
                    <div className="details">
                        <h2 className='font-semibold'>{name}<span className="job-title">{description}</span></h2>
                    </div>
                </div>
        </div>
  )
}

export default CardGallery
