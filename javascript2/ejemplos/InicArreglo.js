//fig 10.4: inicarreglo.js
//crear dos arreglos, inicializar sus elementos y mostrarlos
function iniciar(){
    var n1 = new Array(5); //asignar un arreglo de cinco elementos
    var n2 = new Array(); //asignar el arreglo vacio

    //asignar valores a cada elemento del arreglo n1
    var longitud = n1.length; //obtener la longitud del arreglo un vez antes del ciclo

    for(var i = 0; i < n1.length; ++i){
        n1[i] = i;
    } //fin de for

    //crear e iniciar cinco elementos en el arreglo n2
    for(i = 0; i < 5; ++i){
        n2[i] = i;
    } //fin de for

    imprimirArreglo("Arreglo n1:", n1, document.getElementById("salida1"));
    imprimirArreglo("Arreglo n2:", n2, document.getElementById("salida2"));
} //fin de la funcion iniciar

//imprime el encabezado seguido de una tabla de dos columnas
//que contienen los indices y elementos de "elArreglo"
function imprimirArreglo(encabezado, elArreglo, salida){
    var contenido = "<h2>" + encabezado + "</h2><table>" +
    "<thead><th>Indice</th><th>Valor</th></thead><tbody>";

    //imprime el indice y el valor de cada elemento del arreglo
    var longitud = elArreglo.length; //obtiene la longitud del arreglo una vez antes del ciclo

    for(var i = 0; i <longitud; ++i){
        contenido += "<tr><td>" + i + "</td><td>" + elArreglo[i] +
        "</td></tr>";
    } //fin de for

    contenido += "</tbody></table>";
    salida.innerHTML = contenido; //coloca la tabla en el elemento salida
} //fin de la funcion imprimirArreglo

window.addEventListener("load", iniciar, false);