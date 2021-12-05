"use strict";

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let serviceOne = prompt("Какой дополнительный тип услуги нужен?");
let servicePriceOne = +prompt("Сколько это будет стоить?");
let serviceTwo = prompt("Какой дополнительный тип услуги нужен?");
let servicePriceTwo = +prompt("Сколько это будет стоить?");
let rollBack = 99;

let fullPrice = screenPrice + servicePriceOne + servicePriceTwo;
let servicePercentPrice = fullPrice - fullPrice * (rollBack / 100);

let screenPriceMessage = "Стоимость верстки экранов ";
let fullPriceMessage = "Стоимость разработки сайта ";
let priceCurrency = " долларов";

if (fullPrice >= 30000) {
  console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice < 30000) {
  console.log("Даем скидку в 5%");
} else if (fullPrice >= 0 && fullPrice < 15000) {
  console.log("Скидка не предусмотрена");
} else {
  console.log("Что-то пошло не так");
}

console.log(Math.ceil(servicePercentPrice));

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log("Стоимость верстки экранов" + " " + screenPrice + " " + "долларов");
console.log("Стоимость разработки сайта" + " " + fullPrice + " " + "долларов");

console.log(screens.toUpperCase());
console.log(screens.split(", "));

console.log(fullPrice * (rollBack / 100));
