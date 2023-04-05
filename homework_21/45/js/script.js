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

const orderForm = document.getElementById('orderForm');
const menu = document.getElementById('menu');
const buyButton = document.querySelectorAll(".btn");
buyButton.forEach(buy => {
  buy.addEventListener("click", () => {
    menu.style.display = 'none';
    orderForm.style.display = 'block';
    });
});



orderForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const fullName = document.getElementById('fullName').value;
  const city = document.getElementById('city').value;
  const postOffice = document.getElementById('postOffice').value;
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
  const quantity = document.getElementById('quantity').value;
  
  if (!fullName || !city || !postOffice || !paymentMethod || !quantity) {
    alert('Будь ласка, заповніть всі обов\'язкові поля');
    return;
  }

let valuesArr = [];

  valuesArr.push(fullName);
  valuesArr.push(city);
  valuesArr.push(postOffice);
  valuesArr.push(paymentMethod.value);
  valuesArr.push(quantity);
  valuesArr.push(quantity);

  makeTable(valuesArr);
});

function makeTable(value) {
  const table = document.querySelector("#table");
  const subtitle = document.createElement("thead");
  table.append(subtitle);
  subtitle.innerHTML = "Інформація про замовлення";
  subtitle.classList.add("subtitle");
  orderForm.style.display = 'none';
        menu.style.display = 'none';
  const tr = document.createElement("tr");
  table.append(tr);
  tr.classList.add("tr");

  const namesArr = [
    "ПІБ покупця: ",
    "Місто: ",
    "Склад Нової пошти ",
    "Спосіб оплати: ",
    "Кількість продукції: ",
    "Коментар до замовлення: ",
  ];

  for (let i = 0; i < namesArr.length; i++) {
    const td = document.createElement("td");
    tr.append(td);
    td.innerHTML = `${namesArr[i]} ${value[i]}`;
    td.classList.add("td");
  }
}