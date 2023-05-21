const w_vals = {
  full: "100%",
  half: "50%",
  min: "min-content",
  fit: "fit-content",
  max: "max-content",
  screen: "100vw"
}
const h_vals = {
  full: "100%",
  half: "50%",
  min: "min-content",
  fit: "fit-content",
  max: "max-content",
  screen: "100vh"
}
const c_vals = {
  c: "center",
  bl: "baseline",
  s: "start",
  e: "end",
  sb: "space-between",
  sa: "space-around",
  se: "space-evenly"
}
const i_vals = {
  c: "center",
  bl: "baseline",
  s: "start",
  e: "end",
  st: "stretch"
}

export default {
  m: {
    prop: "margin:$",
    def: "px"
  },
  my: {
    prop: "margin-top:$;margin-bottom:$",
    def: "px"
  },
  mx: {
    prop: "margin-left:$;margin-right:$",
    def: "px"
  },
  mt: {
    prop: "margin-top:$",
    def: "px"
  },
  mr: {
    prop: "margin-right:$",
    def: "px"
  },
  mb: {
    prop: "margin-bottom:$",
    def: "px"
  },
  ml: {
    prop: "margin-left:$",
    def: "px"
  },
  center: "margin:auto",
  p: {
    prop: "padding:$",
    def: "px"
  },
  py: {
    prop: "padding-top:$;padding-bottom:$",
    def: "px"
  },
  px: {
    prop: "padding-left:$;padding-right:$",
    def: "px"
  },
  pt: {
    prop: "padding-top:$",
    def: "px"
  },
  pr: {
    prop: "padding-right:$",
    def: "px"
  },
  pb: {
    prop: "padding-bottom:$",
    def: "px"
  },
  pl: {
    prop: "padding-left:$",
    def: "px"
  },
  b: {
    prop: "border-width:$",
    def: "px"
  },
  bt: {
    prop: "border-top-width:$",
    def: "px"
  },
  br: {
    prop: "border-right-width:$",
    def: "px"
  },
  bb: {
    prop: "border-bottom-width:$",
    def: "px"
  },
  bl: {
    prop: "border-left-width:$",
    def: "px"
  },
  bc: {
    prop: "border-color:$",
    vals: {
      f: "#fff",
      0: "#000",
      tp: "transparent",
      cc: "currentcolor"
    }
  },
  bs: {
    prop: "border-style:$"
  },
  border: {
    one: "border:1px solid",
    prop: "border:$",
    def: "px"
  },
  outline: {
    prop: "outline:$",
    def: "px"
  },
  fill: {
    prop: "fill:$",
    vals: {
      f: "#fff",
      0: "#000",
      tp: "transparent",
      cc: "currentcolor"
    }
  },
  stroke: {
    prop: "stroke:$",
    vals: {
      f: "#fff",
      0: "#000",
      tp: "transparent",
      cc: "currentcolor"
    }
  },
  unappearance: "appearance:none",
  unapp: "appearance:none",
  scale: {
    prop: "scale:$"
  },
  rotate: {
    prop: "rotate:$",
    def: "deg"
  },
  translate: {
    prop: "translate:$",
    def: "px"
  },
  skew: {
    prop: "transform:skew($)",
    def: "deg",
    join: ",",
    x: {
      prop: "transform:skewX($)",
      def: "deg"
    },
    y: {
      prop: "transform:skewY($)",
      def: "deg"
    }
  },
  flip: {
    one: "scale:-1 -1",
    prop: "scale:$",
    vals: {
      x: "-1 1",
      y: "1 -1"
    }
  },
  tf: {
    prop: "transform:$",
    sc: {
      prop: "transform:scale($)"
    },
    sc3d: {
      prop: "transform:scale3d($)",
      join: ","
    },
    scx: {
      prop: "transform:scaleX($)"
    },
    scy: {
      prop: "transform:scaleY($)"
    },
    scz: {
      prop: "transform:scaleZ($)"
    },
    rt: {
      prop: "transform:rotate($)",
      def: "deg"
    },
    rt3d: {
      prop: "transform:rotate3d($)",
      join: ","
    },
    rtx: {
      prop: "transform:rotateX($)",
      def: "deg"
    },
    rty: {
      prop: "transform:rotateY($)",
      def: "deg"
    },
    rtz: {
      prop: "transform:rotateZ($)",
      def: "deg"
    },
    tl: {
      prop: "transform:translate($)",
      def: "px"
    },
    tl3d: {
      prop: "transform:translate3d($)",
      join: ","
    },
    tlx: {
      prop: "transform:translateX($)",
      def: "px"
    },
    tly: {
      prop: "transform:translateY($)",
      def: "px"
    },
    tlz: {
      prop: "transform:translateZ($)",
      def: "px"
    },
    sk: {
      prop: "transform:skew($)",
      def: "deg",
      join: ","
    },
    skx: {
      prop: "transform:skewX($)",
      def: "deg"
    },
    sky: {
      prop: "transform:skewY($)",
      def: "deg"
    }
  },
  w: {
    prop: "width:$",
    vals: w_vals,
    def: "px"
  },
  h: {
    prop: "height:$",
    vals: h_vals,
    def: "px"
  },
  max: {
    w: {
      prop: "max-width:$",
      vals: w_vals,
      def: "px"
    },
    h: {
      prop: "max-height:$",
      vals: h_vals,
      def: "px"
    }
  },
  min: {
    w: {
      prop: "min-width:$",
      vals: w_vals,
      def: "px"
    },
    h: {
      prop: "min-height:$",
      vals: h_vals,
      def: "px"
    }
  },
  minW: {
    prop: "min-width:$",
    vals: w_vals,
    def: "px"
  },
  minH: {
    prop: "min-height:$",
    vals: h_vals,
    def: "px"
  },
  maxW: {
    prop: "max-width:$",
    vals: w_vals,
    def: "px"
  },
  maxH: {
    prop: "max-height:$",
    vals: h_vals,
    def: "px"
  },
  d: {
    prop: "display:$",
    vals: {
      inblock: "inline-block",
      inflex:  "inline-flex",
      ingrid:  "inline-grid"
    }
  },
  inline: "display:inline",
  block: "display:block",
  inblock: "display:inline-block",
  inflex: "display:inline-flex",
  ingrid: "display:inline-grid",
  hide: "display:none",
  upper: "text-transform:uppercase",
  uppercase: "text-transform:uppercase",
  lower: "text-transform:lowercase",
  lowercase: "text-transform:lowercase",
  capit: "text-transform:capitalize",
  capitalize: "text-transform:capitalize",
  pos: {
    prop: "position:$"
  },
  abs: "position:absolute",
  absolute: "position:absolute",
  rel: "position:relative",
  relative: "position:relative",
  sticky: "position:sticky",
  fixed: "position:fixed",
  r: {
    prop: "border-radius:$",
    def: "px"
  },
  round: {
    one: "border-radius:9999px",
    prop: "border-radius:$",
    def: "px"
  },
  sharp: "border-radius:0",
  transition: {
    prop: "transition:$",
    def: "ms"
  },
  time: {
    prop: "transition:$",
    def: "ms"
  },
  select: {
    prop: "user-select:$"
  },
  fit: {
    prop: "object-fit:$"
  },
  bg: {
    prop: "background:$",
    tp: "background-color:transparent",
    cc: "background-color:currentcolor",
    f: "background-color:#fff",
    0: "background-color:#000",
    fixed: "background-attachment:fixed",
    local: "background-attachment:local",
    scroll: "background-attachment:scroll",
    clip: {
      border: "background-clip:border-box",
      padding: "background-clip:padding-box",
      content: "background-clip:content-box",
      text: "background-clip:text",
    },
    origin: {
      border: "background-origin:border-box",
      padding: "background-origin:padding-box",
      content: "background-origin:content-box"
    }
  },
  bgp: {
    prop:"background-position:$",
    x: { prop:"background-position-x:$" },
    y: { prop:"background-position-y:$" }
  },
  c: {
    prop: "color:$",
    vals: {
      f: "#fff",
      0: "#000",
      tp: "transparent",
      cc: "currentcolor",
      
    },
    
  },
  accent: {
    prop: "accent-color:$",
    vals: {
      f: "#fff",
      0: "#000",
      tp: "transparent",
      cc: "currentcolor"
    }
  },
  caret: {
    prop: "caret-color:$",
    vals: {
      f: "#fff",
      0: "#000",
      tp: "transparent",
      cc: "currentcolor"
    }
  },
  over: {
    prop: "overflow:$",
    x: {
      prop: "overflow-x:$"
    },
    y: {
      prop: "overflow-y:$"
    }
  },
  snap: {
    x: "scroll-snap-type:x mandatory",
    y: "scroll-snap-type:y mandatory",
    start: "scroll-snap-align:start",
    center: "scroll-snap-align:center",
    end: "scroll-snap-align:end",
    stop: "scroll-snap-stop: always"
  },
  shadow: {
    box: {
      prop: "box-shadow:$",
      one: "box-shadow:3px 4px 3px #0000004d",
      def: "px"
    },
    text: {
      prop: "text-shadow:$",
      one: "text-shadow:3px 4px 3px #0000004d",
      def: "px"
    }
  },
  cursor: {
    prop: "cursor:$"
  },
  resize: {
    prop: "resize:$",
    vals: {
      x: "horizontal",
      y: "vertical"
    }
  },
  top: {
    prop: "top:$",
    def: "px"
  },
  right: {
    prop: "right:$",
    def: "px"
  },
  bottom: {
    prop: "bottom:$",
    def: "px"
  },
  left: {
    prop: "left:$",
    def: "px"
  },
  ratio: {
    prop: ({val}) => `aspect-ratio:${val}`,
    vals: {
      sqr: "1 / 1",
      vid: "16 / 9"
    }
  },
  box: {
    prop: "box-sizing:$",
    vals: {
      content: "content-box",
      border: "border-box"
    }
  },
  float: {
    prop: "float:$"
  },
  clear: {
    prop: "clear:$",
    vals: {
      x: "horizontal",
      y: "vertical"
    }
  },
  z: {
    prop: "z-index:$"
  },
  visible:"visibility:visible",
  invisible: "visibility:hidden",
  collapse: "visibility:collapse",
  opacity: {
    prop: "opacity:$"
  },
  blend: {
    prop: "mix-blend-mode:$"
  },
  hue: {
    prop: "filter:hue-rotate($)",
    def: "deg"
  },
  invert: {
    one: "filter:invert(1)",
    prop: "filter:invert($)"
  },
  blur: {
    prop: "filter:blur($)",
    def: "px"
  },
  brightness: {
    prop: "filter:brightness($)"
  },
  contrast: {
    prop: "filter:contrast($)"
  },
  saturate: {
    prop: "filter:saturate($)"
  },
  contrast: {
    prop: "filter:contrast($)"
  },
  grayscale: {
    prop: "filter:grayscale($)",
    def: "%"
  },
  sepia: {
    prop: "filter:sepia($)",
    def: "%"
  },
  pointer: "cursor:pointer",
  ws: {
    prop: "white-space:$"
  },
  space: {
    prop: "white-space:$"
  },
  list: {
    prop: "list-style:$"
  },
  spacing:{
    prop:'letter-spacing:$',
    def:'px'
  },
  fs: {
    prop: "font-size:$",
    def: "px"
  },
  fsz: {
    prop: "font-size:$",
    def: "px"
  },
  fst: {
    prop: "font-style:$"
  },
  fw: {
    prop: "font-weight:$"
  },
  light:"font-weight:300",
  regular:"font-weight:400",
  medium: "font-weight:500",
  semibold: "font-weight:600",
  bold: "font-weight:700",
  extrabold: "font-weight:800",
  fv: {
    prop: "font-variant:$"
  },
  ff: {
    prop: "font-family:$",
    vals: {
      sans: "var(--font-sans)",
      serif: "var(--font-serif)",
      mono: "var(--font-mono)"
    }
  },
  lh: {
    prop: "line-height:$"
  },
  ta: {
    prop: "text-align:$"
  },
  td: {
    prop: "text-decoration:$",
    vals: {
      line: "underline"
    },
    def: "px"
  },
  wb: {
    prop: "word-break:$",
    vals: {
      all: "break-all",
      keep: "keep-all"
    }
  },
  break: {
    prop: "word-break:$",
    vals: {
      all: "break-all",
      keep: "keep-all"
    }
  },
  grad: {
    prop: "background:linear-gradient($)",
    def: "deg",
    join: ","
  },
  fullscreen: "position:absolute;left:0;top:0;width:100%;height:100%",
  flex: {
    one: "display:flex",
    prop:"flex:$",
    center: "justify-content:center;align-items:center",
    col:{
      one:"flex-direction:column",
      rev:"flex-direction:column-reverse"
    },
    row:{
      one: "flex-direction:row",
      rev: "flex-direction:row-reverse",
    },
    space: "justify-content:space-between;align-items:center",
    wrap:{
      one: "flex-wrap:wrap",
      rev: "flex-wrap:wrap-reverse",
    },
    nowrap: "flex-wrap:nowrap",
    stretch: "align-items:stretch"

  },
  col: {
    one: "flex-direction:column",
    rev: "flex-direction:column-reverse"
  },
  row: {
    one: "flex-direction:row",
    rev: "flex-direction:row-reverse"
  },
  gap: {
    prop: "gap:$",
    def: "px",
    x: {
      prop: "column-gap:$",
      def: "px"
    },
    y: {
      prop: "row-gap:$",
      def: "px"
    }
  },
  jc: {
    prop: "justify-content:$",
    vals: c_vals
  },
  ji: {
    prop: "justify-items:$",
    vals: i_vals
  },
  ac: {
    prop: "align-content:$",
    vals: c_vals
  },
  ai: {
    prop: "align-items:$",
    vals: i_vals
  },
  order: {
    prop: "order:$"
  },
  basis: {
    prop: "flex-basis:$"
  },
  grow: {
    one: "flex-grow:1",
    prop: "flex-grow:$"
  },
  shrink: {
    one: "flex-shrink:1",
    prop: "flex-shrink:$"
  },
  grid: {
    one: "display:grid",
    cols: {
      prop: "grid-template-columns:repeat($,1fr)"
    },
    rows: {
      prop: "grid-template-rows:repeat($,1fr)"
    }
  }
};