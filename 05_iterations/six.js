// const coding = ['js','cpp','rb','py','java']

// const values = coding.forEach( (item)=> {
//     console.log(item);
//     return item;
// })

// console.log(values);     return as undefinded

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums= myNums.filter( (nums)=> nums > 4 ) // call back function
// const newNum= myNums.filter( (nums)=> {
//     return nums > 4
// } ) // retunn keyword need here {} becazz of this scope is call back function

// const newNms = []

// myNums.forEach( (num) => {
//     if(num > 5){
//         newNms.push(num)
//     }
// })

// console.log(newNms);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userBooks = books.filter((bk) => bk.genre === 'History')

const userBook = books.filter( (buk) => {
    return buk.publish >= 1990 && buk.genre ==="History"

})
console.log(userBook);



