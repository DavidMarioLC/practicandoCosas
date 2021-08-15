const container = document.querySelector(".container");
console.log(window);
const URL = "https://dog.ceo/api/breeds/image/random";

// get the images

function loadImages(numImages = 10) {
  let i = 0;
  while (i < numImages) {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.message)
        const img = document.createElement("img");
        img.src = `${data.message}`;
        container.appendChild(img);
      });
    i++;
  }
}

loadImages();

// listen for scroll event and load more images if we reach the bottom of window
window.addEventListener("scroll", () => {
  console.log(window);
  console.log("SCROLL Y: ", window.scrollY);
  console.log("INNER HEIGHT: ", window.innerHeight);
  console.log("SCROLL HEIGHT: ", document.body.scrollHeight);
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loadImages();
  }
});
