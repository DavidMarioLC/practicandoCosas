import { render } from "../../react-dom.js";

function renderChildren(children, container) {
  if (Array.isArray(children)) {
    return children.forEach((child) => render(child, container));
  }

  return render(children, container);
}

function setEvents(element, event, callback) {
  return element.addEventListener(event, callback);
}

function setProperties(prop, value, element) {
  //support event handlers
  if (prop.startsWith("on")) {
    const event = prop.replace("on", "").toLowerCase();
    return setEvents(element, event, value);
  }

  //support for children
  if (prop === "children") {
    renderChildren(value, element);
  }

  //supports for attributes
  const attribute = value;
  return element.setAttribute(prop, attribute);
}

export function createElement(type, props, content) {
  //creando type element
  const element = document.createElement(type);

  //contenido
  if (element) {
    element.textContent = content;
  }

  //propiedades
  if (props) {
    Object.keys(props).forEach((prop) =>
      setProperties(prop, props[prop], element)
    );
  }

  return element;
}
