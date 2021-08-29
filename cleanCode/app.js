const button = document.querySelector("button");

function handlerButton(e) {
  const button = e.currentTarget;
  const card = button.closest(".card");
  const title = card.querySelector(".title");
  console.log(card);
}

button.addEventListener("click", handlerButton);
