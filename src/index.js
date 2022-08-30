import createNav from "./nav.js";

const contentDiv = document.querySelector('#content');

const firstPageLoad = () => {
  const nav = createNav();
  contentDiv.appendChild(nav);
}

firstPageLoad();