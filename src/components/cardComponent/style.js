import { styled } from "styled-components";

const StyleNameProduct=styled.div`

  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: rgb(39, 39, 42);
  margin: 0px;
  word-break: break-word;
`
const WrapperPrice=styled.div`
text-align: left;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    display:flex;
    padding:0 4px;
    color: rgb(255, 66, 78);
    gap:20px
`
const WrapperPriceDiscout=styled.div`
text-align: right;
    font-size: 10px;
    line-height: 24px;
    font-weight: 500;
    color: rgb(255, 66, 78);
`
export  {StyleNameProduct,WrapperPrice,WrapperPriceDiscout}