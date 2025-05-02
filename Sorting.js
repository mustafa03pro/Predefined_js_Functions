let arr=[];
let arr1=[];

let sum=0;
let n;
n=+prompt("entyer the array size");
for(let i=0;i<n;i++){
    arr[i]=+prompt("enter the array value");
    arr.sort();
    arr1=[...arr];//for coping of array
    arr1.sort((a,b) =>b-a);
   

}

console.log("the sum of the array "+arr);
console.log("the desending order array "+arr1);
for(let i=n;i!=0;i--){
    console.log(arr[i]);
}
//console.log("the odd array"+odd);