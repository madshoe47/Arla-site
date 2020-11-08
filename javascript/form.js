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
        progressMessage.text("0/3");
    }
    if (numValid == 1) {
        progress.attr("value", "1");
        progressMessage.text("1/3");
    }
    if (numValid == 2) {
        progress.attr("value", "2");
        progressMessage.text("2/3");
    }
    if (numValid == 3) {
        progress.attr("value", "3");
        progressMessage.text("3/3");
    }
});