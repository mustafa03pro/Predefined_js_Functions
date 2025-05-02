let arr=[];
let sum=0;
let n;
n=+prompt("entyer the array size");
for(let i=0;i<n;i++){
    arr[i]=+prompt("enter the array value");
    sum=sum+arr[i];

}
console.log("the sum of the array"+sum);