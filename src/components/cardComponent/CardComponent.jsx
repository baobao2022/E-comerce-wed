import { Card } from "antd";
import React from "react";
import  { StyleNameProduct,WrapperPrice ,WrapperPriceDiscout} from "./style";
import "antd/dist/reset.css";
import { Space } from "antd";
import {
  StarFilled
} from "@ant-design/icons";
const CardComponent = () => {

  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        bodyStyle={{ padding: "10px" }}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
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
