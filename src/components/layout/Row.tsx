import styled from "styled-components";
import { iRow, unit } from "../../types/layout";

const Row = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  ${(props: iRow) => props.justify && `justify-content : ${props.justify}`};
  ${(props: iRow) => props.align && `align-items : ${props.align}`};
  ${(props: iRow) => props.height && `height : ${props.height}vh`};

  ${(props: iRow) => props.mt && `margin-top : ${props.mt * unit}px`};
  ${(props: iRow) => props.mb && `margin-bottom : ${props.mb * unit}px`};
  ${(props: iRow) => props.mr && `margin-right : ${props.mr * unit}px`};
  ${(props: iRow) => props.ml && `margin-left : ${props.ml * unit}px`};
  ${(props: iRow) => props.m && `margin-left : ${props.m * unit}px`};
`;

export default Row;
