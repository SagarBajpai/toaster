import React from "react";
import "./Toaster.scss";
import CrossButton from "../../Utils/CrossButton";
import { ToasterCreator, closeToaster } from "../../Common/ToasterCreator";

//type = ['success', 'error']

const setHeaderColor = type => {
  if (type === "error") {
    return {
      header: {
        borderBottom: "1px solid rgb(204, 0, 0)",
        background: "rgb(204, 0, 0)"
      }
    };
  } else {
    return {
      header: {
        borderBottom: "1px solid green",
        background: "green"
      }
    };
  }
};

const Toaster = React.memo(({ isVisible, header, message, onClick, type }) => {
  const style = setHeaderColor(type);
  return (
    <div id="Toaster" style={{ display: isVisible ? "block" : "none" }}>
      <header style={style.header}>
        <span>{header}</span>
        <CrossButton onClick={onClick} />
      </header>
      <main>{message}</main>
    </div>
  );
});

Toaster.defaultProps = {
  isVisible: true,
  header: "Error",
  message: "Something went wrong."
};

export default Toaster;
export { ToasterCreator, closeToaster };
