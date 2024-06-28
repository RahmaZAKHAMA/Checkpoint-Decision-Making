let base = prompt("Enter the base number");
let exponent = prompt("Enter the exponent");

const power=(a,b)=>
{
if(b==0)
    return 1;
return a*power(a,b-1);
}
power(base, exponent);