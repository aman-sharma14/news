
$(document).ready(function() {
    $("p").hide();

    $('.news').click(function() {
        if ($(this).children('p').is(":hidden")) {
            $(this).siblings().hide("slow");
            $(this).children('p').show();
        } else {
            $(this).siblings().show("slow");
            $(this).children('p').hide("slow");
        }
    });
});
