const dave = $("#dave");
const doggos_btn = $("#doggos");


$(document).ready(function() {

    dave.mouseenter(function() { hover(dave) });
    dave.mouseleave(function() { unhover(dave) });

    doggos_btn.mouseenter(function() { hover(doggos_btn) });
    doggos_btn.mouseleave(function() { unhover(doggos_btn) });
    doggos_btn.click(function() {
        window.location.href = '/doggos';
    })
});

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
