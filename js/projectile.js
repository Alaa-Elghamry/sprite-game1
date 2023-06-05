const projectileImage = new Image();
projectileImage.src = 'assets/imgs/projectile.png';


export class Projectile {
    constructor(game, x, y){
        this.game= game;
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 3;
        this.speed = 10;
        this.markedForDeletion = false
    }

    update(){
        this.x += this.speed
        if (this.x > this.game.width * 0.8) {
            this.markedForDeletion = true
        }
    }

    draw(context) {
        context.drawImage(projectileImage, this.x, this.y)
    }

}