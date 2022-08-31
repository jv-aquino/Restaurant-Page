import createNav from "./nav.js";
import createHome from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";

const contentDiv = document.querySelector('#content');
let homeButton, menuButton, contactButton;

const loadNewPage = (section) => {
  let page;

  switch(section) {
    case "home":
      page = createHome();
      break;

    case "menu":
      page = createMenu();
      break;

    case "contact":
      page = createContact();
      break;
  }

  contentDiv.appendChild(page);
}

const firstPageLoad = () => {
  const nav = createNav();
  contentDiv.appendChild(nav);

  loadNewPage('home');

  activateButtons();
}

const changePage = (e) => {
  let page = e.target.id;
  contentDiv.removeChild(contentDiv.lastChild);
  loadNewPage(page);
};

const activateButtons = () => {
  homeButton = document.querySelector('#home');
  menuButton = document.querySelector('#menu');
  contactButton = document.querySelector('#contact');

  homeButton.addEventListener('click', changePage);
  menuButton.addEventListener('click', changePage);
  contactButton.addEventListener('click', changePage);
};

firstPageLoad();