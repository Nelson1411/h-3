/**
* en result, reflejar con un objeto literal, la integración
* de los datos en un sola estructura
*
* 1) la propiedad name, modificar el valor a capital
* 2) la propiedad roles, implementar en 1 array con los items en mayúscula
* 3) la prapiedad skills, solo los items HTML y CSS van en mayúscula, del resto en capital
* 4) la porpiedad levels, transformar los valores de l-1 en L1
*  
*
* output => {
    id:100,
    name:"Foo",
    roles:["ADMIN","SUPER_USER","USER"],
    skills:["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy"],
    levels:[{LEVEL:"L1"},{LEVEL:"L2"}, {LEVEL:"L3"}]
}
*/
let foo = {
    id:100,
    name:"foo",
    roles:["admin"],
    skills:["javascript","html","css","python","flask","react","redux"],
    alias:"super alias"
};
let roleSuperUser = "SUPER_USER";
let roleUser = "USER";
let skills = ["git","github","docker","deploy"];
let levels = [{LEVEL:"l-1"},{LEVEL:"l-2"},{LEVEL:"l-3"}];
let result;

result=foo;

cambio1=result.name[0].toUpperCase() + result.name.slice(1);
result.name=cambio1;

result.roles.push(roleSuperUser, roleUser);

result.roles=result.roles.map(function(item) {
    if(item == "admin") {

        return item.toUpperCase()

    };

    return item

});

let i = 0;
let lenSK = skills.length-1;

for(i;i<=lenSK;i++) {

    let NuevoValor = skills[i]

    if(i == 0) {
        result.skills.unshift(NuevoValor)
    };

    if( i == 1){
        result.skills.splice(i,0,NuevoValor)
    };

    if(i == 2){
        result.skills.splice(5,0,NuevoValor)
    };

    if( i == 3){
        result.skills.push(NuevoValor)
    }; 
};

result.skills = result.skills.map(function(item,i) {

    if(i == 3 || i == 4){
        return item.toUpperCase()
    };

    return item[0].toUpperCase() + item.slice(1)
});

let len = levels.length-1;
let o = 0;
for(o;o<=len;o++){
    
    let propiedad = levels[o]
    palabra=Object.values(propiedad)[0]
    
    if(o==0){
        palabra="L1"
        propiedad.LEVEL=palabra
    };

    if(o==1){
        palabra="L2"
        propiedad.LEVEL=palabra
    };
    if(o==2){
        palabra="L3"
        propiedad.LEVEL=palabra
    };
    
    
    
};

result.levels=levels;

delete result.alias;

//console.log(result);

//export result
module.exports = result; 