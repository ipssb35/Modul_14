//Перепишите консольное приложение из предыдущего юнита на классы.

class ElectroMain {
    constructor(name) {
        this.power = 'power'
        this.name = name
    }
    
    powerOnoff(click) {
        this.statusOnOff
        if (click == 'On') {
            this.statusOnOff = 'On'
            console.log(`${this.name} включен(а)`)
        } else {
            this.statusOnOff = 'Off'
            console.log(`${this.name} выключен(а)`)
        }
    }
    }
    
    class ElectroLamp extends ElectroMain {
    constructor(name) {
       super(name);
        this.category = 'technic'
    }
    }
    
    class ElectronicsIBM extends ElectroMain {
    constructor(name) {
        super(name);
        this.category = 'Comfort'
    }
    }
    
    const lamp = new ElectroLamp('лампа');
    lamp.power = 25;
    lamp.color = 'black';
    lamp.lineColor = function () {
        console.log(`${this.name} Светит теплым белым`)
    };
    const computer = new ElectronicsIBM('Компьютер');
    computer.power = 150;
    computer.HDD = '120 GB';
    computer.formatDisk = function () {
        console.log('Диск отформатирован')
    };
       
    lamp.powerOnoff('On');
    computer.powerOnoff('Off');

    console.log(`Общая мощность ${lamp.power + computer.power} Вт`);