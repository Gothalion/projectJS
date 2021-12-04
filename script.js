"use strict";

const title = prompt("Как называется ваш проект?");

let screens = prompt(
  "Какие типы экранов нужно разработать?",
  'пример: "Простые, Сложные, Интерактивные"'
);

let screenPrice = prompt("Сколько будет стоить данная работа?", "пример: 1200");

let adaptive = confirm("Нужен ли адаптив на сайте?");

let serviceOne = prompt("Какой дополнительный тип услуги нужен?");
let servicePriceOne = prompt("Сколько это будет стоить?");
let serviceTwo = prompt("Какой дополнительный тип услуги нужен?");
let servicePriceTwo = prompt("Сколько это будет стоить?");

let rollBack = 99;

let fullPrice = screenPrice + serviceOne + servicePriceOne;
let servicePercentPrice = fullPrice - rollBack;
console.log(Math.ceil(servicePercentPrice));

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

let screenPriceMessage = "Стоимость верстки экранов ";
let fullPriceMessage = "Стоимость разработки сайта ";
let priceCurrency = " долларов";

console.log(screenPriceMessage + screenPrice + priceCurrency);
console.log(fullPriceMessage + fullPrice + priceCurrency);

console.log(screens.toUpperCase());
console.log(screens.split(", "));

console.log(fullPrice * (rollBack / 100));
