const menu = [
  {
    name: 'Home',
    link: '/',
    items: []
  },
  {
    name: 'About',
    link: '/about',
    items: []
  },
  {
    name: 'Products',
    link: '/products',
    items: [
      {
        name: 'Product 1',
        link: '/products/1',
        items: []
      },
      {
        name: 'Product 2',
        link: '/products/2',
        items: [
          {
            name: 'Product 2.1',
            link: '/products/2/1',
            items: []
          },
        ]
      },
    ]
  },
  {
    name: 'Services',
    link: '/services',
    items: [
      {
        name: 'Service 1',
        link: '/services/1',
        items: [
          {
            name: 'Service 1.1',
            link: '/services/1/1',
            items: []
          },
        ]
      },
      {
        name: 'Service 2',
        link: '/services/2',
        items: [
          {
            name: 'Service 2.1',
            link: '/services/2/1',
            items: []
          },
          {
            name: 'Service 2.2',
            link: '/services/2/2',
            items: []
          },
        ]
      },
    ]
  },
]

const container = document.querySelector(".container");

function createMenu(menu, container) {
  let ul = document.createElement("ul");

  menu.forEach(function(element) {
    let li = document.createElement("li");
    li.textContent = element.name;

    if (element.items.length > 0) {
      let button = document.createElement("button");
      button.textContent = "+";
      button.addEventListener("click", function() {
        let subMenu = li.querySelector("ul");
        if (subMenu.classList.contains("hide")) {
          subMenu.classList.remove("hide");
          subMenu.classList.add("show");
          button.textContent = "-";
        } else {
          subMenu.classList.remove("show");
          subMenu.classList.add("hide");
          button.textContent = "+";
        }
      });
      li.appendChild(button);
      let subMenu = document.createElement("ul");
      subMenu.classList.add("hide");
      createMenu(element.items, subMenu);
      li.appendChild(subMenu);
    }

    li.addEventListener("click", function() {
      let activeElement = document.querySelector(".active");
      if (activeElement) {
        activeElement.classList.remove("active");
      }
      li.classList.add("active");
    });

    ul.appendChild(li);
  });

  container.appendChild(ul);
}

createMenu(menu, container);
