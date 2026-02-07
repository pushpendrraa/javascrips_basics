const fruit=document.getElementsByClassName("fruit");
fruit[0].style.backgroundColor="yellow";
for(let fruits of fruit){
    fruits.style.backgroundColor="yellow";
}
Array.from(fruit).forEach(fruit=>{
    fruit.style.backgroundColor="yellow";
})