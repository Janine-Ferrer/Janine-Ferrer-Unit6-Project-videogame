$(".Part-two-yes").hide();
$(".Part-two-no").hide();
$(".second-yes").hide();
$(".Part-three-attack").hide();
$(".victorypage").hide();
$(".meat").hide();
$(".wrongeren").hide();



$(".yes-button").click(function() {
    $(".Part-two-yes").show();
    $(".start").hide();
    $(".Part-three-attack").hide();
    $(".victorypage").hide();
    $(".meat").hide();
    $(".wrongeren").hide();
});

$(".no-button").click(function() {
    $(".Part-two-no").show();
    $(".start").hide();
    $(".victorypage").hide();
    $(".meat").hide();
    $(".wrongeren").hide();
});

$(".secondImage").dblclick(function() {
    $(".wrongeren").show();
    $(".second-yes").hide();
    $(".Part-two-yes").hide();
    $(".Part-three-attack").hide();
    $(".victorypage").hide();
    $(".meat").hide();
});
$(".scouteren").click(function() {
    $(".Part-two-no").show();
    $(".wrongeren").hide();
    $(".second-yes").hide();
    $(".Part-two-yes").hide();
    $(".Part-three-attack").hide();
    $(".victorypage").hide();
    $(".meat").hide();
});
$(".secondImagetitan").dblclick(function() {
    $(".second-yes").show();
    $(".Part-two-yes").hide();
    $(".Part-three-attack").hide();
    $(".victorypage").hide();
    $(".meat").hide();
    $(".wrongeren").hide();
});

$(".yes-attack").click(function() {
    $(".Part-three-attack").show();
    $(".second-yes").hide();
    $(".victorypage").hide();
    $(".meat").hide();
    $(".wrongeren").hide();
});

$(".punch").dblclick(function() {
    $(".second-yes").hide();
    $(".Part-two-yes").hide();
    $(".Part-three-attack").hide();
    $(".victorypage").show();
    $(".meat").hide();
    $(".wrongeren").hide();
});

$(".victorypage").click(function() {
    $(".dyingpic").fadeOut();
    $(".meat").show();
    $(".wrongeren").hide();
});

$(".no-attack").click(function() {
    $(".Part-two-no").show();
    $(".second-yes").hide();
    $(".Part-two-yes").hide();
    $(".Part-three-attack").hide();
    $(".victorypage").hide();
    $(".meat").hide();
});

