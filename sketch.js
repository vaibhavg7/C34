var ball;
var DB;
var loc;

function setup(){
    DB=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var pos=DB.ref("ball/position");
    pos.on("value",read,show);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    DB.ref("ball/position").set({x:loc.x+x,y:loc.y+y});
}

function read(data){
    loc=data.val();
    ball.x=loc.x;
    ball.y=loc.y;
}

function show(){
    console.log("error");
}
