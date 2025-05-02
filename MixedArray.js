let arr=[];
let sum=0;
let n;
n=+prompt("entyer the array size");
for(let i=0;i<n;i++){
    //arr[i]=prompt("enter the array vlaues")
    val=prompt("enter the array value");
    if (!isNaN(val) && val.trim() !== "") {
        arr[i] = +val;  // store as number
    } else {
        arr[i] = val;   // store as string
    }
    

}
let num=[];
let str=[];
num=arr.filter(item =>typeof item==="number");
str=arr.filter(item=>typeof item==="string");



console.log("the numbers array "+num);
console.log("the string "+str);