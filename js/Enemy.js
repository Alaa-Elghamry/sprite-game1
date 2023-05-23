export class Enemy{
  constructor(game){
    this.game = game;
     this.x = 1;
     this.game.width;
     this.speedx = Math.random() * -1.5 - 0.5;
    this.markedForDeletion= false;
 }
update(){
     this.x += this.speedX;
     if (this.x + this.width < 0) this.markedForDeletion = true;
}
draw(context){
     context. fillstyle = 'red';
    context.fillRect(this.x, this.y, this.width, this.height);
 }

}

export class Angler1 extends Enemy {
    constructor (game) {
        super(game);
        this.width = 228;
        this.height - 169;
        this.y = Math.random() * (this.game.height * 0.9 - this.height);
    }}