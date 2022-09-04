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

      resetButtonsColor();
      homeButton.classList.add('selected');

      break;

    case "menu":
      page = createMenu();

      resetButtonsColor();
      menuButton.classList.add('selected');

      break;

    case "contact":
      page = createContact();

      resetButtonsColor();
      contactButton.classList.add('selected');
      
      break;
  }

  contentDiv.appendChild(page);
}

const firstPageLoad = () => {
  const nav = createNav();
  contentDiv.appendChild(nav);

  activateButtons();
  resetButtonsColor();
  homeButton.classList.add("selected");

  loadNewPage('home');
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

const resetButtonsColor = () => {
  homeButton.classList.remove('selected');
  menuButton.classList.remove('selected');
  contactButton.classList.remove('selected');
}

firstPageLoad();