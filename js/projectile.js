const projectileImage = new Image();
projectileImage.src = 'assets/imgs/fireball.png';


export class Projectile {
    constructor(game, x, y){
        this.game= game;
        this.x = x;
        this.y = y;
        this.width = 45;
        this.height = 20;
        this.speed = 10;
        this.frameX = 0;
        this.maxFrame = 5;


        this.markedForDeletion = false
    }

    update(){
        this.x += this.speed
        if (this.x > this.game.width * 0.8) {
            this.markedForDeletion = true
        }
    //sprite animation
    if (this.frameX <  this.maxFrame){
        this.frameX++;
   } else this.frameX = 0; 
    }

    draw(context) {
        context.drawImage(projectileImage, this.frameX * this.width,0,this.width,this.height, this.x, this.y, this.width,this.height)
    }

}