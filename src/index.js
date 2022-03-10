import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Counter from "./counter";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Counter />
  </StrictMode>,
  rootElement
);
