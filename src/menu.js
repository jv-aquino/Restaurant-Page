import addClasses from "./cssClasses.js";

const createMenu = () => {
  const main = document.createElement('main');
  addClasses(main);



  return main;
};

export default createMenu;