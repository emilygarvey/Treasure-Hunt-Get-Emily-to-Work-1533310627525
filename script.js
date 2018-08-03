$("#clock").dblclick(function() {
    $("#waketext").text("Okay, okay! I'm up!!");
    $(".train").show(".train");
    $(".alarm").hide(".alarm");
    $("#start").fadeOut();
});

$("#clock").click(function() {
    $("#waketext").text("SNOOZE. I'm going to be late! Make sure you double-click!");
});

$("#clock").hover(function() {
    $("#waketext").text("RIIIIIIIING! ");
});

$("#fullpic").click(function() {
    $("#fullpic").slideUp();
    $("#squish").delay(400).slideDown();
    $(".train").delay(1000).fadeOut();
    $(".wallst").show();
});

$("#hotpic").click(function() {
    $("#hotpic").hide();
    $("#sun").fadeIn();
    $(".train").delay(1000).fadeOut();
    $(".wallst").delay(300).show();
});

$("#eggs").click(function() {
    $("#eggs").hide();
    $("#eggs2").show();
    $("button").show();
});

$("#bacon").click(function() {
    $("#bacon").fadeOut(100);
    $("#bacon2").delay(100).slideDown();
    $("button").show();
});

$("#cereal").click(function() {
    $("#cereal").slideUp(100);
    $("#cereal2").delay(100).fadeIn();
    $("button").show();
});

$("#smoothie").click(function() {
    $("#smoothie").hide();
    $("#smoothie2").show();
    $("button").show();
});

$("button").dblclick(function() {
    $(".wallst").delay(1000).fadeOut();
    $(".treasure").delay(1000).slideDown();
});