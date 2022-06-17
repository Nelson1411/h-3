/**
* modificar los valores de las propiedades (name y role) del objeto result, 
* name -> capital,
* role -> upper
* 
* 
* output => {
    id:100,
    name:"Foo",
    role:"ADMIN"
}
*/
let result = {
    id:100,
    name:"foo",
    role:"admin"
};
let cambio1 = result.name[0].toUpperCase() + result.name.slice(1);
result.name= cambio1;

let cambio2 = result.role.toUpperCase();
result.role = cambio2;

//console.log(result);

//export result
module.exports = result; 
