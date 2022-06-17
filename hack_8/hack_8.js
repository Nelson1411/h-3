/**
* agregar las propiedades del objeto foo al array result, 
* cada propiedad dentro de un array, con 2 items, 
* que se representa con la clave y el valor
* debes utilizar for ó while
*
* 
* output => [["id",100], ["name","foo"], ["role","admin"]]
*/
let foo = {
    id:100,
    name:"foo",
    role:"admin"
};
let result = [];

let Propiedades;
let Valores;

Propiedades=Object.keys(foo);
Valores=Object.values(foo);

let i = 0;
let lenA = Object.keys(foo).length-1;
let j = 0;
let lenB = Object.values(foo).length-1;

for( i ; i<=lenA ; i++ ) {
    
    for( j; j<=lenB ; j++ ){
        let Propiedad = Propiedades[i]
        let Valor = Valores[j]
        result.push([Propiedad, Valor])
    };
    
};

//console.log(result);
//export result
module.exports = result; 