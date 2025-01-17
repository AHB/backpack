import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M9.596 1.949a1.5 1.5 0 0 1 2.12 0l8.47 8.469a2.25 2.25 0 0 1 0 3.182l-8.47 8.47a1.5 1.5 0 0 1-2.12-2.122l7.938-7.94-7.94-7.94a1.5 1.5 0 0 1 0-2.12z" /><path d="M3.596 4.949a1.5 1.5 0 0 1 2.12 0l5.683 5.68a1.95 1.95 0 0 1 0 2.758L5.716 19.07a1.5 1.5 0 0 1-2.122-2.122l4.942-4.938-4.94-4.94a1.5 1.5 0 0 1 0-2.12z" /></svg>);