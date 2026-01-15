//swap the value of two variables
let a=2;
let b=1;
[a,b]=[b,a];
console.log(a)
console.log(b)

//assign or swap the array elements
const colors=["white","green","black","yellow","blue"];
[colors[0],colors[3]]=[colors[1],"beige"];
[firstcolor,secondcolor,...extracolor]=colors;
console.log(colors[0],colors[3]);
console.log(firstcolor,secondcolor,extracolor);

//object destructuring

function display({name,age,job}){
    console.log(age);
    console.log(job);
}
const person={
    name:"pushpendra",
    age: 21,
    job:"Student"

}
display(person)
const{name,age,jab}=person;
console.log(name);