var grandTotal;





//*******************Click event excellent service
//*******************Click event good service
//*******************Click event average service
//*******************Click event bad service

function clickHandler () {
  if(document.getElementById('excellent').checked) {
      EbillAmount();
  }
  else if(document.getElementById('good').checked){
      GbillAmount();

  }
  else if(document.getElementById('average').checked){
      AbillAmount();
  }
  else if(document.getElementById('bad').checked){
      BbillAmount();
  } 
}
function EbillAmount() {
    var Etotal = $("#billAmount").val();
    var EnewTotal = Etotal * .25
    grandTotal = +EnewTotal 
  partyAmount()
}
function GbillAmount() {
    var Gtotal = $("#billAmount").val();
    var GnewTotal = Gtotal * .20
    grandTotal = +GnewTotal
    partyAmount();
}
function AbillAmount() {
    var Atotal = $("#billAmount").val();
    var AnewTotal = Atotal * .15
    grandTotal = +AnewTotal 
    partyAmount();
}
function BbillAmount() {
    var Btotal = $("#billAmount").val();
    var BnewTotal = Btotal * .10;
    grandTotal = +BnewTotal;
    partyAmount();
}


function partyAmount(){
if(document.getElementById('2diner').checked) {
    var twoDiners = Math.round(grandTotal / 2);
    textbox = document.getElementById('grandTotaltext');
    textbox.value ="$" + +twoDiners + "." + +0 + +0 ;
    
    
}
else if(document.getElementById('3diner').checked){
    var threeDiners = Math.round(grandTotal / 3);
    textbox = document.getElementById('grandTotaltext');
    textbox.value = "$" + +threeDiners + "." + +0 + +0 ; ;

}

else if(document.getElementById('4diner').checked){
    var fourDiners = Math.round(grandTotal / 4);
    textbox = document.getElementById('grandTotaltext');
    textbox.value = "$" + +fourDiners + "." + +0 + +0 ; ;
}
else if(document.getElementById('5diner').checked){
    var fiveDiners = Math.round(grandTotal / 5);
    textbox = document.getElementById('grandTotaltext');
    textbox.value = "$" + +fiveDiners + "." + +0 + +0 ; ;
}
else if(document.getElementById("1diner").checked){
    var oneDiner=Math.round(grandTotal);
    textbox = document.getElementById('grandTotaltext');
    textbox.value ="$" + +oneDiner + "." + +0 + +0 ;
}
}

$(function () {
    $("#tipIt").on("click", clickHandler);
     isNumberKey();
});

