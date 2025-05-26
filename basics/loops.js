//for
for (let i = 1; i <10; i++) {
    const element = i;
    console.log(i*i);
      //block scope
    
}

//break and continue
for (let i = 0; i < 6; i++) {
    if(i==5){
        console.log("deteced 5 breaking the loop");
        break
    }
    console.log(`Value of i is ${i}`);
}

for (let i = 0; i < 10; i++) {
    if(i==5){
        console.log("\ndeteced 5 skipping the number");
        continue
    }
    console.log(`Value of i is ${i}`);
}

//while do-while
let i=0
while(i<=5){
    console.log("Hii");
    i=i+1
}