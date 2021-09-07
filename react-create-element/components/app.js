import { Component, createElement } from "../lib/react/index.js";
import User from "./user.js";
import Wrapper from "./wrapper.js";

// import UserStyled from "./user-styled.js";

const element = createElement(
  "h1",
  {
    class: "title",
  },
  "Hola mundo desde create element"
);

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return createElement(
      "div",
      {
        class: "app",
        children: new Wrapper({
          children: [
            new User({
              name: "Ash",
              avatar: "./images/ash.png",
              age: 10,
            }),
          ],
        }),
      },
      "Esta es la app"
    );
  }
}

export default App;
