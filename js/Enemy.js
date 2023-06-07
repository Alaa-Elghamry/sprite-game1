export class Enemy{
  constructor(game){
    this.game = game;
    this.x =this.game.width;   
    this.speedX = Math.random() * -1.5 - 1.5;
    this.markedForDeletion= false;
    this.frameX = 0;
    this.frameY = 0;
    this.maxFrame = 37;

 }
update(){
     this.x += this.speedX - this.game.speed;
     if (this.x + this.width < 0) this.markedForDeletion = true;

    //sprite animation
    if (this.frameX <  this.maxFrame){
        this.frameX++;
   } else this.frameX = 0; 
   
}
draw(context){

    context.drawImage(this.image, this.frameX * this.width, this.frameY * this.height,this.width,this.height, this.x, this.y, this.width,this.height)  
     
    context.fillStyle ='black'
    context.font = '20px Helvatica'
    // context.fillText(this.lives,this.x, this.y)
 }

}

export class Angler1 extends Enemy {
    constructor (game) {
        super(game);
        this.width = 208;
        this.height = 234;
        this.score = 3;
        this.lives = 3;
        this.y = Math.random() * (this.game.height * 0.9 - this.height);
        this.image = document.getElementById('angler1');
        // this.frameY = Math.floor(Math.random() * 3);
        this.type ='Angler1';
        this.maxFrame = 11;
        // this.speedX = Math.random() * -1.5 - 1.5;



    }
}
export class Angler2 extends Enemy {
    constructor (game) {
        super(game);
        this.width = 213;
        this.height = 165;
        this.score = 2;
        this.lives = 2;
        this.y = Math.random() * (this.game.height * 0.9 - this.height);
        this.image = document.getElementById('angler2');
        this.frameY = Math.floor(Math.random() * 2);
        this.type ='Angler2';

    }
}
export class LuckyFish extends Enemy {
    constructor (game) {
        super(game);
        this.width = 99;
        this.height = 95;
        this.score = 15;
        this.lives = 3;
        this.y = Math.random() * (this.game.height * 0.9 - this.height);
        this.image = document.getElementById('lucky');
        this.frameY = Math.floor(Math.random() * 2);
        this.type = 'lucky' ;
    }
}