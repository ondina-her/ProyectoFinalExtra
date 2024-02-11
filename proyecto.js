//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%
var propiedad_recargo = 0.35; // 35%
var salario_recargo = 0.05; // 5%

var usuario = ""


while (true){
  
  usuario = prompt("¿Quiere generar una cotización?", "Salir/Generar")

  while (usuario != "Salir"){
    
var recargo = 0
var recargo_edad = 0
var recargo_conyuge = 0
var recargo_hijos = 0
var recargo_propiedades = 0
var recargo_salario = 0
var recargo_total = 0

//Precio final 
var precio_final = 0;  
    
//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
var edad_numero = parseInt(edad)


//Aquí debe calcular el recargo total basado en las respuestas ingresadas

if(edad_numero < 18){
  
  alert ("No es un número válido")
  break;
}else{
  
    var casado = prompt("¿Está casado actualmente?", "si, no")
    //Comprobamos la edad del cónyuge, solamente si se está casado/a
    var edad_conyuge
      if("SI" == casado.toUpperCase()){
        edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
      }
      //convirtiendo las edades ingresadas a números 

      var edad_conyuge_numero = 0
      //convirtiendo la edad del cónyuge si se esta casado/a
      if("SI" == casado.toUpperCase()){
      edad_conyuge_numero = parseInt(edad_conyuge)
      }

      var hijos = prompt("¿Tiene hijos o hijas?","si, no")
      //Comprobamos la cantidad de hijos solamente si los tienen
      var cantidad_hijos = 0;
      /**
      * 1. convierta la cantidad de hijos a numero
      */
      if("SI" == hijos.toUpperCase()){
        cantidad_hijos = prompt("¿Cuantos hijos tiene?")
        cantidad_hijos = parseInt(cantidad_hijos)
      }
      
      var propiedades = prompt("¿Tiene propiedades?", "si, no")
      //Comprobamos la cantidad de hijos solamente si los tienen
      var cantidad_propiedades = 0;
      /**
      * 1. convierta la cantidad de hijos a numero
      */
      if("SI" == propiedades.toUpperCase()){
        cantidad_propiedades = prompt("¿Cuantas propiedades tiene?")
        cantidad_propiedades = parseInt(cantidad_propiedades)
      }
  
      var salario = prompt("¿Tiene un salario?", "si, no")
      //Comprobamos la cantidad de hijos solamente si los tienen
      var cantidad_salario = 0;
      /**
      * 1. convierta la cantidad de hijos a numero
      */
      if("SI" == salario.toUpperCase()){
        cantidad_salario = prompt("¿Cual es su salario?, Ingrese números")
        cantidad_salario = parseInt(cantidad_salario)
      }
  
      //Aquí es donde debe de calcular los recargos y el valor final
    //Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
      if(edad_numero>=18 && edad_numero<25){
      //Calculamos el recargo en base a la edad 
        recargo = precio_base * edad_18
      //Sumamos todos los recargos que hemos obtenido
        recargo_edad = recargo_edad + recargo
      }//aqui puede colocar un else if() con el siguiente rango
      else if(edad_numero>=25 && edad_numero<50){
      //Calculamos el recargo en base a la edad 
        recargo = precio_base * edad_25
      //Sumamos todos los recargos que hemos obtenido
        recargo_edad = recargo_edad + recargo
      }else{
      //Calculamos el recargo en base a la edad 
        recargo = precio_base * edad_50
      //Sumamos todos los recargos que hemos obtenido
        recargo_edad = recargo_edad + recargo
      }

/** 
 * 2. Recargo por la edad del conyuge
 */
      if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
      //Calculamos el recargo en base a la edad del conyuge
        recargo = precio_base * casado_18
      //Sumamos todos los recargos que hemos obtenido
        recargo_conyuge = recargo_conyuge + recargo
      }else if(edad_conyuge_numero>=25 && edad_conyuge_numero<50){
      //Calculamos el recargo en base a la edad del conyuge
        recargo = precio_base * casado_25
      //Sumamos todos los recargos que hemos obtenido
        recargo_conyuge = recargo_conyuge + recargo
      }else if(edad_conyuge_numero>=50){
      //Calculamos el recargo en base a la edad del conyuge
        recargo = precio_base * casado_50
      //Sumamos todos los recargos que hemos obtenido
        recargo_conyuge = recargo_conyuge + recargo
      }
/**
 * 3. Recargo por la cantidad de hijos 
 */ 
  //Calculamos el recargo en base a la cantidad de hijos 
    recargo = precio_base * hijos_recargo * cantidad_hijos
  //Sumamos todos los recargos que hemos obtenido
    recargo_hijos = recargo_total + recargo
    
    /**
 * 4. Recargo por la cantidad de propiedades 
 */ 
  //Calculamos el recargo en base a la cantidad de propiedades 
    recargo = precio_base * propiedad_recargo * cantidad_propiedades
  //Sumamos todos los recargos que hemos obtenido
    recargo_propiedades = recargo_total + recargo

        /**
 * 5. Recargo por el salario 
 */ 
  //Calculamos el recargo en base al salario  
    recargo = salario_recargo * cantidad_salario
  //Sumamos todos los recargos que hemos obtenido
    recargo_salario = recargo_total + recargo

    
    recargo_total = recargo_edad + recargo_conyuge + recargo_hijos + recargo_propiedades + recargo_salario
    precio_final = precio_base + recargo_total
  
//Resultado
  alert ("El precio base es de: "+precio_base)
  alert ("Por el asegurado "+nombre+ " se realiza un recargo de Q." +recargo_edad)

//Presentar recargo solo si esta casado
  if ("SI" == casado.toUpperCase()){
    alert ("Su cónyuge tiene: "+edad_conyuge_numero)
    alert ("Por el cónyuge se realiza un recargo de: Q."+recargo_conyuge)
  }
  
//Presentar recargo solo si tiene hijos
  if ("SI" == hijos.toUpperCase()){
    if (cantidad_hijos==1){
      alert ("El asegurado tiene: "+cantidad_hijos + " hijo")
      alert ("Por el hijo se realiza un recargo de: Q."+recargo_hijos)
    } else{
      alert ("El asegurado tiene: "+cantidad_hijos + " hijos")
      alert ("Por los hijos se realiza un recargo de: Q."+recargo_hijos)
    }
  }
  
//Presentar recargo solo si tiene propiedades
  if ("SI" == propiedades.toUpperCase()){
    if (cantidad_propiedades==1){
      alert ("El asegurado tiene: "+cantidad_propiedades + " propiedad")
      alert ("Por la propiedad se realiza un recargo de: Q."+recargo_propiedades)
    } else{
      alert ("El asegurado tiene: "+cantidad_propiedades + " propiedades")
      alert ("Por las propiedades se realiza un recargo de: Q."+recargo_propiedades)
    }
  }

//Presentar recargo solo si tiene un salario
  if ("SI" == salario.toUpperCase()){
    alert ("El asegurado tiene un salario de: "+cantidad_salario)
    alert ("Por la cantidad de salario se realiza un recargo de: Q."+recargo_salario)
  }  

  alert ("El precio total sería de Q." +precio_final)

 usuario = prompt("¿Quiere generar una cotización?", "Salir/Generar")

    } 
  }
}