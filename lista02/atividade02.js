/*2) Utilizar a fórmula abaixo para que converter uma temperatura de Fahrenheit para Celsius:
a) n é o valor da temperatura a ser convertida.
b) Dado o array  de temperaturas com os valores  54, 78, 56, 98, 0, 12, 11, 37
c) Exibir no console cada uma das temperaturas convertidas de Fahrenheit para Celsius. */

 var temp = [54,78,56,98,0,12,11,37];
    for(var i=0; i < temp.length; i++){
        let result =(temp[i]-32)/1.8;
        console.log(result.toFixed(2)+"°C");
    }
