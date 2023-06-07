
import { Projectile } from './Projectile.js';
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
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrame = 37;

        this.speedY = 0;
        this.speedX = 0;
        this.maxSpeed = 10;
        this.projectiles = []

        this.powerUp =false;
        this.powerUpTimer =0;
        this.powerUpLimit =10000;

    }
    update(deltaTime) {
        if (this.game.keys.includes('ArrowUp')) this.speedY = -this.maxSpeed;
        else if (this.game.keys.includes('ArrowDown')) this.speedY = this.maxSpeed;
        else this.speedY = 0
        this.y += this.speedY;

        if (this.game.keys.includes('ArrowRight')) this.speedX = -this.maxSpeed;
        else if (this.game.keys.includes('ArrowLeft')) this.speedX = this.maxSpeed;
        else this.speedX = 0
        this.x -= this.speedX;

////////////////// Game Borders /////////////////////////     
  if (this.y > this.game.height - this.height * 0.5) {
    this.y = this.game.height - this.height * 0.5
  }else if (this.y < -this.height * 0.5) this.y = -this.height * 0.5;

  if (this.x < this.game.x) {
    this.x = this.game.x;
  }else if (this.x > this.game.width - this.width) {
    this.x = this.game.width - this.width;
  }        
        // Handle Projectiles
        this.projectiles.forEach(projectile => {
            projectile.update()
        })

        this.projectiles = this.projectiles.filter(projectile => !projectile.markedForDeletion)

    //sprite animation
    if (this.frameX <  this.maxFrame){
         this.frameX++;
    } else this.frameX = 0;


     // power Up
     if (this.powerUp) {
         if (this.powerUpTimer > this.powerUpLimit) {
           this.powerUpTimer=0;
           this.powerUp = false;
           this.frameY = 0;
         
     }else {
        this.powerUpTimer +=deltaTime ;
        this.frameY = 1;
        // this.game.ammo += 0.1;
     }} 
    }
    draw(context) {
        // context.strokeRect(this.x, this.y, this.width, this.height);
        context.drawImage(playerImage, this.frameX * this.width, this.frameY * this.height, this.
            width, this.height, this.x, this.y, this.width, this.height)

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
    enterPowerUp(){
        this.powerUp = true;
        this.powerUpTimer = 0;
        this.game.ammo = this.game.maxAmmo;
        if (this.game.lives <3) {
            this.game.lives++ ;
        }      

    }
    resetPlayer() {
        this.maxSpeed = 0;
  
        //// Resrt Player
        this.projectiles = [];
        this.x = 20;
        this.y = 250;
        this.speedX = 0;
        this.speedY = 0;
        this.maxSpeed = 2;
        this.powerUp =false;
        this.powerUpTimer =0;
        this.powerUpLimit =10000;
        this.frameX = 0;
        this.frameY = 0;
        
    }
}