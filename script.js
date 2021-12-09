"use strict";

let title;
let screens;
let screenPrice;
let adaptive;
let rollBack = 10;
let fullPrice;
let servicePercentPrice;
let allServicePrices;
let serviceOne;
let serviceTwo;

const isNumber = function (num) {
  return !isNaN(parseFloat(num));
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор верстки");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, сложные");

  screenPrice = prompt("Сколько будет стоить данная работа?");

  while (isNumber(screenPrice)) {
    screenPrice = prompt("Сколько будет стоить данная работа?");
  }

  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const getAllServicePrices = function () {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      serviceOne = prompt("Какой дополнительный тип услуги нужен?");
    } else if (i === 1) {
      serviceTwo = prompt("Какой дополнительный тип услуги нужен?");
    }

    sum += +prompt("Сколько это будет стоить?");
  }

  return sum;
  // return servicePriceOne + servicePriceTwo;
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

const getServicePercentPrices = function () {
  return fullPrice - fullPrice * (rollBack / 100);
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getTitle = function () {
  return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase();
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price >= 0 && price < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что-то пошло не так";
  }
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);

console.log(getRollbackMessage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log([screens]);
console.log(servicePercentPrice);

console.log("Стоимость верстки экранов " + screenPrice + " долларов");
console.log("Стоимость разработки сайта " + fullPrice + " долларов");
