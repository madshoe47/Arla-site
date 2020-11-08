"use strict"
//tilføjer og fjerner dropdowns til at vælge kategori og farm
let i = 1

function addSubject() {
    if (i <= 1) {
        i++
        let whatToAdd = /*html*/ `
 <div id = "chart${i}"
 class = "dropsChart" >
 <select class="select-css" name="farm1" id="farm2">
                        <option value="">Farm</option>
                        <option value="north1">North1</option>
                        <option value="north2">North2
                        </option>
                        <option value="north3">North3</option>

                    </select>
                    <select onchange="diagram2(this.value)" class="select-css" name="Kategori1" id="Kategori1">
                        <option value="">Category</option>
                        <option value="co2">
                            <p>CO<i>2</i></p>
                        </option>

                        <option value="Digestion">Feed
                        </option>
                        <option value="Milk">Milk</option>
                        <option value="Cows">Cows</option>
                    </select>
                    
                    <button onclick="removeSubject('#chart${i}')" class="noBakBorder"><img src="images/minus.svg" alt=""></button>

                </div>



    `
        document.querySelector('#charts').innerHTML += whatToAdd

    }


    console.log(i)
}


function removeSubject(denSelv) {
    i--
    document.querySelector(denSelv).remove();

}

//vaelg data
function diagram(cat) {
    if (cat == 'Cows') {
        appendCows(_sustainabilityData)
    }
    if (cat == 'co2') {
        appendCarbon(_sustainabilityData)
    }
    if (cat == 'Digestion') {
        appendFeed(_sustainabilityData)
    } else if (cat == 'Milk') {
        appendMilk(_sustainabilityData)
    }

}

function diagram2(cat) {
    if (cat == 'Cows') {
        addCows(_sustainabilityData)
    }
    if (cat == 'co2') {
        addCarbon(_sustainabilityData)
    }
    if (cat == 'Digestion') {
        addFeed(_sustainabilityData)
    } else if (cat == 'Milk') {
        addMilk(_sustainabilityData)
    };
    console.log(chart)

}


//databehandling
const _dataRef = _db.collection("DK1")
let _sustainabilityData



_dataRef.orderBy("year").onSnapshot(snapshotData => {
    _sustainabilityData = []; // reset _sustainabilityData
    snapshotData.forEach(doc => { // loop through snapshotData - like for of loop
        let data = doc.data(); // save the data in a variable
        data.id = doc.id; // add the id to the data variable
        _sustainabilityData.push(data); // push the data object to the global array _sustainabilityData
    });

    console.log(_sustainabilityData)


});

// dynamiske farver på charts
function dynamicColors() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}

// Tjekker mindste værdien af y-aksen
function nyYAkse(dataSet) {
    if (chart.options.scales.yAxes[0].ticks.min > Math.min(...dataSet)) {
        chart.options.scales.yAxes[0].ticks.min = (Math.round(Math.min(...dataSet) - 50));
    }

    if (chart.options.scales.yAxes[0].ticks.max < Math.max(...dataSet)) {
        chart.options.scales.yAxes[0].ticks.max = (Math.round(Math.max(...dataSet) + 50));
    }

}


//add datasets
function Dataset(data, label) {
    let chartColor = dynamicColors()
    let datasetToAdd = {
        data: data,
        label: label,
        fill: false,
        borderColor: chartColor,
        backgroundColor: chartColor,
        pointBackgroundColor: chartColor,
        pointBorderColor: chartColor,
        pointHoverBackgroundColor: chartColor,
        pointHoverBorderColor: chartColor,

    }
    console.log(datasetToAdd)
    return datasetToAdd


}

