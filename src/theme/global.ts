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
  }
};

export default global;
