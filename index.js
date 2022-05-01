function writeCards(names, string){
let results = []
for (let name of names){
    console.log(name)
    results.push(`Thank you, ${name}, for the wonderful ${string} gift!`)
}
return results
}
function countDown(number){
while (number > 0){
    console.log(number)
number-=1
}
console.log(number)
}





// let countup = 0;
// while (countup < 10) {
//   console.log(countup++);
// }