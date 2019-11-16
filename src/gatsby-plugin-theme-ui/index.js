import prism from "@theme-ui/prism/presets/oceanic-next";

const grey90 = `#232129`;
const black80 = `#1B1F23`;
const white = `#fff`;
const lightWhite = `rgba(255, 255, 255, 0.86)`;
const opaqueLightYellow = `rgba(255, 229, 100, 0.2)`;
const opaqueLightWhite = `hsla(0, 0%, 100%, 0.2)`;
const darkPink = `#d23669`;
const pink = `pink`;
const blueGray = `#282c35`;
const lightblue = `#a5a4a6`;
const lightGray = "#eee";
const gray = `#CCCCCC`;

export default {
  //theme
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    container: 710
  },
  fonts: {
    body: "PT Sans Narrow,sans-serif",
    monospace: '"Roboto Mono", Menlo, monospace'
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25
  },
  fontWeights: {
    body: 400,
    heading: 1000,
    bold: 700
  },
  fontSizes: [24, 32, 48, 64, 72, 96],
  letterSpacing: {
    body: "normal",
    caps: "0.2em"
  },
  //styles
  styles: {
    root: {
      fontFamily: `body`
    },
    pre: {
      variant: `prism`,
      bg: `prism.background`,
      hyphens: `none`,
      marginBottom: 3,
      overflow: `auto`,
      borderRadius: 5,
      p: 3,
      boxShadow: `1px 2px 10px rgba(0, 0, 0, 0.5)`
    },
    code: {
      fontFamily: `monospace`,
      fontWeight: `body`,
      lineHeight: `body`,
      letterSpacing: `body`
    },
    inlineCode: {
      borderRadius: `0.3em`,
      bg: `muted`,
      p: `0.3em`,
      fontSize: `body`
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0
    },
    th: {
      textAlign: "left",
      py: 2,
      borderBottomStyle: "solid"
    },
    td: {
      textAlign: "left",
      py: 2,
      borderBottom: "1px solid",
      borderColor: "muted"
    },
    img: {
      maxWidth: "100%",
      height: "auto",
      boxShadow: `1px 2px 10px rgba(0, 0, 0, 0.5)`,
      textAlign: `center`,
      display: `block`,
      margin: `auto`
    },
    // from typography overrideThemeStyles
    h1: {
      fontSize: 32,
      color: "primary",
      mt: 5,
      mb: 4
    },
    a: {
      color: `primary`
    },
    p: {
      fontSize: `body`,
      fontWeight: `body`,
      lineHeight: `body`,
      letterSpacing: `body`
    },
    li: {
      fontSize: `body`,
      fontWeight: `body`,
      lineHeight: `body`,
      letterSpacing: `body`
    },
    blockquote: {
      color: `inherit`,
      borderLeft: `solid 5px`,
      paddingLeft: `10px`,
      borderColor: `primary`,
      opacity: 0.8,
      fontStyle: `italic`
    }
  },
  //Colors
  colors: {
    text: blueGray,
    background: lightGray,
    primary: darkPink,
    secondary: black80,
    muted: gray,
    highlight: opaqueLightYellow,
    heading: grey90,
    prism: {
      background: `#011627`
    },
    modes: {
      dark: {
        text: lightWhite,
        background: blueGray,
        primary: pink,
        secondary: lightWhite,
        muted: opaqueLightWhite,
        highlight: lightblue,
        heading: white
      }
    }
  },
  prism
};
