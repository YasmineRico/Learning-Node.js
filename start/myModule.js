// *-------------Exporting custom modules--------------*

//
let count = 0;

//incrementing our count
const inc = () => ++count;

//decrementing our cont
const dec = () => --count;

//retrieve the most recent count
const getCount = () => count;

//export info 
module.exports ={
    anything: true,
    who: "Bill", 
    count,
    inc,
    dec,
    getCount
};