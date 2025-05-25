//singleton 
//object.create


//object literals
//how to define a symbol in object 
//interview question
const mySym = Symbol("key1")

const JsUser={
    name:"Harshita",
    age:20,
    [mySym]:"mykey1",
    email:"harshita@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Friday"]
}

console.log(JsUser.name)
console.log(JsUser["email"])
console.log(JsUser[mySym])


JsUser.email="harshita@email.com" //changing the email
// Object.freeze(JsUser) freezeing the obk
JsUser.age=18

console.log(JsUser)

JsUser.greeting= function(){
    console.log("Hello jsusers ")
}

console.log(JsUser.greeting())