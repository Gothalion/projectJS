"use strict";

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  rollback: 20,
  adaptive: true,
  services: {},
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  rollbackSum: 0,
  start: function () {
    appData.asking();
    appData.addPrices();
    appData.getFullPrice(appData.screenPrice, appData.allServicePrices);
    appData.getRollbackSum();
    appData.getServicePercentPrices(appData.fullPrice, appData.rollbackSum);
    appData.getTitle(appData.title);

    appData.logger();
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num !== null;
  },
  asking: function () {
    do {
      appData.title = prompt(
        "Как называется ваш проект?",
        "Калькулятор верстки"
      );
    } while (!isNaN(appData.title));

    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0;

      do {
        name = prompt("Какие типы экранов нужно разработать?");
      } while (!isNaN(name));

      do {
        price = prompt("Сколько будет стоить данная работа");
      } while (!appData.isNumber(price));
      price = +price;

      appData.screens.push({ id: i, name: name, price: price });
    }

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");

    for (let i = 0; i < 2; i++) {
      let name;
      let price = 0;

      do {
        name = prompt("Какой дополнительный тип услуги нужен??");
      } while (!isNaN(name));
      do {
        price = prompt("Сколько это будет стоить?");
      } while (!appData.isNumber(price));

      price = +price;

      if (name in appData.services) {
        appData.services[name + i] = price;
      } else {
        appData.services[name] = price;
      }
    }
  },
  addPrices: function () {
    appData.screenPrice = appData.screens.reduce(
      (sum, screen) => sum + screen.price,
      0
    );

    for (let key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
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
  getFullPrice: function (screen, service) {
    appData.fullPrice = screen + service;
  },
  getRollbackSum: function () {
    appData.rollbackSum = appData.fullPrice * (appData.rollback / 100);
  },
  getTitle: function (ttl) {
    ttl = ttl.trim();
    appData.title = ttl[0].toUpperCase() + ttl.substring(1).toLowerCase();
  },
  getServicePercentPrices: function (foo, rollb) {
    appData.servicePercentPrice = foo - rollb;
  },
  logger: function () {
    console.log(appData.getRollbackMessage(appData.fullPrice));
    console.log(appData.servicePercentPrice);

    // Проверка
    // console.log(appData.allServicePrices);
    // console.log(appData.fullPrice);
    // console.log(appData.title);
    // console.log(appData.servicePercentPrice);
    // console.log(appData.services);
    // console.log(appData.screens);
  },
};

appData.start();
