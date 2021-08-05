let number = process.argv;
console.log('Number taken as input is : '+ number[2]);
let i = 0;
while( i <= number[2]) {
    console.log(Math.pow(2,i));
    i++;
}
