import styled from "styled-components";
import { iCol, baseWitdh } from "../../types/layout";

const Col = styled.div`
  -webkit-box-flex: 0;
  ${(props: iCol) => `ms-flex: 0 0 ${props.width * baseWitdh}%`};
  ${(props: iCol) => `flex: 0 0 ${props.width * baseWitdh}%`};
  max-width: ${(props: iCol) => props.width * baseWitdh}%;
`;

export default Col;
