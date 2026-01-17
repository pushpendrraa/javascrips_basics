const fruits=[
     { name:"Apple",color:"Red",weight:"240gm",number:"1 piece"},
     {name:"Orange",color:"ornge",weight:"440gm",number:"3 piece"},
     {name:"Banana",color:"yellow",weight:"340gm",number:"4 piece"},
     {name:"Guava",color:"green",weight:"730gm",number:"5 piece"}
]

//ForEach() 
// fruits.forEach(fruit=>console.log(fruit.name))

//map()
// const fruitcolor=fruits.map(fruit=>fruit.color);
// console.log(fruitcolor);
//filter()

const fruitname=fruits.filter(fruit=> parseInt(fruit.weight)>400).map(frut=>frut.name);
console.log(fruitname);


