import {
  CaretDownOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Col, Input, Space } from "antd";
import React from "react";
import { WrapHeader, WrapHeaderAcount, WrapperTextHeader } from "./StyleHeader"; //////Style
const { Search } = Input;
const HeaderComponent = () => {
  return (
    <div>
      <WrapHeader>
        <Col span={4}>
          <WrapperTextHeader>TIKI</WrapperTextHeader>
        </Col>
        <Col span={11}>
          <Search placeholder="input search text" enterButton />
        </Col>
        <Col span={4}>
          <Space>
            <div>
              <UserOutlined style={{color:"#fff", fontSize: "20px" }} />
            </div>
            <WrapHeaderAcount>
              <span style={{ fontSize: "11px",color:"#fff" }}> Đăng Nhập/Đăng ký</span>
              <br></br>
              <span style={{color:"#fff"}}>
                Tài Khoản
                <Space>
                  <CaretDownOutlined />
                </Space>
              </span>
            </WrapHeaderAcount>
          </Space>
        </Col>
        <Col span={3}>
          <Space>
            <ShoppingCartOutlined style={{ fontSize: "20px" ,color:"#fff"}} />
          </Space>
          <span   style={{color:"#fff"}}>Giỏ Hàng</span>
        </Col>
      </WrapHeader>
    </div>
  );
};

export default HeaderComponent;
