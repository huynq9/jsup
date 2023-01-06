const person = {
    name: 'john',
    age: 30,
    address: {street: 'Main street'}

}
function showInfo({ name, age, address: { street } }){
    console.log(`Name:${name},Age:${age}, Street:${street}`);
}
showInfo(person);


function useState(init) {
    let state = init;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState
    }
    return [getState, setState];
}
const [count, setCount] = useState(10)

console.log('Giá trị cũ:', count());
console.log('Giá trị mới:', setCount(20));