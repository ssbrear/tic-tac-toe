// Text
var title = $("#title");
var subtitle = $(".card-subtitle");
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
        if (event.target.style.color == "black") {
            return
        }
        else if (subtitle.text() == "The player has won!") {
            return
        }
        else if (subtitle.text() == "The computer has won!") {
            return
        }

        // X appears
        event.target.style.color = "black";

        // Player Win Conditions
        var p0 = (options[0].textContent == "X")&&(options[0].style.color == "black");
        var p1 = (options[1].textContent == "X")&&(options[1].style.color == "black");
        var p2 = (options[2].textContent == "X")&&(options[2].style.color == "black");
        var p3 = (options[3].textContent == "X")&&(options[3].style.color == "black");
        var p4 = (options[4].textContent == "X")&&(options[4].style.color == "black");
        var p5 = (options[5].textContent == "X")&&(options[5].style.color == "black");
        var p6 = (options[6].textContent == "X")&&(options[6].style.color == "black");
        var p7 = (options[7].textContent == "X")&&(options[7].style.color == "black");
        var p8 = (options[8].textContent == "X")&&(options[8].style.color == "black");

        // Check if player won
        if (p0 && p1 && p2) {
            playerWin();
            return;
        }
        else if (p0 && p3 && p6){
            playerWin();
            return;
        }
        else if (p0 && p4 && p8){
            playerWin();
            return;
        }
        else if (p2 && p5 && p8){
            playerWin();
            return;
        }
        else if (p6 && p7 && p8){
            playerWin();
            return;
        }
        else if (p2 && p4 && p6){
            playerWin();
            return;
        }
        else if (p1 && p4 && p7){
            playerWin();
            return;
        }
        else if (p3 && p4 && p5){
            playerWin();
            return;
        }

        // Computer randomly picks O
        var done = false;
        while (done == false) {
            var cChoice = Math.round(8*Math.random());
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
        
        var c0 = (options[0].textContent == "O")&&(options[0].style.color == "black");
        var c1 = (options[1].textContent == "O")&&(options[1].style.color == "black");
        var c2 = (options[2].textContent == "O")&&(options[2].style.color == "black");
        var c3 = (options[3].textContent == "O")&&(options[3].style.color == "black");
        var c4 = (options[4].textContent == "O")&&(options[4].style.color == "black");
        var c5 = (options[5].textContent == "O")&&(options[5].style.color == "black");
        var c6 = (options[6].textContent == "O")&&(options[6].style.color == "black");
        var c7 = (options[7].textContent == "O")&&(options[7].style.color == "black");
        var c8 = (options[8].textContent == "O")&&(options[8].style.color == "black");

        // Check if computer won
        if (c0 && c1 && c2) {
            computerWin();
            return;
        }
        else if (c0 && c3 && c6){
            computerWin();
            return;
        }
        else if (c0 && c4 && c8){
            computerWin();
            return;
        }
        else if (c2 && c5 && c8){
            computerWin();
            return;
        }
        else if (c6 && c7 && c8){
            computerWin();
            return;
        }
        else if (c2 && c4 && c6){
            computerWin();
            return;
        }
        else if (c1 && c4 && c7){
            computerWin();
            return;
        }
        else if (c3 && c4 && c5){
            computerWin();
            return;
        }
    }
});

resetBtn.on("click", function() {
    subtitle.text("Click any square to begin");
    numCChoices = 4;
    for (i = 0; i < 9; i++) {
        var div = $(options[i]);
        div.css("color", "white");
        div.text("X");
    }
});

function playerWin() {
    subtitle.text("The player has won!");
    console.log(subtitle.text());
}

function computerWin() {
    subtitle.text("The computer has won!");
}