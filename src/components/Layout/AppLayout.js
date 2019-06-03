import * as React from "react";
import { injectGlobal } from "styled-components";
import reset from "styled-reset";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const baseStyles = () => injectGlobal`
  ${reset}
  html {
    height: 100vh
    width: 100vw
  }
`;

export default ({ children }) => {
  baseStyles();
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable
        pauseOnHover={false}
      />
      <div>{children}</div>
    </div>
  );
};
