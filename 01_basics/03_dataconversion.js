let scoreStatus = "true"

console.log(typeof scoreStatus);
console.log(typeof (scoreStatus));

let valueInNumber = Number(scoreStatus)
console.log(typeof valueInNumber)

console.log(valueInNumber)
//if we change 33 to 33abc it will still convert it to number 
//if we check it again it will show NaN
//thats why dont rely on number in this case
//incase of score = null it will output 0 
//incase of undefined it shows NaN
//incase of boolean value is output 1/0

//let booleanuserStatus = Boolean(userStatus)
//console.log(booleanuserStatus);