export class UI {
    constructor(game) {
        this.game = game;
        this.fontSize = 25;
        this.fontFamily = 'Bangers';
        this.color = 'white';
    }
    draw(context) {
        context.save();
        context.fillstyle = this.color;
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowColor = 'black';
        context.shadowBlur = 2;
        context.fillStyle = this.color;
        context.font = this.fontSize + 'px ' + this.fontFamily;

        context.fillText('Score: ' + this.game.score, 20, 40);
        // ammo
        context.fillStyle = this.color;
        for (let i = 0; i < this.game.ammo; i++) {
            context.fillRect(20 + 8 * i, 50, 3, 20);
        }

        if (this.game.gameOver) {
            // context.textAlign = 'center';
            let message1;
            let message2;
            if (this.game.score > this.game.winningScore) {
                message1 = 'You Win!';
                message2 = "Well Done";

                this.game.enemies.forEach(enemy => {    
                      enemy.markedForDeletion = true;             
                    this.game.player.projectiles.forEach(projectile => {
                        projectile.markedForDeletion = true;                    
                  })
             
                  });

            } else {
                message1 = 'You Lose!';
                message2 = "Better Luck Next Time";
            }
            
        context.font = '80px ' + this.fontFamily;
        context.fillText(message1,this.game.width * 0.5 ,this.game.height * 0.5 - 40 )
        context.font = '45px ' + this.fontFamily;
        context.fillText(message2,this.game.width * 0.5 ,this.game.height * 0.5 + 40)
        }

    }
}