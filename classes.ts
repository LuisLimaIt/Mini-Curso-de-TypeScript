abstract class UserAccount {
    public name: string;
    protected age: number;

    constructor(name:string, age: number) {
        this.name = name;
        this.age = age;
    };

    logDetails(): void {
        console.log(`The player ${this.name} is ${this.age} years old.`);
    };
};

class CharAccount extends UserAccount {
    private nickname: string;
    level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age);

        this.nickname = nickname;
        this.level = level;
    };

    get getLevel() {
        console.log("----------GET----------");
        return this.level;
    }

    set setLevel(level: number) {
        this.level = level
    }

    logCharDetails(): void  {
        console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`)
    }
};


// const paulo = new UserAccount("Paulo", 48);
// console.log(paulo);

const luis = new CharAccount("Luis", 31, "luluzitto", 107);
console.log(luis);
luis.logDetails();

const alan = new CharAccount("Alan", 30, "alanzitto", 83);
console.log(alan.level)
alan.logDetails();
alan.logCharDetails();

luis.setLevel = 298;
console.log(luis.getLevel);