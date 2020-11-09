"use strict"




const pieCanvas = document.querySelector('#myPie')





chart = new Chart(pieCanvas, {
    type: 'doughnut',

    data: {
        datasets: [{

            data: [
                20, 40, 15, 5, 20
            ],
            label: 'Milk in kg',
            fill: false,
            backgroundColor: [
                '#baddc6',
                '#589656',
                '#cbd2a5',
                '#9bbb69',
            ],

        }],
        labels: [
            'Energy',
            'Diesel',
            'Cows',
            'Production',
            'Feed'

        ]



    },

});

pieCanvas.onclick = function (e) {
    var slice = chart.getElementAtEvent(e);
    if (!slice.length) return; // return if not clicked on slice
    var label = slice[0]._model.label;
    switch (label) {
        // add case for each label/slice
        case 'Energy':
            alert('clicked on Energy');
            window.location.href = "energy.html";
            break;
            // add rests ...
    }
}