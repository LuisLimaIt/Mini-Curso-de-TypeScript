"use strict";
// boolean (true / false)
var isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
var message;
message = "foo " + isOpen;
// number (int, float, hex, binary)
var total;
total = 0xff0;
// array (type[])
var items;
items = [1, 2, 3];
var value;
items = [1, 2, 3];
// tuple 
var title;
title = [1, "foo", "bar"];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "fff";
    Colors["black"] = "000";
})(Colors || (Colors = {}));
;
// any (qualquer coisa) Utilizar não é uma boa prática de forma nenhuma!!
var coisa;
coisa = [1];
// void (vazio) Quando não retornamos nada
function logger() {
    console.log('foo');
}
;
// never - Nunca vai retornar
function error() {
    throw new Error("error");
}
;
// object
var cart;
cart = {
    key: "fi"
};
// Type Inference
var message2 = "mensagem definida"; // Como a primeira atribuição foi String, ele entende que o tipo é = String
message2 = "string nova";
window.addEventListener("click", function (e) {
    console.log(e.target);
});
