let Phaser = require("phaser");
document.addEventListener("DOMContentLoaded", () => {
let canvas : HTMLCanvasElement;
let player;

var config = {
    type: Phaser.AUTO,
    width: 240,
    height: 240,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

/** @this Phaser.Game */
function preload ()
{
    canvas = document.querySelectorAll("canvas")[0];
    canvas.className = "main";
    this.load.image('background', './assets/brickwall.jpg');
    this
}

function create ()
{
    //game.world.setBounds(0, 0, 5000, 240);
    this.add.image(0, 50, "background");
}

function update ()
{
}

});