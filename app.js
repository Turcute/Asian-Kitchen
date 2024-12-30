const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1456,h_1092/k%2FPhoto%2FRecipes%2F2024-09-tteokbokki%2Ftteokbokki-523",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Ramen.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://takestwoeggs.com/wp-content/uploads/2022/02/Dan-Dan-Noodles-Dan-Dan-Mian-5overhead-sq.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

const sectionCenter = document.querySelector(".section-center");

function displayMenuItems(menuItems) {
  const menuHtml = menuItems
    .map((item) => {
      return `
    <article class="menu-item col-md-4">
      <img src="${item.img}" alt="${item.title}" class="photo"/>
      <div class="menu-info">
        <header>
          <h4 class="menu-title">
            ${item.title}
            <span class="price">$${item.price}</span>
          </h4>
        </header>
        <p class="menu-text">${item.desc}</p>
      </div>
    </article>
  `;
    })
    .join("");

  sectionCenter.innerHTML = menuHtml;
}

// Baslangicta butun menuleri goster
displayMenuItems(menu);

// Menü kategorilerini almak için unique kategoriler oluşturuyoruz
const categories = menu.reduce(
  (acc, curr) => {
    if (!acc.includes(curr.category)) {
      acc.push(curr.category);
    }
    return acc;
  },
  ["All"] // Tüm öğeleri gösterebilmek için "All" kategorisi ekliyoruz
);

// Kategori butonlarını eklemek
const btnContainer = document.querySelector(".btn-container");

function displayCategoryButtons() {
  const categoryButtons = categories
    .map((category) => {
      return `
      <button class="btn-item btn btn-outline-secondary" data-category="${category}">
        ${category}
      </button>
    `;
    })
    .join(""); // Butonları birleştiriyoruz
  btnContainer.innerHTML = categoryButtons;

  // Butonlara tıklama işlevselliği ekliyoruz
  const filterButtons = document.querySelectorAll(".btn-item");
  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.category;
      filterMenuByCategory(category);
    });
  });
}

// Kategorilere göre filtreleme
function filterMenuByCategory(category) {
  if (category === "All") {
    displayMenuItems(menu); // Tüm öğeleri göster
  } else {
    const filteredMenu = menu.filter((item) => item.category === category);
    displayMenuItems(filteredMenu); // Seçilen kategoriye göre öğeleri göster
  }
}

// İlk butonları görüntüle
displayCategoryButtons();
