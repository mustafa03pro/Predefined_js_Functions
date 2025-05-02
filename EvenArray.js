let arr=[];
let even=[];
let odd=[];
let sum=0;
let n;
n=+prompt("entyer the array size");
for(let i=0;i<n;i++){
    arr[i]=+prompt("enter the array value");
    if(arr[i]%2==0){
        even.push(arr[i]);

    }
    else{
        odd.push(arr[i]);
    }

}
console.log("the even array: "+even);
console.log("the odd array: "+odd);