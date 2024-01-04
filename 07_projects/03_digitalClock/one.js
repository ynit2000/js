const clock = document.getElementById('clock')

// const clock = document.querySelector("#clock")  // used anyone

// let date = new Date()
// console.log(date.toLocaleTimeString());


setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

