import React, { useState } from "react";

function useHover() {
  let [hovering, setHovering] = useState(false);

  let onMouseOver = () => setHovering(true);
  let onMouseOut = () => setHovering(false);

  let attrs = { onMouseOver, onMouseOut };

  return [hovering, attrs];
}

export default useHover;
