const addClasses = (item) => {
  let classes = [];

  switch (item.nodeName) {
    case 'NAV':
      classes = ["text-zinc-50", "bg-zinc-900", "mb-9"];
      break;
    case 'UL':
      classes = ["flex", "text-2xl", "flex-row", "justify-center", "gap-3", "p-5"];
      break;
  }

  classes.forEach((cls) => {
    item.classList.add(cls);
  });
}

export default addClasses;