// Date

let myDate = new Date();
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toJSON())

console.log(typeof myDate); // intervive ask it;s object in js

let myCreateDate= new Date(2023,0,28);    // months start from 0 here
console.log(myCreateDate.toDateString())

let myCreateDates= new Date("2023-01-28");    //diff  way YYYY-MM-DD  months start from 0 here
console.log(myCreateDates.toDateString())

let myCreateDatess= new Date("01-28-2023");  // Used in INDia
console.log(myCreateDatess.toDateString())


// Time Stamp used in poll to declear Winner like KBC r-1

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());  // this time in milisecond

console.log(myCreateDate.getTime()); 
 // ask in interviewed    convert milisecond to second

console.log(Math.floor(Date.now()/1000));  // this in second



let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMonth()+1); // month start at 0 so +1 here


newDate.toLocaleString('default',{
    weekday:"long",
    second: "2-digit",
    month:"2-digit",
    year:"2-digit"

})
console.log(newDate)

// date and tiem is little complex topic







