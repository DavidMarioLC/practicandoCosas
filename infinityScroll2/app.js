class InfinityScroll {
  _galery = null;
  _items = 15;

  constructor() {
    this._galery = document.querySelector(".galery");
    this.generateRender();
    window.addEventListener("scroll", this.generateScroll.bind(this));
  }

  async generateRender() {
    for (let index = 0; index < this._items; index++) {
      let image = await this.fetchImages();
      this._galery.innerHTML += `<div class="galery__image">
      <img width='200' height='200' src='${image}' alt="Placeholder Puppy" />
    </div>`;
    }
  }

  generateScroll() {
    let sizeTotalViewportinVertical = document.body.scrollHeight;
    let sizeViewUser = window.innerHeight;
    let sizeScrollInY = window.scrollY;
    let isMayor = sizeViewUser + sizeScrollInY >= sizeTotalViewportinVertical;

    if (isMayor) {
      this.generateRender();
    }
  }

  async fetchImages() {
    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    let { message: images } = await response.json();
    return images;
  }
}

const infinity = new InfinityScroll();
