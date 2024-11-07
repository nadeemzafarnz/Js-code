
//symbol declared


const mySym=Symbol("Key1")
const JsUser={
    name:"nadeem",
    "Full Name":"Mohamad nadeem",
    [mySym]:"myKey1", 
      age : 19,
     email:"nadeem@gmail.com",
     isLoggedIn: false,
     lastLoggingDay:["Monday","Saturday"]

}
//how you asscess object
console.log(JsUser.email);
console.log(JsUser["Full Name"]);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

JsUser.email="zafar@gmail.com"//value Override
//Object.freeze(JsUser)//obj lock
JsUser.email="razee@gmail/com"
//console.log(JsUser.email);

//function add here ,as a variable

JsUser.greeting=function(){
    //console.log("Hello js user");
}

JsUser.greetingTwo=function(){
  //  console.log(`hello user two , ${this.name}`);//String interPulation
}
//console.log(JsUser.greetingTwo());
//console.log(JsUser.greeting());


const tinderUse=new Object()//singleton
//const tinderUser={}//non singleton

 tinderUse.id="123nad4"
 tinderUse.name="Sammy"
 tinderUse.isLogging=false
//console.log(tinderUse);
//console.log(tinderUser);

//nesting object

const regularUser={
    email:"Mohammad@gmail.com",
    fullname:{
        userfullname:{
            firstname:"nadeem",
            lastName:"zafar"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

//combine Object 

const target = {1:"a" , 2:"b"}
const source = {3:"d" , 4:"f"}
//const obj5={obj3,obj4} obj assing() return target Object 
const returnTarget=Object.assign({},target,source)//combine all object data 
//console.log(target);//array same problem

//console.log(returnTarget===target);

const obj1={...target,...source}//speard data
//console.log(obj1);

//database value for db;
[{}]//array object
const user=[{
    id:1,
    email:"xxx@gmail.com"
},
{
    id:2,
    email:"xx222x@gmail.com"
},
{
    id:1,
    email:"xxx@gmail.com",
},
{
    id:1,
    email:"xxx@gmail.com",
},
{
    id:1,
    email:"xxx@gmail.com",
}

]

user[1].email
console.log(tinderUse);
console.log(Object.keys(tinderUse));
console.log(Object.values(tinderUse));
console.log(Object.entries(tinderUse));

console.log(tinderUse.hasOwnProperty('name'));