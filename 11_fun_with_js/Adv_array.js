const myArr = [];
// %DebugPrint(myArr)

// continious, Holey  -- engine V8-debugger

// Path: Adv-arry.js

// SMI (small interger) -- BEST ARRAY TYPE
// Packed Element
// Double (float, string, function)


// array ka inside element -- > for Optimizztion

const arrTwo = [1,2,3,4,5]
// PACKED_SMI_ELEMENTS

arrTwo.push[6.0] = 1.1;   // Once it's becomem Packed_Double_Array never return to Packed_SEMi_Element   
// PACKED_DOUBLE_ELEMENTS

arrTwo.push[7] = '7';
// PACKED_ELEMENTS

arrTwo[10] = 11;
// HOLEY_ELEMENT

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);

// how array finds index value 

// bound check -- not cost effective -- costtly 
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// holes are very expensive in js

const arrThree = [1, 2, ,3 , 4, 5]
console.log(arrThree[2]);

// otimp : SMI > DOUBLE > PACKED
// otimp : H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENTs
arrFour[0] = '1' // HOLET_ELEMENTS
arrFour[1] = '2' // HOLET_ELEMENTS
arrFour[2] = '3' // HOLET_ELEMENTS

// MORE BETTER WAY COMPARE TO ARRfOUR
const arrFive = []

arrFive.push('1') // PACKED_ELEMENT
arrFive.push('2') // PACKED_ELEMENT
arrFive.push('3') // PACKED_ELEMENT

const arrSix = [1,2,3,4,5]
arrSix.push(Infinity)  //  it;s become DOUBLE



// FOr make Recommetion to by enginee is : 
// for,for-of, forEach // loops -- used internal by-default method ko used karo
