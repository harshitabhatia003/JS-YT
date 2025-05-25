function calculateCartPrice(...num1){//rest operator jitne b items mil rhe h pack krdo bundle mai 
    return num1
}

console.log(calculateCartPrice(200,400,500));

/*function calculateCartPrice(val1,val2,...num1){
}
val1 aur val2 mai phele ki 2 values jayege rest will go to num1 
*/

const user={
    username:"harshita",
    price:200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

handleObject(user)

handleObject({
    username:"hb",
    price:199
})

