let str="Ameena Tarfia";
console.log(str.length);
console.log(str[4]);
let out=`My name is ${str}`;
console.log(out);
let random="randomly";
random.toUpperCase();
console.log(random);//This prints the original string we need to assign it another string using uppercase then it is going to change
let upper=random.toUpperCase();
console.log(upper);
//Strings are immutable in javascript we cannot change the original string but we can create a new string using the original string a
let lower=random.toLowerCase();
console.log(lower);
let trim=random.trim();
console.log(trim); // to remove the extra spaces from the string
console.log(random.slice(1,4)); // to extract a part of the string
console.log(str.concat(random));
console.log(str.charAt(3));
let name=prompt("Enter your username:");
let result=`@${name}${name.length}`;
console.log(result);


const pro={
    price:33,
    name:"laptop"
};
let output=`The price of ${pro.name} is ${pro.price}`;
console.log(output);
//Arrays
let numbers=[11,12,13,14,15];
console.log(numbers);