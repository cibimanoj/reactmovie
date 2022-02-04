console.log("hello 🌏")
const double=(num)=>num*2
console.log(double(10))
console.log(process.argv)
const [, , num1]=(process.argv)
console.log(num1)
console.log(double(num1))