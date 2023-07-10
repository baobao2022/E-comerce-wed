import { Image } from "antd";
import React from "react";
import Slider from "react-slick";
import image1 from '../../assets/image/image1.png'
import image2 from '../../assets/image/image2.png'
import image3 from '../../assets/image/image3.png'
const Slidercomponent = () => {
   const arr=[image1,image2,image3]
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:false,
    autoplaySpeed:400,
    swipe:true,
  };
  return (
    <Slider {...settings}>
     {arr.map((items)=>{
      return(
    
        <div>

          <Image src={items} preview={false}style={{width:'100%',height:'274px',borderRadius:'15%',padding:'0 120px'}}/>
        </div>
      
      
      )
     })}
    </Slider>
  );
};

export default Slidercomponent;
