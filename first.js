let a=5;
console.log(a);
const product={
    name:"mobile",
    price:342355,
    invest:454654,
    feature:"advanced"
};
console.log(product);
product.name="television";
let age=22;
//Whenever we are using let we cannot redeclare any variable twice or thrice once we declare we need to use only the name of a variabale we don;t need to use let again
age=22;
console.log(age);
const name="asadunnisa sadiya";
//Whenever we are using const we cannot redeclare or we cannot update the value once it is const it cannot change only the object declared with const is only changed
console.log(name);
let criteria=44;
if(criteria==44){
    console.log("It is true");
}
let mode="dark";
mode="light";
let color;
if(mode=="dark"){
    color="black";
}
else if(mode=="light"){
    color="white";
}
else{
    color="no color";
}
console.log(color);
const exp="apple";
switch(exp){
    case "banana":
        console.log("It is banana:");
        break;
    case "apple":
        console.log("It is apple:");
        break;
    default:
        console.log("No fruit found");
}
let namess=prompt("Enter your name:");
console.log(namess);
//prompt only works in the browser it will not woek in the node js environment
let num=prompt("Enter a number:");
if(num%5==0){
    console.log("It is divisible by 5");
}
else{
    console.log("It is not divisible by 5");
}
let score=prompt('Enter your score:');
if(score >=90 && score<=100){
    console.log("Grade A");
}
else if(score>=60 && score<=80){
    console.log("Grade B");
}
else{
    console.log("Grade C");
}   
let sum=0;
for(let i=1;i<=5;i++){
    sum=sum+i;
}
console.log("sum:",sum);
let str="Mango";
//for of loop is used to iterate over the array or a string
for(let i of str){
    console.log(i);
}
//To return keys of an object we use for in loop

const student={
    name:"Asadunnisa",
    age:22,
    cgpa:9.99,
    attendance:75
};
for(let key in student){
    console.log(key,student[key]);
}
let gamenum=7;
let guessnum=prompt("Guess the number to enter into the game:");
while(guessnum!=gamenum){
    guessnum=prompt("Wrong guess!Enter the correct number:");
}
console.log("Hurray!you entered the game now");