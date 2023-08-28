export const totalPriceItems = order => order.price * order.count;

export const formatCurrency = str => str.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });