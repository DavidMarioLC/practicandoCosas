const table = document.querySelector(".table");
const list = document.querySelector(".list");
const prev = document.querySelector(".pagination__button--prev");
const next = document.querySelector(".pagination__button--next");
const currentPage = document.querySelector(".current-page");
const user_for_page = 2;
let pageInitial = 1;
let data = [
  { name: "user 1" },
  { name: "user 2" },
  { name: "user 3" },
  { name: "user 4" },
  { name: "user 5" },
  { name: "user 6" },
  { name: "user 7" },
  { name: "user 8" },
  { name: "user 9" },
  { name: "user 10" },
  { name: "user 11" },
  { name: "user 12" },
  { name: "user 13" },
  { name: "user 14" },
  { name: "user 15" },
  { name: "user 16" },
  { name: "user 17" },
  { name: "user 18" },
  { name: "user 19" },
  // { name: "user 20" },
];

function prevPage() {
  pageInitial--;
  initPagination(pageInitial, data);
}

function nextPage() {
  pageInitial++;
  initPagination(pageInitial, data);
}

//calculando el numero de paginas
function numberPages() {
  return Math.ceil(data.length / user_for_page);
}

function initPagination(page, users) {
  list.innerHTML = "";
  currentPage.innerHTML = `${page} - ${numberPages()}`;

  let start = user_for_page * (page - 1);
  let end = user_for_page + start;
  let newUsers = users.slice(start, end);

  //CREA LOS ELEMENTOS LI
  for (let index = 0; index < newUsers.length; index++) {
    const item = document.createElement("li");
    item.textContent = newUsers[index].name;
    list.appendChild(item);
  }

  //NEXT
  if (page === numberPages()) {
    next.style.visibility = "hidden";
  } else if (page === 1) {
    prev.style.visibility = "hidden";
  } else {
    prev.style.visibility = "visible";
    next.style.visibility = "visible";
  }

  //PREV
}

next.addEventListener("click", nextPage);
prev.addEventListener("click", prevPage);

window.onload = function () {
  initPagination(pageInitial, data);
};
