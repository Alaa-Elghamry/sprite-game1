
import { Projectile } from './Projectile.js';
import { Enemy } from './Enemy.js';
const playerImage = new Image();
playerImage.src = 'assets/imgs/player.png';
export class Player {
    constructor(game) {
        this.game = game;
        this.width = 120;
        this.height = 190;
        this.x = 20;
        this.y = 250;
        this.image = document.getElementById('player');
        this.speedY = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.maxSpeed = 2;
        this.projectiles = []

    }
    update() {
        if (this.game.keys.includes('ArrowUp')) this.speedY = -this.maxSpeed;
        else if (this.game.keys.includes('ArrowDown')) this.speedY = this.maxSpeed;
        else this.speedY = 0
        this.y += this.speedY;

        if (this.game.keys.includes('ArrowRight')) this.speedX = -this.maxSpeed;
        else if (this.game.keys.includes('ArrowLeft')) this.speedX = this.maxSpeed;
        else this.speedX = 0
        this.x -= this.speedX;

        // Handle Projectiles
        this.projectiles.forEach(projectile => {
            projectile.update()
        })

        this.projectiles = this.projectiles.filter(projectile => !projectile.markedForDeletion)
    }
    draw(context) {
        context.drawImage(playerImage,0,0,this.width,this.height, this.x, this.y, this.width,this.height);
        // context.fillStyle = 'black'
        // context.fillRect(this.x, this.y, this.width, this.height);
        this.projectiles.forEach(projectile => {
            projectile.draw(context)
        })
    }
    shootTop() {
        if (this.game.ammo > 0) {
            this.projectiles.push(new Projectile(this.game, this.x +80, this.y +50));
            this.game.ammo --;
        }
    }
}