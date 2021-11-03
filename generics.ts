// S => State
// T => Type
// K => Key
// V => Value
// E => Element

type numOrString = number | string;

function useState<S extends numOrString = string>() {
    let state: S

    function getState() {
        return state
    }

    function setState(newState: S) {
        state = newState
    }

    return { getState, setState };
}

const newState = useState();
newState.setState("Luis"); // É uma string
console.log(newState.getState());

// newState.setState(123); // Dê erro
// console.log(newState.getState());

const newNumberState = useState<number>();
newNumberState.setState(28); // É uma string
console.log(newNumberState.getState());

