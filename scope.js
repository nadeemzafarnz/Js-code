 var c=300
 let a=300
if(true)
{
    let a=10
    const b=20
     console.log("Inner: ",a);

}
console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const  email="zafar"
    function two(){
        const website="www.google"
        console.log(email);
    }

//console.log(website);
 two()
}
one()


if(true){
    const username="nadeem"
    if(username==="nadeem"){
        const website="yutube"
        console.log(username+website);
    }
   // console.log(website);
}
//console.log(username);

//example new Interesting

console.log(addOne(5));
function addOne (num){
    return num + 1

}
//console.log(addOne(5));
//console.log(addTwo(5));
const addTwo=function(num){ 
     //expression or variables
    return num + 2 
}
addTwo(5)