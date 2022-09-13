import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import OurServices from "./components/OurServices"
import SliderImg from "./components/SliderGallery"

import Footer from "./components/Footer";
import SocialMenu from "./components/SocialMenu";
import SliderGalleryMobile from "./components/SliderGalleryMobile";



function App() {
 
  return (
    <>
    <div className="px-32 scroll-smooth sm:px-2">
    <div className="bg-top">
      {/* <img className="absolute z-0 w-full " src={bgDesktop} alt="" /> */}
      <div data-aos="fade-left" data-aos-duration="1000"  data-aos-offset="300"  className="main-container z-10">
        <div >
          <Navbar />
        </div>
          <Banner />
      </div>
      <div className="w-full h-5 bg-blue-l relative mt-12 mb-14">
        <SocialMenu style={" w-60 bg-blue-d mx-auto justify-center"} styleIcon={"hover:text-yellow-l duration-300"}/>
      </div>
    </div>
      <div id="services">
        <div data-aos="fade-right" data-aos-duration="1000"  data-aos-offset="300" className="flex">
          <OurServices />
        </div>
      </div>
      <div id="gallery" className="w-full px-20 sm:px-0 mx-auto my-20 sm:mt-6 sm:mb-0" data-aos="fade-left" data-aos-duration="1000"  data-aos-offset="300">
          <h2 className="uppercase text-center mb-10 text-3xl font-bold tracking-widest sm:text-2xl sm:w-2/3 sm:mx-auto">Nuestros trabajos</h2>
          <div className="sm:hidden">
            <SliderImg />
          </div>
          <div className="px-10">
            <SliderGalleryMobile />
          </div>
      </div>
      
      
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default App
