import React from "react";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";
import styled from "@emotion/styled";

const Button = styled.button`
  position: fixed;
  border: #cccccc 2px solid;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  bottom: 0;
  right: 0;
  margin: 0 20px 10px 0;
  @media (min-width: 400px) {
    display: none;
  }
`;

const ButtonMenu = props => {
  return <Button sx={{ backgroundColor: `primary` }}></Button>;
};

export default ButtonMenu;