function addMilk(sustainabilityData) {
    let milk = [];
    let years = [];
    let farm = document.querySelector('#farm2').value
    sustainabilityData.forEach(data => {
        if (farm == 'north1') {
            if (data.Farm === 'north1') { // in this case we only want the data from 'north'
                milk.push(data.MilkProduction);
                years.push(data.year);
            }
        }
        if (farm == 'north2') {
            if (data.Farm === 'north2') { // in this case we only want the data from 'north'
                milk.push(data.MilkProduction);
                years.push(data.year);
            }
        }
        if (farm == 'north3') {
            if (data.Farm === 'north3') { // in this case we only want the data from 'north'
                milk.push(data.MilkProduction);
                years.push(data.year);
            }
        } else if (farm == 'north4') {
            if (data.Farm === 'north4') { // in this case we only want the data from 'north'
                milk.push(data.MilkProduction);
                years.push(data.year);
            }
        }




    });
    let dataset = Dataset(milk, 'Milk in kg ' + '(' + farm + ')', chart)
    console.log(dataset)
    chart.data.datasets.push(dataset)
    nyYAkse(milk)
    chart.update();
}

function addFeed(sustainabilityData) {
    let feed = [];
    let years = [];
    let farm = document.querySelector('#farm2').value
    sustainabilityData.forEach(data => {
        if (farm == 'north1') {
            if (data.Farm === 'north1') { // in this case we only want the data from 'north'
                feed.push(data.FeedConsumption);
                years.push(data.year);
            }
        }
        if (farm == 'north2') {
            if (data.Farm === 'north2') { // in this case we only want the data from 'north'
                feed.push(data.FeedConsumption);
                years.push(data.year);
            }
        }
        if (farm == 'north3') {
            if (data.Farm === 'north3') { // in this case we only want the data from 'north'
                feed.push(data.FeedConsumption);
                years.push(data.year);
            }
        } else if (farm == 'north4') {
            if (data.Farm === 'north4') { // in this case we only want the data from 'north'
                feed.push(data.MilkProduction);
                years.push(data.year);
            }
        }




    });
    let dataset = Dataset(feed, 'Feed in tons ' + '(' + farm + ')', chart)
    console.log(dataset)
    chart.data.datasets.push(dataset)
    nyYAkse(feed)
    chart.update();
}


function addCarbon(sustainabilityData) {
    let carbon = [];
    let years = [];
    let farm = document.querySelector('#farm2').value
    sustainabilityData.forEach(data => {
        if (farm == 'north1') {
            if (data.Farm === 'north1') { // in this case we only want the data from 'north'
                carbon.push(data.CarbonFootprint);
                years.push(data.year);
            }
        }
        if (farm == 'north2') {
            if (data.Farm === 'north2') { // in this case we only want the data from 'north'
                carbon.push(data.CarbonFootprint);
                years.push(data.year);
            }
        }
        if (farm == 'north3') {
            if (data.Farm === 'north3') { // in this case we only want the data from 'north'
                carbon.push(data.CarbonFootprint);
                years.push(data.year);
            }
        } else if (farm == 'north4') {
            if (data.Farm === 'north4') { // in this case we only want the data from 'north'
                carbon.push(data.CarbonFootprint);
                years.push(data.year);
            }
        }




    });
    let dataset = Dataset(carbon, 'CO2 in tons ' + '(' + farm + ')', chart)
    console.log(dataset)
    chart.data.datasets.push(dataset)
    nyYAkse(carbon)
    chart.update();
}







function addCows(sustainabilityData) {
    let cows = [];
    let years = [];
    let farm = document.querySelector('#farm2').value
    sustainabilityData.forEach(data => {
        if (farm == 'north1') {
            if (data.Farm === 'north1') { // in this case we only want the data from 'north'
                cows.push(data.Cows);
                years.push(data.year);
            }
        }
        if (farm == 'north2') {
            if (data.Farm === 'north2') { // in this case we only want the data from 'north'
                cows.push(data.Cows);
                years.push(data.year);
            }
        }
        if (farm == 'north3') {
            if (data.Farm === 'north3') { // in this case we only want the data from 'north'
                cows.push(data.Cows);
                years.push(data.year);
            }
        } else if (farm == 'north4') {
            if (data.Farm === 'north4') { // in this case we only want the data from 'north'
                cows.push(data.Cows);
                years.push(data.year);
            }
        }




    });

    let dataset = Dataset(cows, 'Cows' + '(' + farm + ')', chart)
    console.log(dataset)
    chart.data.datasets.push(dataset)
    nyYAkse(cows)
    chart.update();



}






