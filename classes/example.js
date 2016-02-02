class People {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name.toUpperCase();
    }
    set name(name) {
        this._name = name;
    }
    sayName() {
        console.log(this.name);
    }
}

class Man extends People {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    static speak() {
        console.log('I am a man.');
    }
}
