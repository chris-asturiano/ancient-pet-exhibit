const interactables = $(".interact");
const modal = $("#doggoModal");

$(document).ready(function() {

    $("#interactables").delegate(".interact", "mouseenter", function() {
        hover($(this));
    });

    $("#interactables").delegate(".interact", "mouseleave", function() {
        unhover($(this));
    });
    
    $("#interactables").delegate(".interact", "click", function() {
        var id = $(this).attr('id');
        console.log("Clicked " + id);
        modal.attr('aria-hidden', false);
    });
})


function hover(element) {
    let filename = element.attr('src');
    filename = filename.slice(0, -4);
    filename += '_hover.png';
    element.attr('src', filename);
}

function unhover(element) {
    let filename = element.attr('src');
    filename = filename.slice(0, -10);
    filename += '.png';
    element.attr('src', filename);
}