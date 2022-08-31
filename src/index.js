import createNav from "./nav.js";
import createHome from "./home.js";

const contentDiv = document.querySelector('#content');

const loadHomePage = () => {
  const homeMain = createHome();
  contentDiv.appendChild(homeMain);
}

const firstPageLoad = () => {
  const nav = createNav();
  contentDiv.appendChild(nav);

  loadHomePage();
}

firstPageLoad();