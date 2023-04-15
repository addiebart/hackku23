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
}

function create ()
{
}

function update ()
{
}

});