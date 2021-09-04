const $flavors = document.querySelectorAll(".flavor");

function selectFlavor() {
  this.classList.toggle("is-active");
}

window.btn.addEventListener("click", () => {
  console.log($flavors);
  $flavors.forEach((flavor) => flavor.addEventListener("click", selectFlavor));
});
