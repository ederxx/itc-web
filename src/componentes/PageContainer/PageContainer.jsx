import React from "react";
import "./Pagecontainer.css";

function PageContainer({ children }) {
  return (
    <div className="page-container">
      {children}
    </div>
  );
}

export default PageContainer;
