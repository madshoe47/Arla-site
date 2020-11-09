'use strict'

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function rotateFunction() {
    document.getElementById("arrowDropdown").classList.toggle("rotateArrow");
}


let modalBagdes = document.getElementById("modalID");
let helpBtnProfile = document.getElementById("helpIconBadgesID");
let closeSign = document.getElementsByClassName("close")[0];

helpBtnProfile.onclick = function () {
    modalBagdes.style.display = "block";
};

closeSign.onclick = function () {
    modalBagdes.style.display = "none";
}

window.onclick = (event) => {
    if (event.target == modalBagdes) {
        modalBagdes.style.display = "none";
    }
};