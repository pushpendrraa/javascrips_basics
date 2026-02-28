async function api() {

     //get request-ascyn
   let responce= await fetch('https://jsonplaceholder.typicode.com/todos/1');
   //parse json -ascyn

   let data=await responce.json();
   console.log(data.title);
    
}
api();