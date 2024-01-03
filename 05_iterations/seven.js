const myNums = [1,2,3,4,5,6,7,8,9,10]   // we have to add number 10 in each element

// const newnums = myNums.map( (num) => num +10)
// chain mapping 

const newNums = myNums
                     .map( (num) => num*10 )
                     .map((nu) => nu +1 )
                     .filter( (n) => n >=40)


console.log(newNums);



