//A closure is created when a function remembers 
// and can access variables from its outer (lexical) scope 
// even after the outer function has finished execution.



function counter(){
    let count=0;  //lives in the lexical environment of increment & getcount
   function increment(){
        count++;
        console.log(`count increase to ${count}`)
    }
   function getcount(){
    return count;
   }
   return{increment,getcount};
}
const counte =counter();
counte.increment();
counte.increment();
counte.increment();  //In this example, the local variable count is not destroyed
                    //  because it is captured by inner functions, 
                    // forming a closure that keeps the lexical environment alive.
console.log(`the current count is ${counte.getcount()}`)

function test() {
    let count = 0;
    count++;
    console.log(count);
}

test(); // 1
test(); // 1
test(); // 1
//in this example local variales are destroyed beacuse there is not any reference for these variables
//so js see after execution of this function no need of local variablrs
