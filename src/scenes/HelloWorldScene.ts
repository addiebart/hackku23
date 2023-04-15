import Phaser from 'phaser'

let canvas : HTMLCanvasElement;

export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super('hello-world')
	}

	preload()
    {
        canvas = document.querySelectorAll("canvas")[0];
        canvas.className = "main";
        this.load.image('background', './assets/brickwall.jpg');
        this.load.spritesheet("player", "./assets/player.png", {
            frameWidth: 16,
            frameHeight: 16
        })
    }

    create()
    {
        let bg = this.add.image(0, 0, "background");
        bg.scale = .6;
        bg.setOrigin(0, 0);
        let player = this.add.sprite(1*16, 5*16, "player");
        player.setOrigin(.5, 0);
    }

    update(time: number, delta: number): void {

    }
}
