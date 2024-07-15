
function btnclick(test){
    var a = test;
   document.querySelector('#in').value+=a

}
function addnum(val){
    document.querySelector('#in').value+="+"

}
function subnum(val){
    document.querySelector('#in').value+="-"

}
function multnum(val){
    document.querySelector('#in').value+="*"

}
function divnum(val){
    document.querySelector('#in').value+='/'

}
function clearscrn(){
    document.querySelector('#in').value=""
}

function equalclick(){
    var a=String(document.querySelector('#in').value);
    var c=eval(a);
    var d=c;
    document.querySelector('#in').value=c;

}
function k(){
    var neg=document.querySelector('#in').value*-1;
    document.querySelector('#in').value=neg;
}
function del(){
    const display=document.querySelector('#in');
    display.value=display.value.slice(0,-1);
}