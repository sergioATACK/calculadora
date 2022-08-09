// OBTENEMOS LA REFERENCIA AL DIV CON id=Resultado
var R=document.getElementById("Resultado");
// SE CREA FUNCION PARA CAMBIAR LAS PROPIEDADES DEL DIV CON id=Resultado
function Propiedades (){
    R.style.borderStyle="solid";
    R.style.textAlign="center";
    R.style.fontFamily="Dangrek";
    R.style.fontSize="30px";
}

function Obtenervalores (){
    // OBTENEMOS EL VALOR DEL INPUT TEXT CON  id=numero1
    var n1=document.getElementById("numero1").value;
    // POR OBTENERSE COMO VARIAABLE TIPO CADENA CONVERTIMOS A ENTERO DE BASE 10
    n1=parseInt(n1,10);
    // OBTENEMOS EL VALOR DEL INPUT TEXT CON  id=numero2
    var n2=document.getElementById("numero2").value;
    // POR OBTENERSE COMO VARIABLE TIPO CADENA CONVERTIMOS A ENTERO DE BASE 10
    n2=parseInt(n2,10);
    return[n1,n2];
}

function Sumar (){
    // LLAMAR FUNCION OBTENERVALORES
    [n1,n2]=Obtenervalores();
    // LLAMAR FUNCION PROPIEDADES
    Propiedades();
    // PODEMOS USAR n1 y n2 EN LA FUNCION YA QUE SON VARIABLES GLOBALES
    // DEJAMOS EL RESULTADO EN EL DIV QUE AHORA LO MANEJAMOS CON LA VARIABLE R
    R.innerHTML="La suma de los números es: "+(n1+n2);
}

function Restar (){
    // LLAMAR FUNCION OBTENERVALORES
    [n1,n2]=Obtenervalores();
    // LLAMAR FUNCION PROPIEDADES
    Propiedades();
    // DEJAMOS EL RESULTADO EN EL DIV QUE AHORA LO MANEJAMOS CON LA VARIABLE R
    R.innerHTML="La resta de los números es: "+(n1-n2);
}

function Multiplicar (){
    // LLAMAR FUNCION OBTENERVALORES
    [n1,n2]=Obtenervalores();
    // LLAMAR FUNCION PROPIEDADES
    Propiedades();
    // DEJAMOS EL RESULTADO EN EL DIV QUE AHORA LO MANEJAMOS CON LA VARIABLE R
    R.innerHTML="La multiplicación de los números es: "+(n1*n2);
}

function Division (){
    // LLAMAR FUNCION OBTENERVALORES
    [n1,n2]=Obtenervalores();
    // LLAMAR FUNCION PROPIEDADES
    Propiedades();
    if (n2===0)
        d="Error: division por 0";
    else
        d=n1/n2;
    // DEJAMOS EL RESULTADO EN EL DIV QUE AHORA LO MANEJAMOS CON LA VARIABLE R
    R.innerHTML="La division de los números es: "+(d);
}

function Potenciacion (){
    // LLAMAR FUNCION OBTENERVALORES
    [n1,n2]=Obtenervalores();
    // LLAMAR FUNCION PROPIEDADES
    Propiedades();
    // DEJAMOS EL RESULTADO EN EL DIV QUE AHORA LO MANEJAMOS CON LA VARIABLE R
    R.innerHTML="La potencia de los números es: "+(Math.pow(n1,n2));
}

function Concatenacion (){
    // EXTRAEMOS LOS NUMEROS SIN CONVERTIRLOS A ENTERO PARA CONCATENARLOS
    n1=document.getElementById("numero1").value;
    n2=document.getElementById("numero2").value;
    // LLAMAR FUNCION PROPIEDADES
    Propiedades();
    // DEJAMOS EL RESULTADO EN EL DIV QUE AHORA LO MANEJAMOS CON LA VARIABLE R
    R.innerHTML="La concatenación de los números es: "+(n1+n2);
}

function Instruccion_if (){
    [n1,n2]=Obtenervalores();
    // LLAMAR FUNCION PROPIEDADES
    Propiedades();
    // DEJAMOS EL RESULTADO EN EL DIV QUE AHORA LO MANEJAMOS CON LA VARIABLE R
    R.innerHTML="Ejemplo con instrucción if usando sweetalert";
    if (n1>n2){
        swal("Mensaje","n1 es mayor a n2");
}
    else if (n1==n2){
        swal("Mensaje","n1 es igual a n2", "success");
    
}
    else{
        swal({
            title: "Mensaje",
            text: "n1 es menor a n2",
            icon: "info",
            button: "Salir",
        });
    }
}

function Instruccion_for (){
    [n1,n2]=Obtenervalores();
    // LLAMAR FUNCION PROPIEDADES
    Propiedades();
    contador=0;
    // USAMOS EL FOR (PARA)
    for (i=n1;i<=n2;i++){
        contador=contador+1;
    // DEJAMOS EL RESULTADO EN EL DIV QUE AHORA LO MANEJAMOS CON LA VARIABLE R
    R.innerHTML="Los ciclos que realizo el for fueron: "+contador;
}

function Instruccion_switch (){
   [n1,n2]=Obtenervalores();
   // LLAMAR FUNCION PROPIEDADES
   Propiedades();
    // DEJAMOS EL RESULTADO EN EL DIV QUE AHORA LO MANEJAMOS CON LA VARIABLE R
    R.innerHTML="Ejemplo de instruccion switch usando sweetalert";
    switch(n1){
        case 1:
            swal("Mensaje", "n1 tiene un valor de 1");
            break;
        case 2:
            swal("Mensaje", "n1 tiene un valor de 2", "success");
            break;
        default:
            swal({
                title: "Mensaje",
                text: "n1 tiene un valor mayor de 2",
                icon: "info",
                button: "Salir",
            });
            break;}
        }
}
