// function myFunction() {
//     var x = 4;
//     var L = [1,2,3];
//     var s = "hello";

//     if (x < 10) {

//     } else if (x < 20) {

//     } else {

//     }

//     while (x > 0) {

//     }

//     for (var i = 0; i < 10; i++) {

//     }
// }



function post_event_handler() {
    alert("hello")
}

function on_doc_ready() {
    $(".post").click(post_event_handler)
}

$(document).ready(on_doc_ready)