import addClasses from "./cssClasses.js";

const createContact = () => {
  const main = document.createElement('main');
  addClasses(main);
  main.classList.add("contact");

  const h1 = document.createElement('h1');
  h1.textContent = "Contact Us";
  addClasses(h1);
  main.appendChild(h1);

  const p1 = document.createElement('p');
  p1.textContent = "You can contact us during any opening hours (see the Home section). We will be more than happy to help you or deliver our delicious pizzas to you."
  main.appendChild(p1);

  const p2 = document.createElement('p');
  p2.innerHTML = "Our number is <b>(085) 777-666</b>"
  main.appendChild(p2);

  return main;
};

export default createContact;