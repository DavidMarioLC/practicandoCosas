import { render } from "./lib/react-dom.js";
import User from "./components/user.js";
import App from "./components/app.js";
const root = document.querySelector("#root");

render(new App(), root);
