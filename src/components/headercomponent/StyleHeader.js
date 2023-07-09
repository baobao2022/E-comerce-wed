import { Row } from "antd";
import { styled } from "styled-components";
const WrapHeader = styled(Row)`
  padding: 10px 120px;
  background-color: rgb(26, 148, 255);
  gap:10px;
  align-items: center;
`;
const WrapperTextHeader =styled.span`
  font-size:20px;
  color:#fff;
  front-weight:bold;
  text-align:left;
`
const WrapHeaderAcount =styled.div`
`
export {WrapHeader,WrapperTextHeader,WrapHeaderAcount};
