/*1) Calcular a tabuada de multiplicar de 5.
 a) Adicionar o resultado de cada cálculo em um array.
b) Transformar o array em string.
c) Exibir no console.
 */

function tabuada(num){
    let array =[];
    for(var i=0;i<=10;i++){
        let result = num*i;
         array[i] = result;
        console.log(num+" x "+i+" = "+(num*i));
    }
    return array.join();
}
console.log(tabuada(5));