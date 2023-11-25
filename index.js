// const viaggi = [
//   {
//     meta: "Aruba",
//   },
//   {
//     meta: "Zanzibar",
//   },
//   {
//     meta: "Monte Fuji",
//   },
//   {
//     meta: "Tokyo",
//   },
//   {
//     meta: "Sharm el Sheikh",
//   },
//   {
//     meta: "Madagascar",
//   },
//   {
//     meta: "Gorokyaku Fort",
//   },
//   {
//     meta: "Castello di Hymeji",
//   },
//   {
//     meta: "Las Vegas",
//   },
//   {
//     meta: "Los Angeles",
//   },
//   {
//     meta: "Miami",
//   },
//   {
//     meta: "New York",
//   },
//   {
//     meta: "Calabria",
//   },
//   {
//     meta: "Isola D'elba",
//   },
//   {
//     meta: "Puglia",
//   },
//   {
//     meta: "Sardegna",
//   },
//   {
//     meta: "Sicilia",
//   },
//   {
//     meta: "Toscana",
//   },
//   {
//     meta: "Città del Messico",
//   },
//   {
//     meta: "Amsterdam",
//   },
//   {
//     meta: "Barcellona",
//   },
//   {
//     meta: "Dubai",
//   },
//   {
//     meta: "Parigi",
//   },
//   {
//     meta: "Praga",
//   },
// ];

let cards = document.querySelectorAll(".card");
const counter = document.querySelector(".counter__viaggi");

const totaleViaggi = function () {
  for (let i = 0; i < cards.length; i++) {
    counter.innerHTML = `<h3>Totale viaggi disponibili in agenzia: ${cards.length} </h3>`;
  }
};

totaleViaggi();

let buttonDelete = document.querySelector(".button__delete");
let totaleCard = document.querySelectorAll(".card");

const eliminaCard = function () {
  for (let i = 0; i < totaleCard.length; i++) {
    let card = totaleCard[i];
    card.parentNode.removeChild(card);
  }
};

buttonDelete.addEventListener("click", eliminaCard);
