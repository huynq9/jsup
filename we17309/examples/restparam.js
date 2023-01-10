'use strict';

const add = ({ a, b, ...other }) => {
    console.log('a:', a);
    console.log("b:", b);
    console.log("other:", other);

};
add({ a: 1, b: 3, c: 4, d: 12 });