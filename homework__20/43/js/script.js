const saveBtn = document.querySelector('.submit');
const body = document.querySelector('body');
const form = document.getElementById('registration-form');
const table = document.querySelector('table');
const formContainer = document.querySelector('.row')

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const data = {};

  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }

  const row = document.createElement('tr');

  row.innerHTML = Object.values(data).map(value => `<td>${value}</td>`).join('');

  table.querySelector('tbody').appendChild(row);
  table.style.display = 'block';
  body.appendChild(table);
  form.reset();
  formContainer.remove()
});

