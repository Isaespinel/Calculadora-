function prom() {
    var nombre = document.getElementById('nombre').value;
    var materia = document.getElementById('materia').value;
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;


   
    //console.log(nombre);


    var promedio = ((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3);


    if (nota1 > 10 || nota2 > 10 || nota3 > 10) {
        alert("Ingrese una nota entre el rango de 0 a 10");
    } else {

        if (promedio >= 7) {
            alert(nombre+ " felicidades Has aprobado con un promedio de " + promedio);
        } else {
            alert(nombre + " gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es " + promedio);
        }
    }

}