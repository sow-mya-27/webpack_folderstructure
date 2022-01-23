import React from "react";
import ReactDOM from "react-dom";

const App = () => (
  <h1>My React and TypeScript App!</h1>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// https://www.carlrippon.com/creating-react-app-with-typescript-eslint-with-webpack5/
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/27570