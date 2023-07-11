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
&{

  text-align: left;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      display:flex;
      padding:0 4px;
      color: rgb(255, 66, 78);
      gap:20px
}
&:after {
  content: "Best value";
  position: absolute;
  top: 6%;
  right: -36%;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  color: #333;
  background-color: #ffd43b;
  padding: 0.1rem 8rem;
  transform: rotate(45deg);
}
`

const WrapperPriceDiscout=styled.div`
text-align: right;
    font-size: 10px;
    line-height: 24px;
    font-weight: 500;
    color: rgb(255, 66, 78);
      
`

export  {StyleNameProduct,WrapperPrice,WrapperPriceDiscout}