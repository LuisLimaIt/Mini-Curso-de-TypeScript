// boolean (true / false)
let isOpen: boolean;
isOpen = true;


// string ('foo', "foo", `foo`)
let message: string;
message = `foo ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 0xff0;

// array (type[])
let items: number[];
items = [1, 2, 3];

let value: Array<number>
items = [1, 2, 3];

// tuple 
let title: [number, string, string];
title = [1, "foo", "bar"];

// enum
enum Colors {
    white = 'fff',
    black = '000'
};

// any (qualquer coisa) Utilizar não é uma boa prática de forma nenhuma!!
let coisa: any;
coisa = [1];

// void (vazio) Quando não retornamos nada
function logger() {
    console.log('foo')
};

// null / undefined
type Bla = string | undefined

// never - Nunca vai retornar
function error(): never {
    throw new Error("error")
};

// object
let cart: object
cart= {
    key: "fi"
};

// Type Inference

let message2 = "mensagem definida" // Como a primeira atribuição foi String, ele entende que o tipo é = String
message2 = "string nova";

window.addEventListener("click", (e) => {
    console.log(e.target);
});





