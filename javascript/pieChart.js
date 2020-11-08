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

console.log(chart)