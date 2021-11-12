import React, { useEffect } from "react";
import "./style.css";

let URL = "";

const handleSubmit = (e) => {
  e.preventDefault();
  window.open(URL);
};

function Button({ children }) {
  useEffect(() => {
    fetch("/.netlify/functions/quicktrade")
      .then((response) => response.json())
      .then((data) => (URL = data.msg));
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <button className="button" type="submit">
        {children}
      </button>
    </form>
  );
}
export default Button;
