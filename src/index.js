import React from "react";
import ReactDom from "react-dom";
import App from "./App";

ReactDom.render(<App city="Lisbon" />, document.querySelector("#lisbon"));

//input data to the app (instead of form), we can manipulate it

/*ReactDom.render(
  <App city="Filipova Hora" />,
  document.querySelector("#filipovahora")
);  */
