const header = document.querySelector(".header");
const sections = document.querySelectorAll(".section");

const option = {
  // root,
  rootMargin: "-80px 0px 0px 0px",
  // threshold: 0.5,
};
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("se intercepto");
      header.style.background = "red";
    } else {
      header.style.background = "purple";
      console.log("no se intercepto");
    }
  });
};

const ob = new IntersectionObserver(callback, option);

sections.forEach((section) => ob.observe(section));
