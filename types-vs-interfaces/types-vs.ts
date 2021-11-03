// Type Alias

//definição
type GameT = {
    title: string;
};

type DLCT = {
    extra: string;
};

//intersection

type GameCollectionT = Game & DLCT & { content: boolean };

//implements

// class CreateGameT implements GameCollectionT {}

//declarar função

type getSimilarsT = (title: string) => void;

// ===============Diferenças ================= //

//permite declarar tipos primitivos

type IDT = string | number;

//pode declarar tuplas normalmente

type TupleT = [number, number];

[1,2] as TupleT;

//Apenas uma declaração por escopo

type JQueryT = { a: string};
// type JQueryT = { b: string};

// Mais recomendado na maioria das vezes
//React - Props

// O importante é manter a CONSISTÊNCIA de acordo com o projeto!