const btn=document.querySelectorAll('button');
const tex=document.querySelector('.result-block');
const array=[];
function check(n){
    let y=true;
    array.forEach((data) =>{
        if(data==n){
            y=false;
        }
    });
    return y;
}
function result(n){
    if(array.length!=0){
        if(btn[0].innerHTML===n && btn[1].innerHTML===n && btn[2].innerHTML===n || btn[3].innerHTML===n && btn[4].innerHTML===n && btn[5].innerHTML===n || btn[6].innerHTML===n && btn[7].innerHTML===n && btn[8].innerHTML===n ){
            return true;
        }
        else if(btn[0].innerHTML===n && btn[3].innerHTML===n && btn[6].innerHTML===n || btn[1].innerHTML===n && btn[4].innerHTML===n && btn[7].innerHTML===n || btn[2].innerHTML===n && btn[5].innerHTML===n && btn[8].innerHTML===n ){
            return true;
        }
        else if(btn[0].innerHTML===n && btn[4].innerHTML===n && btn[8].innerHTML===n ||btn[2].innerHTML===n && btn[4].innerHTML===n && btn[6].innerHTML===n ){
            return true;
        }
        else{
            return false;
        }
    }
}
function restart(){
    for(i=0;i<btn.length;i++){
        btn[i].innerHTML='-';
        array.pop();
    }
    
}
function func(n){
    if(check(n)){
        btn[n].innerHTML='X';
        array.push(n);
        if(result('X')){
            tex.innerHTML="<p>Result: You Win </p>";
            restart();
            return ;
        }
        var computermove=Math.floor((Math.random()*8));
        console.log(computermove);
        if(array.length!=9){
            while(!check(computermove)){
                computermove=Math.floor((Math.random()*8));
            }
            btn[computermove].innerHTML='O';
            array.push(computermove);
            if(result('O')){
                tex.innerHTML="<p>Result: Computer Win </p>";
                restart();
                return ;
            }
        }
        else{
            tex.innerHTML="<p>Result: Tie </p>";
            restart();
            return ;
        }
    }
    else{
        alert("Select another one");
    }
    
}