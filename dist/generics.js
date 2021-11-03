"use strict";
// S => State
// T => Type
// K => Key
// V => Value
// E => Element
function useState() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
var newState = useState();
newState.setState("Luis"); // É uma string
console.log(newState.getState());
// newState.setState(123); // Dê erro
// console.log(newState.getState());
var newNumberState = useState();
newNumberState.setState(28); // É uma string
console.log(newNumberState.getState());
