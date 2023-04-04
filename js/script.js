const categoriesPrzystawki = document.querySelectorAll('.category-item-przystawki');
const productsPrzystawki = document.querySelectorAll('.categories-product-przystawki');
const menusPrzystawki = document.querySelectorAll('.product-menu-przystawki');

categoriesPrzystawki.forEach(category => {
  category.addEventListener("click", () => {
    productsPrzystawki.forEach(product => {
      product.classList.toggle("hidden");
    });
  });
});

productsPrzystawki.forEach(product => {
  product.addEventListener("click", () => {
    menusPrzystawki.forEach(menu => {
      menu.classList.toggle("hidden");
    });
  });
});




const categoriesZupy = document.querySelectorAll('.category-item-zupy');
const productsZupy = document.querySelectorAll('.categories-product-zupy');
const menusZupy = document.querySelectorAll('.product-menu-zupy');

categoriesZupy.forEach(category => {
  category.addEventListener("click", () => {
    productsZupy.forEach(product => {
      product.classList.toggle("hidden");
    });
  });
});

productsZupy.forEach(product => {
  product.addEventListener("click", () => {
    menusZupy.forEach(menu => {
      menu.classList.toggle("hidden");
    });
  });
});



const categoriesNapoje = document.querySelectorAll('.category-item-napoje');
const productsNapoje = document.querySelectorAll('.categories-product-napoje');
const menusNapoje = document.querySelectorAll('.product-menu-napoje');

categoriesNapoje.forEach(category => {
  category.addEventListener("click", () => {
    productsNapoje.forEach(product => {
      product.classList.toggle("hidden");
    });
  });
});

productsNapoje.forEach(product => {
  product.addEventListener("click", () => {
    menusNapoje.forEach(menu => {
      menu.classList.toggle("hidden");
    });
  });
});


const buyButton = document.querySelectorAll(".btn");
buyButton.forEach(buy => {
  buy.addEventListener("click", () => {
    alert(`Ви купили товар`);
    location.reload()
  });
});

