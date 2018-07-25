
var number1;
var result;

//Number functions
function fNum0() {
  document.getElementById('inputBox1').value+="0";
}
function fNum1() {
  document.getElementById('inputBox1').value+="1";
}
function fNum2() {
  document.getElementById('inputBox1').value+="2";
}
function fNum3() {
  document.getElementById('inputBox1').value+="3";
}
function fNum4() {
  document.getElementById('inputBox1').value+="4";
}
function fNum5() {
  document.getElementById('inputBox1').value+="5";
}
function fNum6() {
  document.getElementById('inputBox1').value+="6";
}
function fNum7() {
  document.getElementById('inputBox1').value+="7";
}
function fNum8() {
  document.getElementById('inputBox1').value+="8";
}
function fNum9() {
  document.getElementById('inputBox1').value+="9";
}
function fNumDot() {
  document.getElementById('inputBox1').value+=".";
}

// Operator functions

function fnClean() {
  document.getElementById('inputBox1').value="";
  document.getElementById('inputBox2').value="";
}
function fnPlus() {
  document.getElementById('inputBox1').value+="+";

}
function fnMinus() {
  document.getElementById('inputBox1').value+="-";

}
function fnMulti() {
  document.getElementById('inputBox1').value+="*";

}
function fnDiv() {
  document.getElementById('inputBox1').value+="/";

}

//Calculate

function fnCalc() {
  number1=document.getElementById('inputBox1').value;
  document.getElementById('inputBox2').value=number1;
  // Conditions for result
  result= eval(document.getElementById('inputBox2').value);
  // Result Print
  document.getElementById('inputBox1').value=result;
}





























































// #
