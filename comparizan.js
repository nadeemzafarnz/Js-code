const Id=Symbol(123)
const anotherId=Symbol(123)
console.log(Id===anotherId);
console.log(typeof Id);
console.log(typeof anotherId);

const scroe=true
let valueNumber=Number(scroe)

console.log(typeof valueNumber);
//console.log(valueNumber);

// let obj={
//     name:"nadeem",
//     age:19
// }
// let obj2=obj;
// obj2.name="zafar"
// console.log(obj.name);
// console.log(typeof obj);
// console.table(obj2.name);

let myFunction=function(){
    console.log("nadeem");
}
console.log(myFunction);
console.log(typeof(myFunction));

///typr of memory
// call by value, stack memory , we got the copy, origanal value can't be change
let name="nadeemzafar"
let anotherName=name;
anotherName="mohammad"
console.log(name);
console.log(anotherName);


//call by Reference , heap memeory , we got the origanal value,origanel value has change
let obj={
    name:"nadeem",
    age:19
}
let obj2=obj;
obj2.name="zafar"
console.log(obj.name);
console.log(typeof obj);
console.table(obj2.name);