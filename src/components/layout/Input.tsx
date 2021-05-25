import styled from "styled-components";
import { iInput } from "../../types/layout";

const Input = styled.div`
  ${(props: iInput) => props.size && `width : ${props.size}%`};
`;

export default Input;
