
$(".card").on({
    mouseenter: function(){
        $(this).css("background-color", "lightgray");
    }, 
    mouseleave: function(){
        $(this).css("background-color", "white");
    }, 
    click: function(){
        $(this).css("background-color", "lightblue");
    } 
});

$(document).ready(function(){
    $(".btn-success").click(function(){
        $("#congrads").fadeIn("slow").fadeOut("slow").fadeIn("slow").fadeOut("slow").fadeIn("slow");
    });
});
$(document).ready(function(){
    $(".btn-warning").click(function(){
        $("#congrads").fadeOut();
        $("#orderform").fadeIn("slow");
    });
});

function findItem (picSrc){
  /*  window.alert(picSrc); */
    document.getElementById("formshow").reset();
    var hldTotamt
    var hldTotamt = document.getElementById("tAmt");
    hldTotamt.innerHTML = 0.00
    var itemPic = ["img/pettykingsred.jpg", "img/pettykingsblack.jpg", "img/pettykingsgrey.jpg",  "img/pettykingsbasemaroon.jpg","img/pettykingswhite.jpg", "img/pettykingsbaseblue.jpg"];
    var itemPrice = [ 20.00, 20.00, 20.00, 25.00, 20.00, 25.00];
    var itemDes = ["Red V Neck Tee","Black V Neck Tee","Grey V Neck Tee", "Maroon Baseball Tee","White V Neck Tee","Blue Baseball Tee" ];
    var i;
    for (i = 0; i < itemPic.length; i++) {
        if (picSrc == itemPic [i]) {
       /*  window.alert(itemPic [i]); */ 
         var hldShirt = document.getElementById("shirtDes");
         hldShirt.value = itemDes [i];
         var hldPrice = document.getElementById("shirtPrice");
         hldPrice.value = itemPrice [i];
         var hldSrc = document.getElementById("shirtPic");
         hldSrc.src = picSrc;}
    }     
}


function calcOrder (cost, qty) {
   var cost = Number(cost);
   var qty = Number(qty);
   /*window.alert(Number(qty * cost));*/
   var totAmt = Number(cost * qty);
   var hldTotamt = document.getElementById("tAmt");
   hldTotamt.innerHTML = Number(cost * qty);}
  
