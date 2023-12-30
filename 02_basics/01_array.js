// array 

const myArr =[0,1,2,3,4,5]
const myHeros = ["badman","joker"]

console.log(myArr[1])

/* ask in interview
 shallow copy -=---> share same refernce pts --> change in org. variable
 deep copy -=---> share diff. refernce pts --> not  change in org. variable

 */

const myArr2 =new Array (1,2,3,4);
console.log(myArr[1])


// Array methodns

myArr.push(6)
myArr.push(7)     // just number in last of array 
myArr.pop()       // just remove the last element of array
myArr.unshift(9)  // just add on index number '0'  --> not good practice becxx  when large number of data then get load on computer

myArr.shift()      // just remove on index number '0'  --> not good practice becxx   
console.log(myArr.includes(9));  // check element in array
console.log(myArr.indexOf(3))


const newArr = myArr.join()
console.log(typeof newArr)

console.log(myArr);



// slice , splice
/*




*/

console.log("A:", myArr);

const myn1 = myArr.slice(1,5)

console.log(myn1);
console.log("B:", myArr);

const myn2 = myArr.splice(1,5);  // change directly cut from the array 
console.log("C:", myArr);

console.log(myn2);











