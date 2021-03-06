// @Component
// @Selector
// @useState("dasdas")

// Factory
// function Logger(prefix: string) {
//     return (target: any) => {
//         console.log(`${prefix} - ${target}`);
//     };
// };

// @Logger('awesome')
// class Foo {};

// Class decorator

// function setAPIVersion(apiVersion: string) {
//     return (constructor: any) => {
//         return class extends constructor {
//             version = apiVersion
//         };
//     };
// };

// decorator - Anotar a versão da API
// @setAPIVersion("2.0.0")
// class API {};

// console.log(new API());

// Property decorator

// function minLength(length: number) {
//     return (target: any, key: string) => {
//         let val = target[key]

//         const getter = () => val;

//         const setter = (value: string) => {
//             if(value.length < length) {
//                 console.log(`Error: Voce não deve criar ${key} com tamanho menor que ${length}.`)
//             } else {
//                 val = value
//             }
//         };

//         Object.defineProperty(target, key, {
//             get: getter,
//             set: setter
//         });
//     };
// }

// class Movie {
//     // validação - Se length for menor que 5 - Error
//     @minLength(50)
//     title: string;
    
//     constructor(t: string) {
//         this.title = t;
//     };
// };

// const movie = new Movie("A Viagem de Chihiro");
// console.log(movie.title);

// Method decorator
function delay(ms: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any) {
            console.log(`Esperando ${ms}...`);
            setTimeout(() => {
                originalMethod.apply(this, args)
            }, ms);

            return descriptor;
        };
    };
};

class Greeter {
    greeting: string;

    constructor(g: string) {
        this.greeting = g
    };

    // Esperar um tempo e aí vai rodar o método (ms)
    @delay(2000)
    greet() {
        console.log(`Hello ${this.greeting}`);
    };
};

const pessoa = new Greeter("Pessoa!")
pessoa.greet()




// Parameter decorator
// Acessor decorator