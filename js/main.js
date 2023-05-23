import { Player } from './Player.js';
import { UI } from './UI.js';
import { Projectile } from './Projectile.js';
import { InputHandler } from './InputHandle.js';
import { Enemy } from './Enemy.js';
import { Angler1 } from './Enemy.js';

window.addEventListener('load', function () {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  canvas.width = 1280;
  canvas.height = 720;


  // Main Game Class
  class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.x = 0;
      this.y = 0;
      this.keys = [];
      this.enemies = [];
      this.ammo = 20;
      this.maxAmmo = 50;
      this.ammoTimer = 0;
      this.ammoInterval = 500;

      this.player = new Player(this);
      this.projectile = new Projectile(this);
      this.input = new InputHandler(this);
      this.ui = new UI(this);
      
    }
    update(deltaTime) {
      this.player.update();
      if (this.ammoTimer > this.ammoInterval) {
        if (this.ammo < this.maxAmmo) {
          this.ammo++;
          this.ammoTimer = 0;
        }
      } else {
        this.ammoTimer += deltaTime;
      }
      

      this.enemies.forEach(enemy => {
        enemy.update()
      });

      this.enemies = this.enemies.filter(enemy => !enemy.markedForDeletion );
    }

    draw(context) {
      // this.update()

      this.player.draw(context);
      this.ui.draw(context);
      this.enemies.forEach(enemy => {
        enemy.draw(context)
      });
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




