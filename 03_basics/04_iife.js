// Immediately Invoked Function Expression (IIFE)

(function chai(){
    // name IIFE
    console.log(`DB CONNECTED`);

})();
// to avoid global pollution 

// () --> defineation , ()---> excusion 

( (name) => {
    console.log(`DB CONNECTED Two ${name} `);
}) ('ritesh')


