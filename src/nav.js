import addClasses from "./cssClasses.js";

const createNav = () => {
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const items = ["Home", "Menu", "Contact"];

  items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    
    ul.appendChild(li);
  });

  addClasses(ul);

  addClasses(nav);
  nav.appendChild(ul);
  
  return nav;
};

export default createNav;