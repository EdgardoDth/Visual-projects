
//Perceptron
let p;
let training = [
    {
    inputs: [-1, 0, 0],
    outputs: [0]
  },
  {
    inputs: [-1, 0, 1],
    outputs: [0]
  },
  {
    inputs: [-1, 1, 0],
    outputs: [1]
  },
  {
    inputs: [-1, 1, 1],
    outputs: [1]
  },
];

/*
How the canvas is displayed in cartesian coordinates
x,y         x,y
0,0         1,0

x,y         x,y
0,1         1,1
*/
function setup() {
    createCanvas(400, 400);
    let learningrate = 0.2;

    p = new Perceptron(training[0].inputs.length, learningrate);

}

function draw() {
    background(100);
    for(let j  = 0; j < 1500; j++) {
        for(let i = 0; i < training.length; i++) {
            p.train(training[i].inputs, training[i].outputs);
        }
    }
    //stroke(0);
    let resolution = 10;
    let cols = width / resolution;
    let rows = height / resolution;
    let aux  = 0;
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x1 = i / cols;
            let x2 = j / rows;
            let inputs = [-1, x1, x2];
            let y = p.dot(inputs);
            noStroke();
            fill(y * 30, y * 50, y * 100); //black or blue
            rect(i * resolution, j * resolution, resolution, resolution);
        }
    }
    //noLoop();
}
