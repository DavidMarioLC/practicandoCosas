"use strict";
import { Component } from "../lib/react.js";

class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { avatar, name } = this.props;

    return `
    <div class="user">
      <div class="avatar">
        <img src="${avatar}" alt="">
        <h2>${name}</h2>
      </div>
    </div>

    `;
  }
}

export default User;
