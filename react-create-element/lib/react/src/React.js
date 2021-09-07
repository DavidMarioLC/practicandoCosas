class Component {
  constructor(props = {}, state = {}) {
    this.props = props;
    this.state = state;
  }

  #updater() {
    this.render();
  }

  setSate(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };

    this.#updater();
  }
}

export { Component };
