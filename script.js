window.onload = function () {
  let sum = [];
  let total = 0;
  let scr = document.getElementById("screen");

  document.getElementById("btn-plus").addEventListener('click', function () { plus() });
  document.getElementById("btn-minus").addEventListener('click', function () { minus() });
  document.getElementById("btn-multiply").addEventListener('click', function () { multiply() });
  document.getElementById("btn-divide").addEventListener('click', function () { divide() });
  document.getElementById("btn-modulo").addEventListener('click', function () { modulo() });
  document.getElementById("btn-equal").addEventListener('click', function () { equal() });

  document.getElementById("btn1").addEventListener('click', function () { num(1) });
  document.getElementById("btn2").addEventListener('click', function () { num(2) });
  document.getElementById("btn3").addEventListener('click', function () { num(3) });
  document.getElementById("btn4").addEventListener('click', function () { num(4) });
  document.getElementById("btn5").addEventListener('click', function () { num(5) });
  document.getElementById("btn6").addEventListener('click', function () { num(6) });
  document.getElementById("btn7").addEventListener('click', function () { num(7) });
  document.getElementById("btn8").addEventListener('click', function () { num(8) });
  document.getElementById("btn9").addEventListener('click', function () { num(9) });
  document.getElementById("btn0").addEventListener('click', function () { num(0) });
  document.getElementById("btn-point").addEventListener('click', function () { point() });
  document.getElementById("btn-ac").addEventListener('click', function () { clear() });
  document.getElementById("btn-c").addEventListener('click', function () { clear() });


  function num(n) {
    if (scr.value.length < 8) {
      (scr.value == 0 && !scr.value.includes('.')) || scr.value == '+' || scr.value == '-' || scr.value == 'x' || scr.value == '/' || scr.value == '%' ? scr.value = n : scr.value += n;
    } else {
      scr.value = scr.value;
    }
  }
  function point() {
    if (scr.value.includes('.')) {
      scr.value = scr.value;
    } else {
      scr.value = scr.value + '.';
    }
  }

  function plus() {
    sum.push([scr.value, '+']);
    scr.value = '+';
  }
  function minus() {
    sum.push([scr.value, '-']);
    scr.value = '-';
  }
  function multiply() {
    sum.push([scr.value, 'x']);
    scr.value = 'x';
  }
  function divide() {
    sum.push([scr.value, '/']);
    scr.value = '/';
  }
  function modulo() {
    sum.push([scr.value, '%']);
    scr.value = '%';
  }
  function equal() {
    sum.push([scr.value, '=']);
    total = Number(sum[0][0]);
    for (let i = 0; i < sum.length - 1; i++) {
      if (sum[i][1] == '+') {
        total += Number(sum[i + 1][0]);
      }
      if (sum[i][1] == '-') {
        total -= Number(sum[i + 1][0]);
      }
      if (sum[i][1] == 'x') {
        total *= Number(sum[i + 1][0]);
      }
      if (sum[i][1] == '/') {
        total /= Number(sum[i + 1][0]);
      }
      if (sum[i][1] == '%') {
        total %= Number(sum[i + 1][0]);
      }
    }
    // console.log(sum);
    if(total<=99999999&&total>=-99999999){
      scr.value = total;
      }else{
        scr.value="error!";
      }
  }
  function clear() {
    sum = [];
    scr.value = '0';
  }

}