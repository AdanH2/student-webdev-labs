const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((book) => {
        const year = new Date(book.released).getFullYear();
        const bookElement = document.createElement("div");
        bookElement.className = "text-center";
        bookElement.innerHTML = `
          <h4>${book.name}</h4>
          <p>by ${book.authors.join(", ")}</p>
          <p>${year}</p>
          <p>${book.numberOfPages} pages</p>
        `;
        app.appendChild(bookElement);
      });
      const loading = document.querySelector("#loading");
      loading.style.display = "none";
    });
};

fetchData(url);
