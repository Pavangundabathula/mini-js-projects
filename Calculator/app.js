var p,q,r;
var a,b;
function submit(){
    p=document.getElementById("num1").value;
    q=document.getElementById("sym").value;
    r=document.getElementById("num2").value;
    var ans
    p=Number(p);
    r=Number(r);
    switch(q){
        case '+':
            ans = p + r;
            break;
        case '-':
            ans = p - r;
            break;
        case '*':
            ans=p*r;
            break;
        case '/':
            ans=p/r;
            break;
        case '%':
            ans=p%r;
            break;
        default:
            alert('enter only one of four symbols');
            break;
    }
    document.getElementById("changecon").innerText=p+" "+q+" "+r+" = "+ans;
}