// perpare



function prepareCowData(sustainabilityData) {
    let cows = [];
    let years = [];
    let farm = document.querySelector('#farm1').value
    console.log(farm)
    sustainabilityData.forEach(data => {
        if (farm == 'north1') {
            if (data.Farm === 'north1') { // in this case we only want the data from 'north'
                cows.push(data.Cows);
                years.push(data.year);
            }
        }
        if (farm == 'north2') {
            if (data.Farm === 'north2') { // in this case we only want the data from 'north'
                cows.push(data.Cows);
                years.push(data.year);
            }
        }
        if (farm == 'north3') {
            if (data.Farm === 'north3') { // in this case we only want the data from 'north'
                cows.push(data.Cows);
                years.push(data.year);
            }
        } else if (farm == 'north4') {
            if (data.Farm === 'north4') { // in this case we only want the data from 'north'
                cows.push(data.Cows);
                years.push(data.year);
            }
        }



    });
    return {
        cows,
        years
    }
};

function prepareCarbonData(sustainabilityData) {
    let carbon = [];
    let years = [];
    let farm = document.querySelector('#farm1').value
    sustainabilityData.forEach(data => {
        if (farm == 'north1') {
            if (data.Farm === 'north1') { // in this case we only want the data from 'north'
                carbon.push(data.CarbonFootprint);
                years.push(data.year);
            }

        }
        if (farm == 'north2') {
            if (data.Farm === 'north2') { // in this case we only want the data from 'north'
                carbon.push(data.CarbonFootprint);
                years.push(data.year);
            }

        }
        if (farm == 'north3') {
            if (data.Farm === 'north1') { // in this case we only want the data from 'north'
                carbon.push(data.CarbonFootprint);
                years.push(data.year);
            }

        } else if (farm == 'north4') {
            if (data.Farm === 'north2') { // in this case we only want the data from 'north'
                carbon.push(data.CarbonFootprint);
                years.push(data.year);
            }

        }

    });
    return {
        carbon,
        years
    }
}

function prepareDigestionData(sustainabilityData) {
    let feed = [];
    let years = [];
    let farm = document.querySelector('#farm1').value
    sustainabilityData.forEach(data => {
        if (farm == 'north1') {
            if (data.Farm === 'north1') { // in this case we only want the data from 'north'
                feed.push(data.FeedConsumption);
                years.push(data.year);
            }

        }
        if (farm == 'north2') {
            if (data.Farm === 'north2') { // in this case we only want the data from 'north'
                feed.push(data.FeedConsumption);
                years.push(data.year);
            }

        }
        if (farm == 'north3') {
            if (data.Farm === 'north1') { // in this case we only want the data from 'north'
                feed.push(data.FeedConsumption);
                years.push(data.year);
            }

        } else if (farm == 'north4') {
            if (data.Farm === 'north2') { // in this case we only want the data from 'north'
                feed.push(data.FeedConsumption);
                years.push(data.year);
            }

        }

    });
    return {
        feed,
        years
    }
};

function prepareMilkData(sustainabilityData) {
    let milk = [];
    let years = [];
    let farm = document.querySelector('#farm1').value
    console.log(farm)
    sustainabilityData.forEach(data => {
        if (farm == 'north1') {
            if (data.Farm === 'north1') { // in this case we only want the data from 'north'
                milk.push(data.MilkProduction);
                years.push(data.year);
            }
        }
        if (farm == 'north2') {
            if (data.Farm === 'north2') { // in this case we only want the data from 'north'
                milk.push(data.MilkProduction);
                years.push(data.year);
            }
        }
        if (farm == 'north3') {
            if (data.Farm === 'north3') { // in this case we only want the data from 'north'
                milk.push(data.MilkProduction);
                years.push(data.year);
            }
        } else if (farm == 'north4') {
            if (data.Farm === 'north4') { // in this case we only want the data from 'north'
                milk.push(data.MilkProduction);
                years.push(data.year);
            }
        }



    });
    return {
        milk,
        years
    }
};

