const addClasses = (item) => {
  let classes = [];

  switch (item.nodeName) {
    case 'NAV':
      classes = ["text-zinc-50", "bg-zinc-900", "mb-9"];
      break;
    case 'UL':
      classes = ["flex", "text-2xl", "flex-row", "justify-center", "gap-3", "p-5"];
      break;
    case 'MAIN':
      classes = ['p-8', 'mb-10', 'grid', 'grid-flow-row', 'gap-8', 'justify-center', 'bg-zinc-900', 'text-zinc-50', 'border-purple-700', 'border-2'];
      break;
    case 'H1':
      classes = ['m-auto', 'italic', 'bg-purple-700', 'p-5', 'pb-2', 'pr-7', 'border-zinc-50', 'border-4'];
      break;
  }

  classes.forEach((cls) => {
    item.classList.add(cls);
  });
}

export default addClasses;