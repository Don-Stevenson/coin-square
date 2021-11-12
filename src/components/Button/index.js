import React, { useEffect } from "react";
import "./style.css";

// set URL to empty string
let URL = "";

// function that opens window with the link returned bellow
const handleSubmit = (e) => {
  e.preventDefault();
  window.open(URL);
};

// button function with props destructured
function Button({ children }) {

  // use the useEffect call to fetch data from serverless function
  useEffect(() => {
    fetch("/.netlify/functions/quicktrade")
      .then((response) => response.json())
      // update URL from the returned json
      .then((data) => (URL = data.msg));
  }, []);

  // button call to handleSubmit on submit
  return (
    <form onSubmit={handleSubmit}>
      <button className="button" type="submit">
        {children}
      </button>
    </form>
  );
}
export default Button;
