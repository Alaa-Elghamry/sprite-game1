export class UI {
    constructor (game){
        this.game = game;
         this.fontSize = 25;
         this.fontFamily = 'Helvetica';
         this.color = 'white';
         console.log(this.color);
    }
    draw(context){
         // ammo
         context.fillstyle = this.color;
         for (let i = 0; i < this.game.ammo; i++){
             context.fillRect(20 + 8*i, 50, 3, 20);
         }}    
}