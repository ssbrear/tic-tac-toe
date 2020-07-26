// Text
var title = $("#title");
var copyright = $("#copyright");
var body = $("body");

// Button and options
var resetBtn = $("#reset-button");
var options = $(".option");
var numCChoices = 4;

// Generates a random colour whenever the page is clicked
document.addEventListener("click", function(event) {
    var r = Math.round(255*Math.random());
    var g = Math.round(255*Math.random());
    var b = Math.round(255*Math.random());
    body.css("background-color", "rgb(" + r + "," + g + "," + b + ")");
    if (event.target.classList.contains("option")) {
        // X appears
        if (event.target.style.color == "black") {
            return
        }
        event.target.style.color = "black";
        // Computer randomly picks O
        var done = false;
        while (done == false) {
            var cChoice = Math.round(8*Math.random());
            console.log(options[cChoice].style.color);
            if (options[cChoice].style.color != "black") {
                var div = $(options[cChoice]);
                div.css("color", "black");
                div.text("O");
                done = true;
                numCChoices--;
            }
            else if (numCChoices <= 0) {
                break;
            }
        }
    }
});

resetBtn.on("click", function() {
    numCChoices = 4;
    for (i = 0; i < 9; i++) {
        var div = $(options[i]);
        div.css("color", "white");
        div.text("X");
    }
});