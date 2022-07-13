const promise = new Promise(function(resolve, reject){
    resolve('Hey!')
});

const vacas = 5;

const countVacas = new Promise(function(resolve, reject){
    if(vacas > 10) {
        resolve(`Si tenemos ${vacas} vacas suficientes`);
    } else {
        reject('No hay vacas Suficientes');
    }
});

countVacas.then((result) =>{
    console.log(result);
}).catch((error) =>{
    console.log(error);
}).finally(()=>console.log('finally'));