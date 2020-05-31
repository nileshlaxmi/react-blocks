import React from "react";
import { render } from "react-dom";
import { TextAreaBox } from "./lib";

const App = () => <TextAreaBox />;

render(<App />, document.getElementById("root"));
