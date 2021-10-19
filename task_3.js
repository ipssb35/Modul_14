//Напишите функцию, которая создает пустой объект, но без прототипа.

function createObject() {
    const result = Object.create(null);
    return result;
}

console.log(createObject());