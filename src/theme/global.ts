const global = {
  "html, body": {
    overscrollBehavior: "none"
  },
  body: {
    overflowY: "scroll"
  },
  "*, *::before, *::after": {
    WebkitTapHighlightColor: "rgba(1, 1, 88, 0.1)"
  },
  "#nprogress .bar": {
    background: "#010158",
    height: { base: "3px", md: "6px" }
  },
  "#nprogress .peg": {
    display: "none"
  },
  "@font-face": [
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 500,
      src: `url("/fonts/inter/medium.woff2") format("woff2")`
    },
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 600,
      src: `url("/fonts/inter/semibold.woff2") format("woff2")`
    },
    {
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 700,
      src: `url("/fonts/inter/bold.woff2") format("woff2")`
    },
    {
      fontFamily: "Noto Sans JP",
      fontStyle: "normal",
      fontWeight: 500,
      src: `url("/fonts/noto-sans-jp/medium.woff2") format("woff2")`
    },
    {
      fontFamily: "Noto Sans JP",
      fontStyle: "normal",
      fontWeight: 600,
      src: `url("/fonts/noto-sans-jp/semibold.woff2") format("woff2")`
    },
    {
      fontFamily: "Noto Sans JP",
      fontStyle: "normal",
      fontWeight: 700,
      src: `url("/fonts/noto-sans-jp/bold.woff2") format("woff2")`
    }
  ]
};

export default global;
