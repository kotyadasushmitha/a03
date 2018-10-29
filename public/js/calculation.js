// var n1 = parseFloat(document.getElementById('n1').value);
// var n2 = parseFloat(document.getElementById('n2').value);
// var oper = document.getElementById('operators').value;
var a = calc(n1, n2, oper);
if(document.getElementById('result')){
    document.getElementById('result').value = a;
}
function calc(n1, n2, oper) {
    var n1 = document.getElementById('n1') ? parseFloat(document.getElementById('n1').value) : n1;
    var n2 = document.getElementById('n2') ? parseFloat(document.getElementById('n2').value) : n2;

    var oper = document.getElementById('operators') ? document.getElementById('operators').value : oper;

    if (oper === '+') {
        document.getElementById('result').value = n1 + n2;
        return n1 + n2;
    }

    if (oper === '-') {
        document.getElementById('result').value = n1 - n2;
        return n1 - n2;
    }

    if (oper === '/') {
        document.getElementById('result').value = n1 / n2;
        return n1 / n2;
    }

    if (oper === 'X') {
        document.getElementById('result').value = n1 * n2;
        return n1 * n2;
    }
    if (oper === '%') {
        document.getElementById('result').value = n1 % n2;
        return n1 % n2;
    }
}