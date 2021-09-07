"use strict";
import { Component, createElement } from "../lib/react/index.js";

class User extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    age: this.props.age,
  };
  handleClick = (e) => {
    console.log(this.state.age);
    this.setSate({
      age: this.state.age + 1,
    });
  };

  render() {
    const { avatar, name } = this.props;
    const { age } = this.state;
    return createElement("div", {
      onClick: this.handleClick,
      class: "user",
      children: [
        createElement("div", {
          class: "avatar",
          children: createElement("img", {
            src: avatar,
          }),
        }),
        createElement("h2", null, `Hola soy ${name} y tengo ${age}`),
      ],
    });
  }
}

export default User;
