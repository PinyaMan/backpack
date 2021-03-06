import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M12 12c1.5 0 3-.8 3-2.378V4.6a1.179 1.179 0 0 0-.608-1.102A5.619 5.619 0 0 0 12 3a5.833 5.833 0 0 0-2.428.499A1.13 1.13 0 0 0 9 4.568v5.054C9 11.2 10.5 12 12 12zm-1-3h2v.028a1 1 0 0 1-2 0zm7.988 6.6a17.328 17.328 0 0 0-7.016-1.6 16.866 16.866 0 0 0-6.982 1.598A1.77 1.77 0 0 0 4 17.232v.995A2.951 2.951 0 0 0 7.045 21h10.182A2.712 2.712 0 0 0 20 18.227v-.977a1.784 1.784 0 0 0-1.012-1.65z" /></svg>);