import { Component } from "../lib/react.js";

class Wrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children } = this.props;

    return `
    <div class="wrapper">
          ${children}
    </div>
    `;
  }
}

export default Wrapper;
