export class Enemy{
  constructor(game){
    this.game = game;
     this.x =  this.game.width;   
     this.speedX = Math.random() * -1.5 - 1.5;
    this.markedForDeletion= false;
    this.lives = 3;
    this.score =  this.lives;

 }
update(){
     this.x += this.speedX;
     if (this.x + this.width < 0) this.markedForDeletion = true;
}
draw(context){
    context.fillStyle = 'red';
    context.fillRect(this.x, this.y, this.width, this.height);
    context.fillStyle ='black'
    context.font = '20px Helvatica'
    context.fillText(this.lives,this.x, this.y)
 }

}

export class Angler1 extends Enemy {
    constructor (game) {
        super(game);
        this.width = 100;
        this.height = 100;
        this.score = 3;

        this.y = Math.random() * (this.game.height * 0.9 - this.height);
    }
}