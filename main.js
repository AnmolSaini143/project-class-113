function preload() {
}

function setup() {
    canvas = createCanvas(800, 700);
    canvas.position(110, 300);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 200, 150, 300, 300);

    fill(0, 125, 0);
    stroke(0, 125, 0);
    rect(150, 150, 400, 20);
    rect(150, 150, 20, 300);
    rect(150, 450, 400, 20);
    rect(550, 150, 20, 300)

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(150, 150, 80);
    circle(550, 150, 80);
    circle(550, 450, 80);
    circle(150, 450, 80);
}

