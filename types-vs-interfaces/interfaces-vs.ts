//interfaces

//definição
interface Game {
    title: string;
};

interface DLC {
    extra: string;
};

//interseção / extend

interface GameCollection extends Game, DLC {}

//implements

class CreateGame implements GameCollection {}

//declarar função
interface getSimilars {
    (title: string): void;
};

//=================Diferenças==============//
interface ID extends number {}

//não consigo definir tuplas na interface
interface Tuple {
    0: number;
    1: number;
};

[1, 2, 3, "Não tem limite" ] as Tuple;

//Pode ter múltiplas declarações e ele une de mesmo nome

interface JQuery {
    a: string;
};

interface JQuery {
    b: string;
};

const $: JQuery = {
    a: "bla",
    b: "foo",
};

//Vantagem: Quando estiver criando libs, prefira Interfaces, porque são mais extensíveis!

//Criandp objetos/classes (POO)
