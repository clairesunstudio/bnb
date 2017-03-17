$.stellar();


$(".scroller").scrollFlight();



//////////////////////////////////////////////////////////////////////page1

$("img").on("arrived",function(e) {
  $(this).addClass('fade-in');
});


$(".cloud").on("arrived",function(e) {
  $(this).addClass('fade-in-half');
});

$(".text").on("arrived",function(e) {
  $(this).addClass('left-in');
});

$(".bird").on("arrived",function(e) {
  $(this).addClass('left-in');
});

$(".bird1").on("arrived",function(e) {
  $(this).addClass('right-in');
});

$(".bird1").on("departing",function(e) {
  $(this).removeClass('right-in');
  $(this).addClass('left-out');
  $(".bird").removeClass('left-in');
  $(".bird").addClass('right-out');
  $(".text").removeClass('left-in');
  $(".text").addClass('left-out');
});

$(".bird1").on("departed",function(e) {
  $(".sun").addClass('fade-out');
  $(".title").addClass('fade-out');
  $(".kite").addClass("hide");
  $(".kite-off").addClass("show").addClass("up");

});

$(".kite-off").on("departing", function(e){
    $(".nav").addClass('show');
      console.log("nav");
});



//////////////////////////////////////////////////////////////////////page2

$(".parents").on("arrived", function(e){
    $(this).addClass("walk-away");
    $("p").addClass('fade-in-delay');
    $("#container2").addClass("stay");
});

$("#page2").on("departed", function(e){
    $("#container2").addClass("affixed");
    $(".girl").addClass("fixed");
    $("#girl").attr("src","img/girl.svg");
});


//////////////////////////////////////////////////////////////////////page3

$("#page3").on("arriving", function(e){
    $("#container3").addClass("stay");
    $("#girl").attr("src","img/girl.svg");
});


$("#first").on("arrived", function(e){
    console.log("1");
    $(".text3").addClass("fade-in");
    $(".friends").addClass("fade-in pop");
    $(".heart").addClass("pop");
    $(".girl").addClass("hide");
    $(".girl1").addClass("show");

});

$("#first").on("departing", function(e){
    $(".friends").addClass("fade-out-delay");
});

$("#second").on("arrived", function(e){
    console.log("2");
    $(".hand").addClass("grab");
    $("#girl").attr("src","img/girl.svg");
});

$("#second").on("departed", function(e){
    console.log("2");
    $(".grades").addClass("pop");
    $(".girl1").toggleClass("pick");
    
});



$("#third").on("departed", function(e){
    console.log("3");
    $(".girl1").toggleClass("pick");
    $("#girl1").attr("src","img/girl-tag.svg");
    $(".label-1").addClass("pop");
});


$("#fourth").on("departed", function(e){
    $(".box").addClass("pop");
    $(".belt").addClass("left-in");
    $(".hand").addClass("fade-out");
    $("#girl1").attr("src","img/girl.svg");
    console.log("4");

});


$("#five").on("departed", function(e){
  $(".belt").addClass("leftout");
    $(".car").addClass("pop");
    $(".car1").addClass("fade-in");
    console.log("5");

});


$("#six").on("arrived", function(e){
    $(".car1").addClass("zoom");
    console.log("6");

});

$("#seven").on("departing", function(e){
     console.log("7");
     // $("#container3").addClass("affixed");
    $(".girl1").addClass("hide");

});


//////////////////////////////////////////////////////////////////////page4

$("#page4").on("departing", function(e){
    $("#container4").addClass("stay");
});

$("#a").on("arrived", function(e){
    console.log("a");
});

$("#b").on("arrived", function(e){
  console.log("b");
    $(".bracelet").addClass("pop");
    $(".bra").addClass("show");
});

$("#c").on("arrived", function(e){
    console.log("c");
    $(".shirt").addClass("pop");
    $(".shi").addClass("show");
});

$("#d").on("arrived", function(e){
    console.log("d");
    $(".postcards").addClass("pop");
    $(".pos").addClass("show");

});

$("#e").on("arrived", function(e){
    console.log("e");
    $(".camera").addClass("pop");
    $(".cam").addClass("show");

});

$("#e").on("departing", function(e){
    console.log("f");
    $(".girls").addClass("fixed");
    

});

//////////////////////////////////////////////////////////////////////page5
$("#page5").on("departing", function(e){
  $("#container4").addClass("affixed")
    $("#container5").addClass("stay");
    $(".girls").addClass("affixed");
});

// $(".girls").on("arrived", function(e){
//     $(".girl").addClass('fade-out');
// });


// $("#container4").on("rearriving", function(e){
//  $(".girl").addClass('fade-in');
// });


// $("#page5").on("rearrived", function(e){
//     $("#container5").addClass("stay");
// });
// $("#container2").on("rearriving", function(e){
//  console.log("page2");
//  $("#container3").addClass("back");
// });

// $("#container2").on("redeparting", function(e){
//  console.log("page2");
//  $("#container3").addClass("front");
// });
//////////////////////////////////////////////////////////////////////page6
$("#page6").on("arrived", function(e){
    $("#container5").addClass("affixed");
        $(".girls").addClass("affixed");
});
$(".iframe-cover").on("arriving",function(e) {
  $(".iframe-cover").addClass('appeared');
  $("iframe").attr("src", 'https://www.youtube.com/embed/HuoU8piIMxg?autoplay=0&loop=1&controls=1&playsinline=1&playlist=HuoU8piIMxg');
});



