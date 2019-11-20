import React from "react";

/** @jsx jsx */
import { Styled, jsx } from "theme-ui";

const input = props => {
  const { inputtype, label } = props;

  let inputElement = null;
  switch (inputtype) {
    case "input":
      inputElement = (
        <input
          sx={{
            width: `100%`,
            p: `5px`,
            m: 2,
            font: `inherit`,
            border: `none`,
            borderRadius: `5px`,
            ":focus": {
              background: `pink`,
              outline: `none`
            }
          }}
          {...props}
        />
      );
      break;
    case "text":
      inputElement = (
        <textarea
          sx={{
            width: `100%`,
            p: `5px`,
            m: 2,
            font: `inherit`,
            border: `none`,
            borderRadius: `5px`,
            ":focus": {
              background: `pink`,
              outline: `none`
            }
          }}
          {...props}
        />
      );
      break;
    default:
      inputElement = (
        <input
          sx={{
            width: `100%`,
            p: `5px`,
            m: 2,
            font: `inherit`,
            border: `none`,
            borderRadius: `5px`,
            ":focus": {
              background: `pink`,
              outline: `none`
            }
          }}
          {...props}
        />
      );
  }

  return (
    <Styled sx={{ display: `flex`, alignItems: `center`, flexWrap: `wrap` }}>
      <Styled.p sx={{ ml: 2, mb: -1 }}>{label}</Styled.p>
      {inputElement}
    </Styled>
  );
};

export default input;
