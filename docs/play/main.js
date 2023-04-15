document.addEventListener("DOMContentLoaded", () => {
let canvas;

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

function preload ()
{
    canvas = document.querySelectorAll("canvas")[0];
    canvas.className = "main";
    this.load.image('background', './assets/brickwall.jpg');
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