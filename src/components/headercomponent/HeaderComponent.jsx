import React from "react";
import { Col, Space } from 'antd'
import {WrapHeader,WrapperTextHeader,WrapHeaderAcount} from './StyleHeader'  //////Style
import { Input } from 'antd';
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined 
} from '@ant-design/icons';
const { Search } = Input;
const HeaderComponent = () => {
  return (
    <div>
      <WrapHeader>
        <Col span={4}><WrapperTextHeader>TIKI</WrapperTextHeader></Col>
        <Col span={12}><Search placeholder="input search text" enterButton /></Col>
        <Col span={4}><Space>
          <div>
          <UserOutlined style={{fontSize:'20px'}}/> 
          </div>
          <WrapHeaderAcount>
            <span style={{fontSize:'11px'}}> Đăng Nhập/Đăng ký</span>
            <br></br>
            <span>Tài Khoản<Space><CaretDownOutlined /></Space></span>
            
          </WrapHeaderAcount>
          </Space></Col>
          <Col span={2}><Space><ShoppingCartOutlined style={{fontSize:'20px'}} /></Space> Giỏ Hàng</Col>
      </WrapHeader>
    </div>
  );
};


export default HeaderComponent;
