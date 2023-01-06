const person = {
    name: 'Huy',
    age: 19,
    isMarried: true,
}

const person2 = {
    ...person,
    address: {
        streetAddress: 'Ha Noi',
    }
}
console.log(person2);

const products = ['product A', 'product B'];

const newProducts = [...products, 'product C'];

console.log(newProducts);