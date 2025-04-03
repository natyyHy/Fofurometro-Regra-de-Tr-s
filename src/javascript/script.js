
function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value) , num2 = parseFloat(document.getElementById('num2').value), num3 = parseFloat(document.getElementById('num3').value);

    if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
        document.getElementById('result').textContent = 'Digite todos os números';
        return;

    }
    
    if(num1 === 0){
        document.getElementById('result').textContent = 'Zero é invalido';
        return;

    }

    let result = (num3 * num2) / num1
    if(Number.isInteger(result)){
        document.getElementById('result').textContent = result;
    }else {
        document.getElementById('result').textContent = result.toFixed(2);
    }    

}