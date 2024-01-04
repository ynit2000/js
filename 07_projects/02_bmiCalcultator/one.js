const form = document.querySelector('form')


form.addEventListener('submit', function(event){
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if(height ==='' || height < 0 || isNaN(height)){
    // isNaN is current way of js to check Not a Number 
    results.innerHTML = `Please give a vaild height ${height}`;
  }
  else if(weight ==='' || weight < 0 || isNaN(weight)){
  
    results.innerHTML = `Please give a vaild weight ${weight}`;
  }
  else{
    const bmi = (weight/ ((height*height) /10000)).toFixed(2);
    
    // const bmistring = document;

    // show the result part  used IF else statement

    if (bmi <= 18.6){
        results.innerHTML = `BMI : Under Weight <span>${bmi}</span>`;
    }
    else if (bmi > 18.6 && bmi <= 24.9){
        results.innerHTML = `BMI : Normal Weight <span>${bmi}</span>`;
    }
    else if (bmi > 24.9){
        results.innerHTML = `BMI : Over Weight <span>${bmi}</span>`;
    }

    

    // switch(bmi){
    //  case (bmi>18.6) :
    //     bmistring.innerHTML = "BMI : Under Weight"; 
    //     break;

    //  case (bmi =>18.6 && bmi <=24.9) :
    //     bmistring.innerHTML = "BMI : Normal Weight";
    //     break;

    //  case (bmi > 24.9):
    //     bmistring.innerHTML = "BMI : Over Weight";
    //     break;
    
    // results.innerHTML = `<span>${bmi}</span>`; 

  }

});