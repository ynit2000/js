// generate  a random color wiht hex code

const  randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++){

        color +=hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

// console.log(randomColor());

let intervalId;

const  startChangingColor = function(){
    // to  make change color contuiunes put  this in method
    if(!intervalId){
    intervalId = setInterval(changeBgColor,1000) // we creating intervalId to give reffence to stopChaningColor  // take this function call him each 1 second
    }
    function changeBgColor (){
        document.body.style.backgroundColor = randomColor();
    }

    // this method is used when button this clicked each time
    // change kar bg-color  by takin access of body-style-bg-color
    // document.body.style.backgroundColor = randomColor();
};
const  stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null; //  clearner code

};



document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)