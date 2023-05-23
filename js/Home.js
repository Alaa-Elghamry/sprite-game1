const homeImg = new Image();
homeImg.src = 'assets/imgs/story.jpg';

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1280;
canvas.height = 720;
window.addEventListener('load', function (){
// Home Game Class
 class Home {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
 }

 update(){

 }
 draw(context){
        context.fillStyle = 'black'
    context.fillRect(this.x, this.y, this.width, this.height);
 }}
 const home = new Home();



 function animate() {
     
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        requestAnimationFrame(animate);
      }
      animate();
    
// Home Scene



    console.log("Home state");
});