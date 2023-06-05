import { Player } from './Player.js';
import { UI } from './UI.js';
import { Projectile } from './Projectile.js';
import { InputHandler } from './InputHandle.js';
import { Angler1 } from './Enemy.js';
import { Angler2 } from './Enemy.js';
import { LuckyFish } from './Enemy.js';
import { Background } from './Background.js';

window.addEventListener('load', function () {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 1280;
  canvas.height = 500;


  // Main Game Class
  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.x = 0;
      this.y = 0;
      this.keys = [];
      this.enemies = [];
      this.enemyTimer = 0;
      this.enemyInterval = 1000;
      this.speed = 1 ;
      this.ammo = 20;
      this.maxAmmo = 50;
      this.ammoTimer = 0;
      this.ammoInterval = 500;
      this.score = 0
      this.winningScore = 50;
      this.gameOver = false;

      this.player = new Player(this);
      this.projectile = new Projectile(this);
      this.input = new InputHandler(this);
      this.ui = new UI(this);
      this.background = new Background(this);
      // this.enemy = new Enemy(this);
      
    }
    update(deltaTime) {
      this.player.update(deltaTime);
      this.background.update();
      this.background.layer4.update();
      if (this.ammoTimer > this.ammoInterval) {
        if (this.ammo < this.maxAmmo) {
          this.ammo++;
          this.ammoTimer = 0;
        }
      } else {
        this.ammoTimer += deltaTime;
      }
      
    // check for collision with enemies 
      this.enemies.forEach(enemy => {
        enemy.update()
        if (this.checkColllision(this.player,enemy)) {
          enemy.markedForDeletion = true;
          if (enemy.type = 'lucky') {
            console.log(enemy.type);
            this.player.enterPowerUp();
          } else {this.score-- ;}
        }
        this.player.projectiles.forEach(projectile => {
          if (this.checkColllision(projectile,enemy)) {
            projectile.markedForDeletion = true;
            enemy.lives-- ;
            if (enemy.lives === 0) {
          enemy.markedForDeletion = true;
          this.score += enemy.score
          if (this.score > this.winningScore) {
            this.gameOver = true;
          }
          }
      }})


      });



     // filter the marked for deletion enemies from the array
      this.enemies = this.enemies.filter(enemy => !enemy.markedForDeletion );

      if (this.enemyTimer > this.enemyInterval && !this.gameOver) {
        this.addEnemy();
        this.enemyTimer = 0;
      }else{
        this.enemyTimer += deltaTime;
      }
    }

    draw(context) {
      // this.update()
      this.background.draw(context);
      this.player.draw(context);
      this.ui.draw(context);
      this.enemies.forEach(enemy => {
        enemy.draw(context)
      });
      this.background.layer4.draw(context);

    }

    addEnemy(){
      const randomize = Math.random()
if (randomize < 0.3) {
  this.enemies.push(new Angler1(this));
    } else if (randomize < 0.6) {
      this.enemies.push(new Angler2(this));
    } else  this.enemies.push(new LuckyFish(this));
    }  
    checkColllision (rect1,rect2){
      return (rect1.x < rect2.x + rect2.width &&
          rect1.x + rect1.width > rect2.x  &&
          rect1.y < rect2.y + rect2.height &&
          rect1.y + rect1.height > rect2.y )  
      
    }
  }

  const game = new Game(canvas.width, canvas.height);
  let lastTime = 0;
  // Animation Loop
  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;

    // reset lastTime to calc the deltaTime for next animation loop
    lastTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    game.update(deltaTime);
    game.draw(ctx);
    requestAnimationFrame(animate);
  }
  animate(0);
});




