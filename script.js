"use strict";

const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  rollback: 20,
  adaptive: true,
  service1: "",
  servicePrice: 0,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  rollbackSum: 0,
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num !== null;
  },
  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    appData.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, Сложные, Интерактивные"
    );
    do {
      appData.screenPrice = prompt("Сколько будет стоить данная работа");
    } while (!appData.isNumber(appData.screenPrice));
    appData.screenPrice = +appData.screenPrice;

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  getRollbackMessage: function (price) {
    switch (true) {
      case price >= 30000:
        return "Даем скидку в 10%";
      case price >= 15000 && price < 30000:
        return "Даем скидку в 5%";
      case price >= 0 && price < 15000:
        return "Скидка не предусмотрена";
      default:
        return "Что то пошло не так";
    }
  },
  getAllServicePrices: function () {
    let sum = 0;

    for (let i = 0; i < 2; i++) {
      appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
      appData.servicePrice = prompt("Сколько это будет стоить?");

      while (!appData.isNumber(appData.servicePrice)) {
        appData.servicePrice = prompt("Сколько это будет стоить?");
      }
      appData.servicePrice = +appData.servicePrice;
      sum += appData.servicePrice;
    }

    return sum;
  },
  getFullPrice: function (screen, service) {
    return screen + service;
  },
  getTitle: function (ttl) {
    ttl = ttl.trim();
    return ttl[0].toUpperCase() + ttl.substring(1).toLowerCase();
  },
  getServicePercentPrices: function (foo, rollb) {
    return foo - rollb;
  },
  start: function () {
    appData.asking();

    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice(
      appData.screenPrice,
      appData.allServicePrices
    );
    appData.rollbackSum = appData.fullPrice * (appData.rollback / 100);
    appData.servicePercentPrice = appData.getServicePercentPrices(
      appData.fullPrice,
      appData.rollbackSum
    );
    appData.title = appData.getTitle(appData.title);

    appData.logger();
  },
  logger: function () {
    console.log(appData.screens.split(", "));
    console.log(appData.getRollbackMessage(appData.fullPrice));
    console.log(appData.servicePercentPrice);

    for (let key in appData) {
      console.log(key);
    }

    console.log(appData.allServicePrices);
    console.log(appData.fullPrice);
    console.log(appData.title);
    console.log(appData.servicePercentPrice);
  },
};

appData.start();
