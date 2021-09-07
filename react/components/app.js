import { Component } from "../lib/react.js";
import User from "./user.js";
import Wrapper from "./wrapper.js";

import UserStyled from "./user-styled.js";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return `
      <div class="app">
      ${new Wrapper({
        children: ` 
        ${new User({
          name: "Ash",
          avatar: "./images/ash.png",
        }).render()}
        ${new UserStyled({
          name: "Ash",
          avatar: "./images/ash.png",
        }).render()}
        `,
      }).render()}
       
       
      </div>
    `;
  }
}

export default App;
