
$(document).keypress(function keyEvent(event) {
    let which = event.which;
    console.log(event)

    //* main
    if(event.which == 32){
      $("#op").text("space")
    } else {
      $("#op").text(event.originalEvent.key)
    }

    $("#key").text(event.key);
    $("#shift").text(event.shiftKey)
    $("#which").text(event.which)
    $("#code").text(event.originalEvent.code)
})

