noseX=0 ; 
noseY=0 ;

function preload(){
clown_img=loadImage('https://i.postimg.cc/6p6Mh8CG/download-removebg-preview.png') ;
}

function setup() {
canvas = createCanvas(500,500) ;
canvas.center() ;
video = createCapture(VIDEO) ;
video.hide() ;

poseNet = ml5.poseNet(video, modelLoaded) ;
poseNet.on('pose', gotPoses) ;
}

function draw() {
image(video, 0,0,500,500);
//fill('red') ;
//stroke('red') ;
//circle(noseX-80,noseY+15,30) ;
image(clown_img,noseX-85,noseY-5,50,60) ;
}

function take_snapshot() {
    save('myFillterImage.png') ;
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
if(results.length>0)
{
    console.log(results) ;
    noseX = results[0].pose.nose.x ;
    noseY = results[0].pose.nose.y ;
    console.log("nose x =" + noseX);
    console.log("nose y =" + noseY);
}
}