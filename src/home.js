import addClasses from "./cssClasses.js";

const createHome = () => {
  const main = document.createElement('main');
  addClasses(main);

  const h1 = document.createElement('h1');
  h1.textContent = "085 Pizzeria";
  addClasses(h1);

  main.appendChild(h1);

  const h2Content = ["The best pizza in Cogulandia", "Hours", "Location"];
  const hoursTableContent = ["Monday: 7pm - 10pm", "Tuesday: 7pm - 10pm", "Wednesday: 7pm - 10pm", "Thursday: 6:30pm - 10pm", "Friday: 6:30pm - 11pm", "Saturday: 6:30pm - 11pm", "Sunday: 6:30pm - 10pm"];

  h2Content.forEach((content, index) => {
    const section = document.createElement('section');
    const h2 = document.createElement('h2');
    const ul = document.createElement('ul');
    const p = document.createElement('p');

    h2.textContent = content;
    section.appendChild(h2);

    switch(index) {
      case 0:
        p.innerHTML = "Our goal is to serve good and affordable pizza and pasta. We make fresh dough and sauces so you can enjoy the true <em>pizza e pasta italiane</em>. If you love italian cuisine, this place is for you!";

        section.appendChild(p);
        break;
      case 1:
        hoursTableContent.forEach((liContent, index) => {
          const li = document.createElement('li');
          li.textContent = liContent;

          ul.appendChild(li);
        });

        section.appendChild(ul);
        break;
      case 2:
        p.textContent = "085 Vem Chapar, Cogulandia, Brazil";

        section.appendChild(p);
        break;
    }

    main.appendChild(section);
  });

  return main;
};

export default createHome;