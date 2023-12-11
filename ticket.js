let totalPagar = document.getElementById('totalPagar');
let estudiante = 0.2;
let trainee = 0.5;
let junior = 0.85;
let ticket = 200;

function multEntradas(cantidad,ticket){
     let totalDescuento = cantidad*ticket;
     return totalDescuento;
}

function resumen(){
    let cantidad = document.getElementById('cantidad').value;
    let categoria = document.getElementById('categoria').value;
    if (categoria == "estudiante"){
        totalPagar.innerHTML = multEntradas(cantidad,ticket)*estudiante;
    } 
    else if (categoria == "trainee"){
        totalPagar.innerHTML = multEntradas(cantidad,ticket)*trainee;
    }
    else if (categoria == "junior"){
        totalPagar.innerHTML = multEntradas(cantidad,ticket)*junior;
    }
}

function borrar(){ 
    totalPagar.innerHTML = '';
}
