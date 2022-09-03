import addClasses from "./cssClasses.js";

const createMenu = () => {
  const main = document.createElement('main');
  addClasses(main);

  const h1 = document.createElement('h1');
  h1.textContent = "Menu";
  addClasses(h1);

  main.appendChild(h1);

  const pizzas = ['Margherita', 'Italian-Tuna', 'Pepperoni', 'Quattro-Formaggi', 'Hawaiian', 'Capricciosa', 'Pepper-and-Ham', 'Frutti-di-Mare'];
  const pizzaGrid = document.createElement("div");
  pizzaGrid.classList.add('pizzaGrid');

  pizzas.forEach(pizza => {
    const divPizza = document.createElement('div');

    let pizzaTitle = document.createElement('h2');
    pizzaTitle.textContent = pizza.replace("-", " ");

    let pizzaImg = document.createElement('img');
    pizzaImg.src = "./img/" + pizza.toLowerCase() + ".png";

    divPizza.appendChild(pizzaImg);
    divPizza.appendChild(pizzaTitle);

    pizzaGrid.appendChild(divPizza);
  });

  main.appendChild(pizzaGrid);
  return main;
};

export default createMenu;