//Напишите функцию, которая принимает в качестве аргументов строку и объект, 
//а затем проверяет, есть ли у переданного объекта свойство с данным именем.
//Функция должна возвращать true или false.

function hasProperty(str, obj) {
    for (let key in obj) {
        if (key === str) {
            return true;
        }
        else {   
        return false;
  }
  }
  }
  
  const brand_1 = 'toyota';
  const brand_2 = 'nissan';
  const car = {
    nissan: 'skyline',
    color: 'black'
  }
  
  console.log(hasProperty(brand_1, car));
  console.log(hasProperty(brand_2, car));