/*
Tiliczki Tibor
Szoft I/1/E
2023.03.09.
*/

const bikes = [
  { name: 'Cassis', wheelSize: 28, usage: 'offroad', price: 557900 },
  { name: 'Alboin 900', wheelSize: 28, usage: 'trekking', price: 519900 },
  { name: 'Asgard', wheelSize: 29, usage: 'technikás utak', price: 519900 },
  { name: 'Ruga', wheelSize: 29, usage: 'hegyi', price: 372900 },
  { name: 'Reptila', wheelSize: 28, usage: 'városi', price: 308900 },
  { name: 'Sirmium', wheelSize: 29, usage: 'hegyi', price: 264900 }
];

const tableBody = document.querySelector('#table-body');
bikes.forEach(bike => {
  const row = document.createElement('tr');
  row.innerHTML = `
      <td>${bike.name}</td>
      <td>${bike.wheelSize}"</td>
      <td>${bike.usage}</td>
      <td>${bike.price.toLocaleString()} Ft</td>
  `;
  tableBody.appendChild(row);
});

const quote = document.querySelector('#quote');
quote.textContent = '"Az élet olyan, mint a kerékpározás, hogy egyensúlyban maradjon, mozogni kell." - Albert Einstein';
