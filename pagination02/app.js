class Pagination {
  _page = 1;
  _limit = 2;
  _data = [];

  constructor({ page, limit, data }) {
    this._page = page;
    this._limit = limit;
    this._data = data;
    this.initPagination();
  }

  nextPage() {}

  prevPage() {}

  numberPages() {
    return Math.ceil(this._data.length / this._limit);
  }

  initPagination() {
    const pagination__pages = document.querySelector(".pagination__pages");
    pagination__pages.textContent = `${this._page} / ${this.numberPages()} `;
    this.renderPagination();
  }

  generatePagination() {
    let start = this._limit * (this._page - 1);
    let end = start + this._limit;
    let data = this._data.slice(start, end);
    return data;
  }

  renderPagination() {
    let data = this.generatePagination();

    let table = document.querySelector(".table tbody");
    data.forEach(
      (item) =>
        (table.innerHTML += `<tr>
      <td>${item.id}</td>
      <td>${item.name}</td>
      <td>${item.age}</td>
    </tr>`)
    );
  }
}

const pagination = new Pagination({
  page: 1,
  limit: 2,
  data: [
    { id: 1, name: "user 1", age: 11 },
    { id: 2, name: "user 2", age: 12 },
    { id: 3, name: "user 3", age: 13 },
    { id: 4, name: "user 4", age: 14 },
    { id: 5, name: "user 5", age: 15 },
    { id: 6, name: "user 6", age: 16 },
    { id: 7, name: "user 7", age: 17 },
    { id: 8, name: "user 8", age: 18 },
    { id: 9, name: "user 9", age: 19 },
    { id: 10, name: "user 10", age: 20 },
  ],
});
