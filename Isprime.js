let num1=+prompt("enter the first number");
let num2=+prompt("enter the second number");
function isprime(num){
    if(num<2)return false;
    for(let i=2;i<=num/2;i++){
        if(num%i===0)return false;
    }
    return true;
}
function range(start,end){
    for(let i=start;i<=end;i++){
        if(isprime(i)){
            document.write(`${i}<br>`);
        }
    }
    
}
range(num1,num2);
