import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import WrapperTypeProduct from './style'
import Slidercomponent from '../../components/SliderComponent/Slidercomponent'
import CardComponent from '../../components/cardComponent/CardComponent'
const HomePage = () => {
  const arr= ['TV','Tu lanh','laptop','ban phim','dien thoai']
  return (
    <div style={{backgroundColor:'rgb(235, 235, 240)'}}>

      <WrapperTypeProduct ><TypeProduct/>
      {arr.map((items)=>{
        return (
          <>
            <TypeProduct name={items} key={items}/>
          </>
        )
      })}
      </WrapperTypeProduct>
      <div >

      <Slidercomponent />
      </div>
      <div>
      <div style={{marginTop:'20px',display:'flex',gap:'20px',padding:'0 120px',backgroundColor:'rgb(235, 235, 240)'}}>
        
        <CardComponent/><CardComponent/><CardComponent/>
        </div>
      </div>
    </div>
  )
}

export default HomePage