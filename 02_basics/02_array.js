
const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3]);

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros)


const all_new_heros = [...marvel_heros,...dc_heros]

// console.log(allHeros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat()

console.log("Real:"+   real_another_array)



// making string to Array  for we can use array

console.log( Array.isArray("Hitesh"))
console.log( Array.isArray(null))
console.log( Array.from("Hitesh"))
console.log( Array.from({name:"Hitesh"}))  // interesting in interview

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));


