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
}

function create ()
{
}

function update ()
{
}

var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, canvas.width, canvas.height);