const menu = [
  {
    name: "Home",
    link: "/",
    items: [],
  },
  {
    name: "About",
    link: "/about",
    items: [],
  },
  {
    name: "Products",
    link: "/products",
    items: [
      {
        name: "Product 1",
        link: "/products/1",
        items: [],
      },
      {
        name: "Product 2",
        link: "/products/2",
        items: [
          {
            name: "Product 2.1",
            link: "/products/2/1",
            items: [],
          },
        ],
      },
    ],
  },
  {
    name: "Services",
    link: "/services",
    items: [
      {
        name: "Service 1",
        link: "/services/1",
        items: [
          {
            name: "Service 1.1",
            link: "/services/1/1",
            items: [],
          },
        ],
      },
      {
        name: "Service 2",
        link: "/services/2",
        items: [
          {
            name: "Service 2.1",
            link: "/services/2/1",
            items: [],
          },
          {
            name: "Service 2.2",
            link: "/services/2/2",
            items: [],
          },
        ],
      },
    ],
  },
];
const section = document.querySelector(".container-list");

function createSubMenu(item) {
  const li = document.createElement("li");
  li.textContent = item.name;
  return li;
}

function createMenu(menuObject) {
  const ul = document.createElement("ul");
  for (let i = 0; i < menuObject.length; i++) {
    const item = menuObject[i];
    const li = createSubMenu(item);
    ul.appendChild(li);
    // Si tiene items crear un submenu con la misma estructura HTML
    if (item.items.length > 0) {
      const subUl = document.createElement("ul");
      const subLi = document.createElement("li");
      subLi.appendChild(subUl);
      li.appendChild(subLi);
      for (let j = 0; j < item.items.length; j++) {
        const subItem = item.items[j];
        const subLi2 = createSubMenu(subItem);
        subUl.appendChild(subLi2);
        if (subItem.items.length > 0) {
          const subSubUl = document.createElement("ul");
          const subSubLi = document.createElement("li");
          subSubLi.appendChild(subSubUl);
          subLi2.appendChild(subSubLi);
          for (let k = 0; k < subItem.items.length; k++) {
            const subSubItem = subItem.items[k];
            const subSubLi3 = createSubMenu(subSubItem);
            subSubUl.appendChild(subSubLi3);
          }
        }
      }
    }
  }
  return ul;
}

const listMenu = createMenu(menu);

section.appendChild(listMenu);
