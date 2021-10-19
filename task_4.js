//Реализуйте следующее консольное приложение подобно примеру, 
//который разбирался в видео. Реализуйте его на прототипах.
//Определите иерархию электроприборов. 
//Включите некоторые в розетку. Посчитайте потребляемую мощность. 
//Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). 
//Выбрав прибор, подумайте, какими свойствами он обладает.

function ElectroMain(name) {
    this.power = 'power'
    this.name = name
}

ElectroMain.prototype.powerOnOff = function (click) {
    this.statusOnOff
    if (click === 'On') {
        this.statusOnOff = 'On'
        console.log(`${this.name} включен(а)`)
    } else {
        this.statusOnOff = 'Off'
        console.log(`${this.name} выключен(а)`)
    }
}

function ElectroLamp(name) {
    this.name = name
    this.category = 'technic'
}
ElectroLamp.prototype = new ElectroMain()

function ElectronicsIBM(name) {
    this.name = name
    this.category = 'Comfort'
}
ElectronicsIBM.prototype = new ElectroMain()


const lamp = new ElectroLamp('лампа');
lamp.power = 30;
lamp.color= 'black';
lamp.lineColor = function () {
console.log(`${this.name} Светит теплым белым`)
};

const computer = new ElectronicsIBM('Компьютер');
computer.power = 150;
computer.HDD = '120 GB';
computer.formatDisk = function () {
console.log('Диск отформатирован')
};


lamp.powerOnOff('On');
computer.powerOnOff('Off');
console.log(`Общая мощьность ${lamp.power + computer.power} Вт`);