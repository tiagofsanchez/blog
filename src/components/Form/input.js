import React from "react";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

const inputStyle = {
  width: `100%`,
  p: `10px`,
  m: 2,
  font: `inherit`,
  fontSize: 16,
  border: `none`,
  borderRadius: `5px`,
  ":focus": {
    background: `pink`,
    outline: `none`
  }
};

const input = props => {
  const { inputtype, label } = props;

  let inputElement = null;
  switch (inputtype) {
    case "input":
      inputElement = <input sx={inputStyle} {...props} />;
      break;
    case "text":
      inputElement = <textarea sx={inputStyle} {...props} />;
      break;
    default:
      inputElement = <input sx={inputStyle} {...props} />;
  }

  return (
    <Styled sx={{ display: `flex`, alignItems: `center`, flexWrap: `wrap` }}>
      <Styled.p sx={{ ml: 2, mb: -1 }}>{label}</Styled.p>
      {inputElement}
    </Styled>
  );
};

export default input;
