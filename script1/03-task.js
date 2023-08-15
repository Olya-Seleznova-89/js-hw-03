let country = (prompt('Вкажіть країну доставки'));
country = country.toLocaleLowerCase();
let price;

switch (country) {
    case 'китай' : price = 100;
        break;
    case 'чилі' : price = 250;
        break;
    case 'австралія' : price = 170;
        break;
    case 'індія' : price = 80;
        break;
    case 'ямайка' : price = 120;
        break;

    default: alert("'У вашу країні немає доставки");
}
alert(`Доставка в ${country} буде коштувати ${price} кредитів.`);