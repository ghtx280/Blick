import blick from "../blick-obj.js";

export default function(obj, path) {
  let parts = path.split("-");
  let value = obj || blick.class;
  let prop
  let prevProp

  for (const i in parts) {
    const part = parts[i];
    value = value[part]

    if (!value) {
      let val = parts.slice(i).join("-");
      return { p: prop, v: val, s: prevProp } 
    }

    prevProp = prop
    prop = value
  }
  return { p: prop, v: false };
}