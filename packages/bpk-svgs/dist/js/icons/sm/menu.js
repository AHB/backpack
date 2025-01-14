import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M21 6H3a1.417 1.417 0 0 1-1.5-1.5A1.417 1.417 0 0 1 3 3h18a1.417 1.417 0 0 1 1.5 1.5A1.417 1.417 0 0 1 21 6zm-6 6c0-.9-.5-1.5-1.25-1.5h-11c-.75 0-1.25.6-1.25 1.5s.5 1.5 1.25 1.5h11c.75 0 1.25-.6 1.25-1.5zm5.833 6a1.508 1.508 0 1 1 0 3H3.167a1.508 1.508 0 1 1 0-3z" /></svg>);