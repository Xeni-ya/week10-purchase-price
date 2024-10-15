// Вам необходимо создать функцию calculateTotalPrice(), которая принимает два аргумента - quantity (количество товаров) и price (цена за единицу товара). Если значения не переданы, функция должна использовать значения по умолчанию, например: quantity = 2 и price = 15000000.
// Функция должна производить расчет общей стоимости покупки, умножая количество товаров на их цену. Затем полученное значение необходимо отформатировать с использованием функции toLocaleString('ru-RU'), чтобы отобразить разделитель тысяч и соответствующую валюту (рубли). Про toLocaleString().
// Наконец, выведите результат расчета в виде сообщения с помощью функции alert(). Сообщение должно содержать текст "Стоимость покупки: [форматированное значение] рублей".

// const calculateTotalPrice = (quantity = 2, price = 15000000) => {
//   const totalCost = quantity * price;
//   const formatPrice = totalCost.toLocaleString('ru-RU');
//   alert(`Стоимость покупки: ${formatPrice} рублей`);
// }
// // Получаем элементы DOM после загрузки страницы
// document.addEventListener('DOMContentLoaded', () => {
//   calculateTotalPrice();
// });

const calculateTotalPrice = (quantity = 2, price = 15000000) => {
  const totalCost = quantity * price;
  const formatPrice = totalCost.toLocaleString('ru-RU');

  const divPurchasePrice = document.getElementById('purchase-price');

  const newElement = document.createElement('p');
  newElement.textContent = `Стоимость покупки: ${formatPrice} рублей`;

  divPurchasePrice.append(newElement);
}
document.addEventListener('DOMContentLoaded', () => {
  calculateTotalPrice();
});