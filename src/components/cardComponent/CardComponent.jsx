import { Card } from "antd";
import React from "react";
import  { StyleNameProduct,WrapperPrice ,WrapperPriceDiscout} from "./style";
import "antd/dist/reset.css";
import Offical from '../../assets/image/office.png'
import { Space } from "antd";
import {
  StarFilled
} from "@ant-design/icons";
const CardComponent = () => {

  return (
    <>
      <Card
        hoverable
        style={{ width: '200px',height:'200',position:'relative',overflow: 'hidden' }}
        bodyStyle={{ padding: "10px" }}
        cover={
          <img
          style={{ width: '150px',height:'180' ,margin:'10px auto'}}
          alt="example"
          src={"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"}
          />      
        }
      >
        <img src={Offical} alt="offical" style={{ width: '72px',height:'20px' ,position:"absolute",top:0,left:0}}/>
        <StyleNameProduct>Iphone</StyleNameProduct>
      
        <div style={{display: "flex",fontSize:'10px',gap:'4px',alignItems: 'center'}}>
          <div style={{display:'flex',gap:'8px'}}>
          <div><span>4.95</span></div>
          <div><Space><StarFilled style={{color:"yellow"}}/></Space></div>
          </div>
          <div style={{display:'flex',gap:'24px'}}>
            <div style={{width: '1px', height: '18px', backgroundColor: 'rgb(199, 199, 199)'}}></div>
          <div><span>Đã bán 1000+</span></div>
          </div>
        </div>
        <WrapperPrice>
          1.000.000 đ
          <WrapperPriceDiscout>
            -20%
          </WrapperPriceDiscout>
        </WrapperPrice>
      </Card>
    </>
  );
};

export default CardComponent;
