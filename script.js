const myLibrary = [];
myLibrary.push(new Book("Turbo 3", "Turbo Johnson", 22, true));
display(myLibrary[0]);

myLibrary.push(new Book("Turbo 4", "Turbo Johnson", 12, true));
display(myLibrary[1]);
myLibrary.push(new Book("Turbo 2: The Squeakquel", "Turbo Johnson", 427, true));
display(myLibrary[2]);
myLibrary.push(new Book("Turbo 4: 2", "Turbo Johnson", 697, true));
display(myLibrary[3]);
myLibrary.push(new Book("Turbo 5", "Turbo Johnson", 12, true));
display(myLibrary[4]);
myLibrary.push(new Book("Turbo 4: 2: 2", "Turbo Johnson", 11, true));
display(myLibrary[5]);
myLibrary.push(new Book("Turbo 4: 2: 1.5", "Turbo Johnson", 990, true));
display(myLibrary[6]);
myLibrary.push(new Book("Turbo 2: Reloaded", "Turbo Johnson", 1500, true));
display(myLibrary[7]);
myLibrary.push(new Book("Lord of the Rings: Lord of the Ring: Reloaded", "Turbo Johnson", 1500, true));
display(myLibrary[8]);
myLibrary.push(new Book("Lord of the Rings: Lord of the Ring: Reloaded", "Turbo Johnson", 1500, true));

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function display(book) {
  const card = document.createElement("div"); // create card container
  card.setAttribute("class", "card");
  card.setAttribute("id", myLibrary.indexOf(book));
  const title = document.createElement("div"); // create title container
  title.setAttribute("class", "title");
  const titleText = document.createElement("h3");
  titleText.textContent = book.title;
  title.appendChild(titleText);               // append to title container

  const author = document.createElement("div"); // create author container
  author.setAttribute("class", "author");
  const authorText = document.createElement("h4"); // create Author: element
  authorText.textContent = "Author:";
  const authorName = document.createElement("p"); // create name element
  authorName.textContent = book.author;
  author.appendChild(authorText);
  author.appendChild(authorName);             // append to author container

  const pages = document.createElement("div"); // create pages container
  pages.setAttribute("class", "pages");  
  const pagesText = document.createElement("h4"); // create pages label
  pagesText.textContent = "Pages:";
  const pagesAmt = document.createElement("p"); // create pages value
  pagesAmt.textContent = book.pages;
  pages.appendChild(pagesText); // append to pages container
  pages.appendChild(pagesAmt);

  const removeBtn = document.createElement("button"); // create buttons
  const readBtn = document.createElement("button");
  removeBtn.setAttribute("class", "remove");
  readBtn.setAttribute("class", "read");
  removeBtn.setAttribute("id", myLibrary.indexOf(book)); // set ids to arr index
  readBtn.setAttribute("id", myLibrary.indexOf(book));
  removeBtn.textContent = "Remove";
  readBtn.textContent = "Read";

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(removeBtn);
  card.appendChild(readBtn);

  const cards = document.querySelector(".cards");
  console.log(cards.className);
  cards.appendChild(card);
}