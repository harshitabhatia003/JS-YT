

function sayMyName(){
    console.log("Harshita");
    
}

sayMyName()

function addTwoNumbers(num1,num2){ //num1,num2 are parameters
    console.log(num1 + num2);
    
}

// addTwoNumbers(2,1) // 2,1 are arguements
// addTwoNumbers(2,"1")

function addTwoNumbers(num1,num2){ //num1,num2 are parameters
    let result = num1+num2
    return result
}

const result= addTwoNumbers(3,1)
console.log(result);

function logInUserMessage(username){// can also give default username as username = harshita
    if(username === undefined){
        console.log("Enter a username");
        return
        
    }
    return `${username} just logged in `
}
console.log(logInUserMessage("Harshita"));
console.log(logInUserMessage());

