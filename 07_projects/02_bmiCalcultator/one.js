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

    // show the result part
    results.innerHTML = `<span>${bmi}</span>`;
  }

})