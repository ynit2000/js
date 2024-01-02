// for 

for (let i = 0; i < 10; i++) {
    const element = i  +1;
    if(element == 5){
        console.log("5 is best Number");
    }
    console.log(`This is : ${element}`)

    
}
// printing table here
for(let j = 1 ; j <= 10 ; j++){
    console.log(`Outer loop value: ${j}`)
  for (let k = 1; k <= 10; k++) {
    // console.log(`Inner loop value ${k} and Outer loop ${j}`);
     console.log( j+ '*' +k +  ' = ' + j*k);
  }
}

let myArray = ['flash','batman','superman'];
console.log(myArray.length);

for (let arr = 0; arr < myArray.length; arr++) {
    const element = myArray[arr];
    console.log(element)
    
}


// break((skip karta hai conditon ko)) and continue (ek bar  skip karta condition ko)

for (let i = 1; i <= 20 ; i++) {
    // const element = array[i];
    if( i == 5 ){
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${i}`);
    
}
for (let i = 1; i <= 20 ; i++) {
    // const element = array[i];
    if( i == 5 ){
        console.log(`Detected 5`);
        continue    
    }
    console.log(`Value of i is ${i}`);
    
}
