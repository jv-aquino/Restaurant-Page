import addClasses from "./cssClasses.js";

const createContact = () => {
  const main = document.createElement('main');
  addClasses(main);



  return main;
};

export default createContact;