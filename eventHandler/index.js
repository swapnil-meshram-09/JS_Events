
const btn = document.querySelector('button')

btn.addEventListener('click',(e) =>{
    console.log(e);                   // pointer event
    console.log(typeof e);            // object
    console.log(e.type);              // click
    console.log(e.target);            // <button> </button> tag
    console.log(e.target.type);       // submit
    console.log(e.target.value);      // 
    console.log(e.target.parentNode); // <body> </body> tag
    

}, false)



/* 

btn.addEventListener('mouseover',(e) =>{
    console.log(e);                   // pointer event
    console.log(typeof e);            // object
    console.log(e.type);              // click
    console.log(e.target);            // <button> </button> tag
    console.log(e.target.type);       // submit
    console.log(e.target.value);      // 
    console.log(e.target.parentNode); // <body> </body> tag
    
}, false)

*/

           