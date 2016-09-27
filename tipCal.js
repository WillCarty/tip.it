var grandTotal;

function EbillAmount() {
    var Etotal = $("#billAmount").val();
    var EnewTotal = Etotal * .25
    grandTotal = +Etotal + +EnewTotal
  //partyAmount()
}

//*******************Click event excellent service
//*******************Click event good service
//*******************Click event average service
//*******************Click event bad service
$(function () {
    $("#excellent").on("click", EbillAmount);
    $("#bad").on("click", BbillAmount);
    $("#good").on("click", GbillAmount);
    $("#average").on("click", AbillAmount);
});
function GbillAmount() {
    var Gtotal = $("#billAmount").val();
    var GnewTotal = Gtotal * .2
    grandTotal = +Gtotal + +GnewTotal
    //partyAmount();
}
function AbillAmount() {
    var Atotal = $("#billAmount").val();
    var AnewTotal = Atotal * .15
    grandTotal = +Atotal + +AnewTotal
    //partyAmount();
}
function BbillAmount() {
    var Btotal = $("#billAmount").val();
    var BnewTotal = Btotal * .10
    grandTotal = +Btotal + +BnewTotal
   // partyAmount();
}


function partyAmount(){
if(document.getElementById('2diner').checked) {
    var twoDiners = grandTotal / 2;
    var newDinercard= $("#newCard2").html;
    newDinercard = newDinercard.replace("@@grandTotal@@",Math.round(twoDiners));

    
}
}