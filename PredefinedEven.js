let arr=[];
let n=+prompt("enter the array size");
for(let i=0;i<n;i++){
    arr[i]=+prompt("enter the array value");
    

}
let even=arr.filter(item =>item%2==0);
let odd=arr.filter(item =>item%2!=0);
console.log(`even elements ${even}`);
console.log(`odd elements ${odd}`);