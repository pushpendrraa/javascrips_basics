let arr=[2,8,4,3,9,88,2,33];
let comp=(a,b)=>{
    return a-b;
}
arr.sort((a,b)=>a-b);
for(let i in arr){
    console.log(arr[i])
}

// console.log("hello 1");
// setTimeout(() => {
//     console.log("hello 2")
// }, 2000);
// console.log("hello 3")