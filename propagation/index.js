// propagation
// types: bubblig, c

// bydefault = false = bubbling




// bubbling 

const list = document.querySelector('.v3')
// console.log(list);

list.addEventListener('click', () =>{
    console.log(list);

}, false)


const unOrderedList = document.querySelector('ul')
// console.log(list);

list.addEventListener('click', (e) =>{
    console.log(unOrderedList);

    e.stopPropagation()
}, true)






/*


// c

const list = document.querySelector('.v3')
// console.log(list);

list.addEventListener('click', () =>{
    console.log(list);
    
}, true)         // depend on it s


const unOrderedList = document.querySelector('ul')
// console.log(list);

list.addEventListener('click', () =>{
    console.log(unOrderedList);
    
}, false)



*/
