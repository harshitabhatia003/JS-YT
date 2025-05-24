const studentId=4
let studentName="Harshita"
var studentSub="Maths"


console.table([studentId,studentName,studentSub])

// dont use var because of issues in block scope and functional scope//
//now changing the value //
studentName="HB"
studentSub="Art"
console.table([studentId,studentName,studentSub])
