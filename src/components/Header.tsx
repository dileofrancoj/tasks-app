import React from "react";
import { iHeader } from "../types/header";

const Header = ({ title }: iHeader): JSX.Element => {
  return <h1>{title}</h1>;
};

export default React.memo(Header);
