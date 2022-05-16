difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){

video = createCapture(VIDEO);
video.size(1250, 784);

canvas = createCanvas(1150, 784);
canvas.position(1350,250);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}

function modelLoaded() {

console.log("PoseNet Is Initialized!");

}

function gotPoses(results){

if(results.length > 0){

console.log(results);

leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);

}

}

function draw(){

background("#050000");
textSize(difference);
fill("#6bdcff")
text("Hermoine", 50, 400)

}