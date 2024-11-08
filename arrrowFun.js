

//this key used current contant

//object
const user={
    username:"nadeem",
    price:999,

    welcomeMessage:function(){
        //this used for current contant
        console.log(`${this.username}, welcome my website`)
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

//console.log(this);


// function chai(){
//   console.log(this)
//   let username="ali"
// console.log(this.username)//inside funtion this not used.output will undefined
// }


// chai()

// const chai= ()=>{
//     let username="ali"
//     console.log(this);//empty parathesis
// }
// chai()

//pure arrow funtion
///()=>{}  syntax of arrow function
const add = (num1,num2) =>{
    return num1 +num2
}
console.log(add(4,8));


// const add1 = (num1,num2) => ( num1 +num2)

const add1 = (num1,num2) => ( {user:"mola"})

console.log(add1(4,8));

// const  myArray=[2,3,4,5,5]
// // myArray.forEach(function (){})
// // myArray.forEach(()=>{})

//     //Immediately Innoked funtion express

   ( function nadeem(){
    //named iife
        console.log('DB Connect');
    })
    ();

    ((name)=> {
        // simple IIFE
        console.log(`MyDB Connect now ${name}`);
    })('nadeemzafar')