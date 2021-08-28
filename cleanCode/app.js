document.addEventListener(
  "click",
  function (e) {
    console.log("soy el documento el padre de div y button");
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(this);
  },
  { capture: true }
);

document.querySelector("#mi_div").addEventListener(
  "click",
  function (e) {
    console.log("soy el div padre de los botones");
  },
  { capture: true }
);

document.querySelector("#mi_boton_1").addEventListener(
  "click",
  function (e) {
    console.log("soy el boton 1");
  },
  { capture: true }
);

document.querySelector("#mi_boton_2").addEventListener(
  "click",
  function (e) {
    console.log("soy el boton 2");
  },
  { capture: true }
);
