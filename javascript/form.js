$("#pro-form input").keyup(function () {

    var numValid = 0;
    $("#pro-form input[required]").each(function () {
        if (this.validity.valid) {
            numValid++;
        }
    });

    var progress = $("#progress"),
        progressMessage = $("#progress-message");

    if (numValid == 0) {
        progress.attr("value", "0");
        progressMessage.text("0/10");
    }
    if (numValid == 1) {
        progress.attr("value", "1");
        progressMessage.text("1/10");
    }
    if (numValid == 2) {
        progress.attr("value", "2");
        progressMessage.text("2/10");
    }
    if (numValid == 3) {
        progress.attr("value", "3");
        progressMessage.text("3/10");
    }
    if (numValid == 4) {
        progress.attr("value", "4");
        progressMessage.text("4/10");
    }
    if (numValid == 5) {
        progress.attr("value", "5");
        progressMessage.text("5/10");
    }
    if (numValid == 6) {
        progress.attr("value", "6");
        progressMessage.text("6/10");
    }
    if (numValid == 7) {
        progress.attr("value", "7");
        progressMessage.text("7/10");
    }
    if (numValid == 8) {
        progress.attr("value", "8");
        progressMessage.text("8/10");
    }
    if (numValid == 9) {
        progress.attr("value", "9");
        progressMessage.text("9/10");
    }
    if (numValid == 10) {
        progress.attr("value", "10");
        progressMessage.text("10/10");
    }
});



let modal = document.getElementById("modalID");
let helpBtn = document.getElementById("helpIconFormID");
let span = document.getElementsByClassName("close")[0];

helpBtn.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};