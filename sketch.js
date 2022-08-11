const reload = document.getElementById('reload');

reload.addEventListener('click', _ => {
    location.reload();
});


let canvas;
let URL1 = "https://dog.ceo/api/breeds/image/random";
let URL2 = "https://catfact.ninja/fact";
let URL3 = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";
let URL4 = "https://api.coindesk.com/v1/bpi/currentprice.json";
let URL5 = "https://randomuser.me/api/";
let catFact = null;
let randomUser = null;
let imageDog = null;
let coinDesk = null;
let population = null;

let button;
console.log("about to fetch the API");

function setup() {
    frameRate(60);
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.style('z-index', '-1');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('right', '0');
    //:.................
    button = createButton("dog image");
    button.position(500,50);
    button.mousePressed(reloadAPI1);

    //...................
    button = createButton("catfact");
    button.position(500,100);
    button.mousePressed(reloadAPI2);

    //...........
    button = createButton("random user");
    button.position(500,150);
    button.mousePressed(reloadAPI5);


    //..........
    button = createButton("population");
    button.position(500,200);
    button.mousePressed(reloadAPI3);

    //........
    button = createButton("prices");
    button.position(500,250);
    button.mousePressed(reloadAPI4);



function reloadAPI1() {
    fetch(URL1)
    .then(response => response.json())
    .then(data => {
        imageDog = loadImage(data.message);
        console.log(imageDog);

    })

    
}

function reloadAPI2() {
    fetch(URL2)
    .then(response => response.json())
    .then(data => {
        catFact = data
        console.log(data)
    });
    
}


function reloadAPI3() {
    fetch(URL3)
    .then(response => response.json())
    .then(data => {
        population = data
        console.log(data)
    });
    
}

function reloadAPI4() {
    fetch(URL4)
    .then(response => response.json())
    .then(data => {
        coinDesk = data
        console.log(data)
    });
    
}
function reloadAPI5() {
    fetch(URL5)
        .then(response => response.json())
        .then(data => {
            randomUser = data
            console.log(data)
        });
    
}
}




function draw() {
    background(0, 50);
    background(0);
    newCursor();
    textSize(15);
    text("Click the button of the API you want to see", 50, 30, 400);
    text("Click reload to clean the screen", 50, 650, 400);
    text("Click twice the API button to see another fact", 50, 700, 400);
    text("population", 170, 170, 300);
    text("random user", 170, 150, 300);
    text("prices", 170, 185, 300);


    if (catFact != null) {
        text(catFact.fact, 50, 55, 400);
    }
    if (randomUser != null) {
        text(randomUser.results[0].name.first + " " + randomUser.results[0].name.last,  50, 150, 300);
    }
    if (imageDog != null) {
        image(imageDog, 50, 200, 400, 400)
    }
    if (coinDesk != null) {
        text(coinDesk.chartName, 50, 185, 300);
    }
    if (population != null) {
        text(population.data[0].Population, 50, 170, 300);
    }
    
    


}


function mouseClicked() {
    if (mouseClicked = true) {


    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function newCursor() {
    noStroke();
    fill(255);
    ellipse(pmouseX, pmouseY, 10, 10);
}