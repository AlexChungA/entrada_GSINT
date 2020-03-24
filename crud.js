var nombres=["Alex", "Fiorella"];
var tabla = document.getElementById("tabla");

document.addEventListener('DOMContentLoaded',mostrar(nombres));

function mostrar(array){
    for(var i=0; i < array.length; i++){
        var newRow = tabla.insertRow();
        var newCell1 = newRow.insertCell();
        var newCell2 = newRow.insertCell();
        newCell1.innerHTML = array[i];
        newCell2.innerHTML = "<button onclick = 'actualizar(this.parentNode.parentNode.firstChild.firstChild)'>Actualizar</button><button onclick='eliminar(this.parentNode.parentNode.rowIndex)'>Eliminar</button>";       
    }
}

function añadir(){
    nuevoContacto = document.getElementById("nombre").value;
    if(nuevoContacto){
        nombres.push(nuevoContacto);
        var tr = tabla.insertRow();
        var cellNombre = tr.insertCell();
        cellNombre.innerHTML=nuevoContacto;
        var cellFunc = tr.insertCell();   
        cellFunc.innerHTML="<button onclick = 'actualizar(this.parentNode.parentNode.firstChild.firstChild)'>Actualizar</button><button onclick='eliminar(this.parentNode.parentNode.rowIndex)'>Eliminar</button>";
        document.getElementById("nombre").value = "";
    }
}

function actualizar(nombre){
    actualizarContacto = document.getElementById("nombre").value;
    if(actualizarContacto){
        nombre.nodeValue = actualizarContacto;
        nombre.parentNode.innerHTML=actualizarContacto;
    }
}

function eliminar(indice){
    tabla.deleteRow(indice);
}