let promise=new Promise((reject,resolve)=>{
 setTimeout(()=>{
    console.log("hello");
 },10000);
 resolve(1);
}
);