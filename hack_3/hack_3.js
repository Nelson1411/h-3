/**
* mediante el loop while agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [1,3,5]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];

let i = 0;
let len = arr.length-1;

while(i<=len){
    if(i==0 || i==2 || i==4){
        let propiedad = arr[i]
        result.push(Object.values(propiedad)[0])
        
    }
    i++
}
 
//console.log(result)
 
//export result
module.exports = result; 