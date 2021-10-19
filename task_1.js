//Напишите функцию, которая принимает в качестве аргумента объект и выводит в консоль
//все ключи и значения только собственных свойств. Данная функция не должна возвращать 
//значение.

const car = {
    brand: 'Toyota',
    price: 12000000
}

const AUTO = Object.create(car);

console.log(AUTO);

AUTO.model = 'Opel';
AUTO.cash = 10000000;

function getProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key, ' ', obj[key]);
        }
    }
}

getProperties(AUTO);