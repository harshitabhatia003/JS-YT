//object using constructor 
const tinderUser = new Object()
 tinderUser.id = "123abc"
 tinderUser.name="Harshita"
 tinderUser.loggedIn=false
console.log(tinderUser)


const regularUser ={
    email:"some@gamil.com",
    fullname:{
        userfullname:{
            firstname:"h",
            lastname:"b"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)
const obj1={1:'a',2:'b'}
const obj2={1:"a",2:"b"}

// const obj3 = Object.assign({},obj1,obj2)


const obj3={...obj1,...obj2}
console.log(obj3)


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('loggedIn')); // to check vo key hai ki nahi 