let chart

// append
function appendMilk(sustainabilityData) {
    let data = prepareMilkData(sustainabilityData);
    console.log(data);
    // generate chart
    let chartContainer = document.querySelector('#myChart');
    chart = new Chart(chartContainer, {
        type: 'line',
        data: {
            datasets: [{
                data: data.milk,
                label: 'Milk in kg',
                fill: false,
                borderColor: "#e755ba",
                backgroundColor: "#e755ba",
                pointBackgroundColor: "#55bae7",
                pointBorderColor: "#55bae7",
                pointHoverBackgroundColor: "#55bae7",
                pointHoverBorderColor: "#55bae7",
            }],
            labels: data.years
        },
        options: {
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'index',
                intersect: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: (Math.round(Math.min(...data.milk) - 50)),
                        max: (Math.round(Math.max(...data.milk) - 50))
                    }
                }]
            },

        }
    });
}




function appendCarbon(sustainabilityData) {
    let data = prepareCarbonData(sustainabilityData);
    console.log(data);
    // generate chart
    let chartContainer = document.querySelector('#myChart');
    chart = new Chart(chartContainer, {
        type: 'line',
        data: {
            datasets: [{
                data: data.carbon,
                label: 'CO2 tons',
                fill: false,
                borderColor: "#e755ba",
                backgroundColor: "#e755ba",
                pointBackgroundColor: "#55bae7",
                pointBorderColor: "#55bae7",
                pointHoverBackgroundColor: "#55bae7",
                pointHoverBorderColor: "#55bae7",
            }],
            labels: data.years
        },
        options: {
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'index',
                intersect: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: (Math.round(Math.min(...data.carbon) - 50)),
                        max: (Math.round(Math.max(...data.carbon) + 50))
                    }
                }]
            }

        }
    });
}

function appendCows(sustainabilityData) {
    let data = prepareCowData(sustainabilityData);
    console.log(data);
    // generate chart
    let chartContainer = document.querySelector('#myChart');
    chart = new Chart(chartContainer, {
        type: 'line',
        data: {
            datasets: [{
                data: data.cows,
                label: 'Number of Cows',
                fill: false,
                borderColor: "#e755ba",
                backgroundColor: "#e755ba",
                pointBackgroundColor: "#55bae7",
                pointBorderColor: "#55bae7",
                pointHoverBackgroundColor: "#55bae7",
                pointHoverBorderColor: "#55bae7",
            }],
            labels: data.years
        },
        options: {
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'index',
                intersect: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: (Math.round(Math.min(...data.cows) - 50)),
                        max: (Math.round(Math.max(...data.cows) - 50))
                    }
                }]
            },

        }
    });
}

function appendFeed(sustainabilityData) {
    let data = prepareDigestionData(sustainabilityData);
    console.log(data);
    // generate chart
    let chartContainer = document.querySelector('#myChart');
    chart = new Chart(chartContainer, {
        type: 'line',
        data: {
            datasets: [{
                data: data.feed,
                label: 'Feed in tons',
                fill: false,
                borderColor: "#e755ba",
                backgroundColor: "#e755ba",
                pointBackgroundColor: "#55bae7",
                pointBorderColor: "#55bae7",
                pointHoverBackgroundColor: "#55bae7",
                pointHoverBorderColor: "#55bae7",
            }],
            labels: data.years
        },
        options: {
            tooltips: {
                mode: 'index',
                intersect: false
            },
            hover: {
                mode: 'index',
                intersect: false
            },
            scales: {
                yAxes: [{
                    ticks: {
                        min: (Math.round(Math.min(...data.feed) - 50)),
                        max: (Math.round(Math.max(...data.feed) + 50))
                    }
                }]
            }

        }
    });
}