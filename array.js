let num=[22,33,44,55];
console.log(num);
console.log(num.length);
for(let i of num){
    console.log(i);
}
let cities=["Hyderabad","Andhra","Bangalore"];
for(let city of cities){
    console.log(city.toUpperCase());
}
let arr=[10,20,30,40];
let n = arr.length;
let sum=0;
for(let i=0;i<n;i++){
    sum=sum+arr[i];
}
let avg=sum/n;
console.log("average is:",avg);
let i=0;

for(let val of arr){
    let offer=val/10;
    arr[i]=arr[i]-offer;
    console.log(`value after offer is:${arr[i]}`);
     i++;

}
//push is used to add element at the end of the array
//pop is used to remove the last element of the array
//toString is used to convert array to string
let fruits=["apple","banana","orange"];
console.log(fruits);
fruits.push("kiwi");
console.log(fruits);
fruits.pop();
fruits.pop();
console.log(fruits);
let nu=[3,3,3,4];
let str=nu.toString();
console.log(str);
//concat is used to merge two or more arrays
let arr1=[2,3,4,5];
let arr2=[4,5,6,7];
let arr3=["a","b","c"];
let concat=arr1.concat(arr2,arr3);
console.log(concat);
//unshift is used to add element at the beginning of the array
//shift is used to remove the first element of the array
let names=["ameena","divya","sneha"];
names.unshift("ruby");
console.log(names);
let val=names.shift();
console.log("deleted",val);
console.log(names);
//slice method is used to extract a portion of an array. arr.slice(start,end which is not included)
let numss=[1,2,3,4,4,5];
let sliced=numss.slice(2,4);
console.log(numss);
console.log(sliced);
//splice method is used to add or remove elements from an array. arr.splice(start,deleteCount,item1,item2,...)
let numbers=[22,33,44,55,66,77];
numbers.splice(2,3,100,200,300);
console.log(numbers);
function sumOfTwo(a,b){
    console.log(a+b);
}
sumOfTwo(111,333);
const arrowMult=(a,b) => {
    console.log(a*b);
};
arrowMult(10,20);