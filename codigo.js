
var num = document.getElementById("num");
var nombre = document.getElementById("nombre");
var numero = document.getElementById("numero");
var boton = document.getElementById("boton");
var comentarios = document.getElementById("comenta2");
var c1 = document.getElementById("c1");
var c2 = document.getElementById("c2");
var c3 = document.getElementById("c3");
var lblnombre = document.getElementById("lblnombre");
var lblnum = document.getElementById("lblnum");


document.getElementById("num").onkeyup = caracter;

document.getElementById("boton").onclick = addElemento;


function addElemento(){ 
    if(validar()){
        if(c1.innerHTML==""){
            c1.style.backgroundColor = "#5b8bf0";
            c1.style.borderRadius = "30px 30px 30px 30px";
            c1.style.border = "5px #3759a6 groove";
            c1.innerHTML = mensaje();
            nombre.value = "";
            num.value = "";
        }else{
            if(c2.innerHTML==""){
                c2.style.backgroundColor = "#4071f1";
                c2.style.borderRadius = "30px 30px 30px 30px";
                c2.style.border = "5px #3759a6 groove";
                c2.innerHTML = mensaje();
                nombre.value = "";
                num.value = "";
            }else{
                if(c3.innerHTML ==""){
                    c3.style.backgroundColor = "#4071f1";
                    c3.style.borderRadius = "30px 30px 30px 30px";
                    c3.style.border = "5px #3759a6 groove";
                    c3.innerHTML = mensaje();
                    nombre.value = "";
                    num.value = "";
                }else{
                    c1.innerHTML = c2.innerHTML;
                    c2.innerHTML = c3.innerHTML;
                    c3.innerHTML = mensaje();
                    nombre.value = "";
                    num.value = "";
                }
            }
        }
    }
}

function caracter(){
    var cantidad = String(num.value).length;
    if(parseInt(cantidad)<200){
        numero.style.color = "black";
        numero.innerHTML = parseInt(cantidad)+"/200";
    }else{
        numero.innerHTML = parseInt(cantidad)+"/200";
        numero.style.color = "red";
    }
    
}

function mensaje (){
    var fecha = new Date();
    var todo = nombre.value + "   (" + fecha.getDate() + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear()+")."+
                "<br>" + "Comentario: " + num.value;
    return todo;
    
}

function validar(){
    if(nombre.value==""){
        lblnombre.innerHTML = "Debe ingresar nombre.";
        lblnum.innerHTML = "";
        return false;
    }else{
        lblnombre.innerHTML = "";
        if(num.value == ""){
            lblnum.innerHTML = "Debe ingresar comentario.";
            return false;
        }else{
            lblnum.innerHTML = "";
            return true;
        }
    }
}
