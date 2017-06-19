import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M20.706 7.529l-.333-1.667a3 3 0 0 0-2.215-2.322A18.071 18.071 0 0 0 13.775 3h-3.551a18.071 18.071 0 0 0-4.383.539 3 3 0 0 0-2.213 2.323l-.334 1.667a15.148 15.148 0 0 0 0 5.942l.333 1.667a3 3 0 0 0 2.215 2.322 18.076 18.076 0 0 0 2.158.4v2.62a.545.545 0 0 0 .7.5A8.133 8.133 0 0 0 12.684 18h1.091a18.071 18.071 0 0 0 4.383-.54 3 3 0 0 0 2.214-2.322l.333-1.667a15.148 15.148 0 0 0 0-5.942z" /><path d="M12 13.135a1.01 1.01 0 0 1 .728.263.951.951 0 0 1 0 1.339 1.13 1.13 0 0 1-1.449 0 .882.882 0 0 1-.279-.666.891.891 0 0 1 .276-.669 1 1 0 0 1 .724-.267zm.743-.966h-1.489L11.043 6h1.907z" /></svg>;
  }

}