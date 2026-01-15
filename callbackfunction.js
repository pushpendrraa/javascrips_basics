function car(name,callback){
    console.log(`${name} start car`);
    callback();
}

function run(car){
    console.log(`pushpendra drive ${car}`)
}


car("Pushpendra",()=>run("Rolls Royce"));