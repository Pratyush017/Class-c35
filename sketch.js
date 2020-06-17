var  database;
var gameState = 0;
var playerCount = 0;
var player;
var form,game;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  game= new Game();
  game.getState();
  game.start();
}

function draw(){
 
  
}

