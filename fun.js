//most important used in the javascript in function.
// conslore.log("N");
// conslore.log("a");
// conslore.log("d");
// conslore.log("e");
// conslore.log("e");
// conslore.log("m");
//function myFunction(){}

function sayMyname(){
console.log("a");
console.log("b");

console.log("c");
console.log("d");

}
//sayMyname()

// function addTwoNumber(num1,num2){
//     console.log(num1+num2);
// }

// function addTwoNumber(num1,num2){
//   // console.log(num1+num2);
//     //let result1=num1+num2;
    
//     return num1+num2;
// //console.log("nadeem");
// }
// const result =addTwoNumber(3,5);
// //console.log("Result",result);

// function logUserMessage(username="sam"){
//     if(username=== undefined){  //!username
//    console.log("Plase inthe valid name");
//    return;
//     }
// return `${username} just loged in`
// }
// logUserMessage("nadeem");//no value print
// console.log(logUserMessage("nadeem"))


//user add number in comecial website
function  addCardPrice(val1, val2, ...num1){
   return num1
}
//console.log(addCardPrice(2,5,7,99,999,999))  //rest operator used  //...rest operator //... sperade methos


const user={
    username:"nadeem",
    price:19
}
function handleObj(anyobject){
    console.log(`Username is ${anyobject.username} and price is${anyobject.price}`);
}

//handleObj(user)
handleObj({
    username:"sam",
    price:90
})

const myNewArray =[222,333,55,666]
function returnSecound(getArray){
    return getArray[2]
}
console.log(returnSecound(myNewArray));
