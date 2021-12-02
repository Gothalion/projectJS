const title = "Строка с названием проекта";
let screens = "Простые, сложные, интерактивные";
let screenPrice = 11;
let rollBack = 99;
let fullPrice = 250;
let adaptive = true;

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
