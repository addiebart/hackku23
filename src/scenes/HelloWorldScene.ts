import Phaser from 'phaser'

let canvas : HTMLCanvasElement;
let arrowKey : Phaser.Types.Input.Keyboard.CursorKeys | undefined;
let space : Phaser.Input.Keyboard.Key | undefined;
let player : Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;
let justJumped : boolean;
let map : Phaser.Tilemaps.Tilemap;

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
        this.load.setBaseURL("./../play/assets")
        this.load.image('background', 'brickwall.jpg');
        this.load.image('ground', 'woodplank.jpg');
        this.load.spritesheet("player", "player.png", {
            frameWidth: 16,
            frameHeight: 16
        })
    }

    create()
    {
        //enable physics
        this.physics.resume()

        //make map
        map = this.make.tilemap({key: 'map'});

        //controls
        arrowKey = this.input.keyboard?.createCursorKeys();
        space = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        let bg = this.add.image(0, 0, "background");
        bg.scale = .25;
        bg.setOrigin(0, 0);
        player = this.physics.add.sprite(1*16, 5*16, "player");
        player.setOrigin(.5, 0);
        player.body.collideWorldBounds = true;

        let platforms = this.physics.add.staticGroup();
        platforms.setOrigin(0,0);
        for (let i = 0; i < 255; i++) {
            platforms.create(8+16*i, 96-8, 'ground')
        }

    }

    update(time: number, delta: number): void {
        console.log(player.body.checkCollision.down)

        let speed = 16;

        //right
        if (arrowKey?.right.isDown) {
            player.body.velocity.x = speed;
            player.flipX = false;
        }
        //left
        else if (arrowKey?.left.isDown) {
            player.body.velocity.x = -speed;
            player.flipX = true;
        }
        //default
        else {player.body.velocity.x = 0}
        //fastfall
        if (arrowKey?.down.isDown && player.body.velocity.y < 0) {
            player.body.setMaxVelocityY(24);
            player.body.velocity.y -= .0001;
        }

        if (player.body.velocity.y == 0) {
            player.body.setMaxVelocityY(100000);
        }

        //jump
        if ((Phaser.Input.Keyboard.JustDown(arrowKey?.up) || Phaser.Input.Keyboard.JustDown(space)) && player.body.checkCollision.down) {
            player.body.velocity.y = -300;
        }
    }
}
