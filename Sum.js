const sum=(a,b)=>a+b;
console.log(sum(20, 40))


console.log(process.argv)

const [, , num1,num2]=(process.argv)

console.log(sum(+num1,+num2))

const marks=[50,75,85,95,100]

console.log(Math.max(...marks))