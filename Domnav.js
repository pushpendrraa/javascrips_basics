let fruit=document.getElementById("fruits");
let mango=fruit.children;
Array.from(mango).forEach(fruit=>{
    fruit.style.backgroundColor="yellow";
})

// Direction	Property
// Up	parentElement
// Down	children
// First child	firstElementChild
// Last child	lastElementChild
// Right	nextElementSibling
// Left	previousElementSibling