$(document).ready(function () {
    $('input[type="radio"]').click(function () {
        let inputValue = $(this).attr("value");
        document.getElementById("timerp").style.display = (inputValue === "timer")?"block":"none";
        document.getElementById("nexusp").style.display = (inputValue === "chess")?"block":"none";
    });
})