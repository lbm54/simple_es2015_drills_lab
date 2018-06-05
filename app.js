let favMovie = (movie = 'the room', name = 'world') => console.log(`my name is ${name} and my favorite movie is ${movie}`);

let getFirstName = (fullName) => {
    return fullName.split(" ")[0];
}

let getFirstNameSecond = (fullName) => fullName.split(" ")[0];

let result = ((p1, p2) => ({sqResult: Math.pow(p1 + p2, 2), product: p1 * p2 }))(2, 4);
console.log(`${result.sqResult} ${result.product}`)

let arr = ['Paul', 'Birmingham', 'kimchi'];
let spreadFunc = (name, location, favFood) => {
    console.log(`${name} ${location} ${favFood} `)
}
spreadFunc(...arr);
let name = 'Lee Martin';
let newFunc = (whatever) => {
    let strArr = [...whatever];
    strArr.forEach(theChar => {
        console.log(theChar);
    })
}
newFunc(name);