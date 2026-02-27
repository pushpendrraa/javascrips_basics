// let promise=new Promise((reject,resolve)=>{
//  setTimeout(()=>{
//     console.log("hello");
//  },10000);
//  resolve(1);
// }
// );

let promise=new Promise((resolve,reject)=>{
    let success=false;
    if(success){
        resolve("Hiiiiiiii");
    }
    else{
        reject("fails");
    }
});
promise.then((msg)=>{
    console.log("promise message "+ msg);
}).catch((error)=>{
    console.log(error);
})