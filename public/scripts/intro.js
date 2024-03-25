const start_button = $("#start-btn");
const leave_button = $("#leave-btn");
const next_button = $("#next-btn");
const end_button = $("#end-btn");

$(document).ready(function() {

    let dialogue_number = 0;
    
    start_button.click(function(){
        dialogue_number = 0;
        next_button.show()
        leave_button.hide();
        end_button.hide();
        fetch_dialogue(dialogue_number);
    });

    next_button.click(function(){
        dialogue_number += 1;
        fetch_dialogue(dialogue_number);

        if (dialogue_number == 3) leave_button.show();
        else leave_button.hide();
        
        if (dialogue_number == 4) {
            next_button.hide();
            end_button.show();
        }
    });

    end_button.click(function(){
        const name = $("#name").val();
        if (name == '') {
            $(".invalid-feedback").show();
            return;
        } else {
            $(".invalid-feedback").hide();
        }

        const url = window.location.href + 'name';
        $.post(url, 
        {
            name: name
        },
        function(data, status) {

        })
    });

});


function fetch_dialogue(dialogue_number) {   
    const url = window.location.href + "next";
    $.post(url, 
    {
        dialogue_number: dialogue_number
    },
    function(data, status) {
        if (status == 404) return;
        $("#sprite").attr("src", "assets/"+data.sprite);
        $(".modal-body").text(data.text);

        if (dialogue_number == 4) insert_name_field();
    });
};

function insert_name_field() {
    const form = '\
    <form class="needs-validation" novalidate>\
    <div class="input-group has-validation"> \
        <input type="text" class="form-control" id="name" aria-describedby="inputGroupPrepend" placeholder="Enter your name" required> \
            <div class="invalid-feedback"> \
                Please choose a name. \
            </div> \
    </div> \
    </form>';
    var html = $(".modal-body").html();
    html += form;
    $(".modal-body").html(html);
}