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

const ul = document.createElement("ul");
function createMenu(menuObject) {
  menuObject.map((item) => {
    const li = createSubMenu(item);
    // Si tiene items crear un submenu con la misma estructura HTML
    if (item.items.length > 0) {
      createMenu(item.items);
    }
    ul.appendChild(li);
  });
}

createMenu(menu);

section.appendChild(ul);
