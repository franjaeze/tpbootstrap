var getData = function(){
/*
    var name =document.getElementById('Nombre').value;
    var apellido =document.getElementById('Apellido').value;
    if (name = ""){
        document.getElementById('name').focus();
    } else if (apellido = ""){
        document.getElementById('surname').focus();
    } else if (Cantidad = ""){
        document.getElementById('amount').focus();
         } else 

}  */

var x = parseInt(document.getElementById('amount').value) ;
var y = document.getElementById('typee').value;
console.log(y)

if (y==1){
    document.getElementById('result').innerHTML = 40 * x; 
}else if (y==2){
    document.getElementById('result').innerHTML = 100 * x; 
} else if (y==3){ 
    document.getElementById('result').innerHTML = 170 * x; 
} else { document.getElementById('result').innerHTML=200 * x;

}}

function limpiar() {

    document.getElementById('miform').reset();
}