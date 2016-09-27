var grandTotal;

function EbillAmount() {
    var Etotal = $("#billAmount").val();
    var EnewTotal = Etotal * .25
    grandTotal = +Etotal + +EnewTotal
  //partyAmount()
}

//*******************Click event excellent service
$(function () {
    $("#excellent").on("click", EbillAmount);

});


function GbillAmount() {
    var Gtotal = $("#billAmount").val();
    var GnewTotal = Gtotal * .2
    grandTotal = +Gtotal + +GnewTotal
    //partyAmount();
}

//*******************Click event good service
$(function () {
    $("#good").on("click", GbillAmount);

});


function AbillAmount() {
    var Atotal = $("#billAmount").val();
    var AnewTotal = Atotal * .15
    grandTotal = +Atotal + +AnewTotal
    //partyAmount();
}

//*******************Click event average service
$(function () {
    $("#average").on("click", AbillAmount);

});


function BbillAmount() {
    var Btotal = $("#billAmount").val();
    var BnewTotal = Btotal * .10
    grandTotal = +Btotal + +BnewTotal
   // partyAmount();
}

//*******************Click event bad service
$(function () {
    $("#bad").on("click", BbillAmount);

});

//if("#2diner"=== checked){
  // grandTotal / 2 
//}