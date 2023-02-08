<template>
<div id="toy2">

 <!-- <h4>GAME START</h4> -->
       <div class="box">
        <p>정지 : ESC  </p>
        <p>이어서하기 : ENTER</p>
       </div>
</div>
</template>

<script>
import {onMounted} from 'vue'
export default {
data(){
  return{

  }
},
setup(){
  onMounted(()=>{
    


  let backgroundImg = require(`@/assets/toy/background.png`);
  let spaceshipImg = require(`@/assets/toy/spaceship.png`);
  let gameOverImg = require(`@/assets/toy/gameover.png`);
  let enemyImg = require(`@/assets/toy/enemy.png`);
  let bulletImg = require(`@/assets/toy/bullet.png`);
  let pauseImg = require(`@/assets/toy/pause.png`);
   
//캔버스세팅
let canvas;
let ctx;
// ctx : 이미지 그리는 걸 도와주는 변수

canvas = document.createElement('canvas');


ctx = canvas.getContext('2d');


canvas.width = 400;
canvas.height = 700;
//이 캔버스의 높이와 너비를 html에 넣어줘야 함
const toy2 = document.querySelector('#toy2')
toy2.appendChild(canvas);
//appndChild : 자식으로 붙여주라(캔바스를 자식으로 붙여주라!)

//이미지 불러오는 함수
let backgroundImage,spaceshipImage,bulletImage,enemyImage,gameOverImage;
let gameOver = false // true면 게임이 끝남, false이면 게임 진행
let score = 0;
let gameV = false //test
let gameStatus = 'A' //게임 실행





//우주선 좌표
let spaceshipX = canvas.width/2-35;

let spaceshipY = canvas.height-65;
// 700 - 65 (높이-비행기높이)


function loadImage (){
    backgroundImage = new Image();
    backgroundImage.src= backgroundImg;

    console.log('백그라운드는', backgroundImage);

    spaceshipImage = new Image();
    // spaceshipImage.src = "imgs/buster.png"
    spaceshipImage.src = spaceshipImg;

    gameOverImage = new Image();
    gameOverImage.src = gameOverImg;
      console.log('게임오버는', gameOverImage);

    enemyImage = new Image();
    enemyImage.src = enemyImg;

    bulletImage = new Image();
    bulletImage.src = bulletImg;

    // fireImage = new Image();
    // fireImage.src = "img/fire.png"

    pauseImg = new Image();
    pauseImg.src = pauseImg;
}

let bulletList =[] //총알들을 저장하는 리스트(배열)
function Bullet () {
    
    this.x = 0;
    this.y = 0; //초기값

    this.init = ()=>{
        this.x = spaceshipX + 20; 
        this.y = spaceshipY; 

        bulletList.push(this) 
       
        this.alive= true //살아있음 false면 죽음
    };

//총알이 쏘아지면 올라감
this.update = ()=>{
    this.y -= 7;

}//이걸 update함수 안에 넣어줘야 함 고고!

//총알을 발사할 때마다 체크를 헤줄거야

this.checkhit = function(){

    //총알.y <= 적군.y and
    //총알.x >= 적군.x and 총알.x <= 적군.x + 적군의 너비
    for(let i=0; i<enemyList.length; i++){
        if(this.y <= enemyList[i].y && this.x >= enemyList[i].x && this.x <= enemyList[i].x + 40){
            //총알이 죽으면 적군의 우주선이 없어지고 점수획득
            score ++;
            this.alive = false //죽은 총알!
            enemyList.splice(i, 1);
            //enemyList에서 i번째에 있는 값 1개를 우주선만 잘라내라
    
    }
}
} 
}




function generateRandomValue(min, max){

    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNum;
} 


let enemyList = []
function Enemy(){
    this.x = 0;
    this.y = 0;
    this.init = ()=>{
        this.y = 0 //최상단
        this.x = generateRandomValue(0, canvas.width-60);
        enemyList.push(this);
        //this는 방금 만든 적군(x값, y값)
    }
//적군이 내려와라
this.update = function(){
    this.y += 3 //적군의 속도 조절

    if(this.y >= canvas.height - 60){
        gameOver = true;
        gameStatus = 'Q';
        // console.log('gameover')
        console.log('game status  = Q')
    }
}
}






//방향키 누르면 이동하는 이벤트
let keysDown = {}


function setupKeyboardListner() {
    document.addEventListener('keydown',(event)=>{
        keysDown[event.keyCode] = true
        //누른 상태에는 버튼 값 저장, 키가 떼지면 버튼 값이 사라져야 함.
    });
    document.addEventListener('keyup', (event)=>{
        delete keysDown[event.keyCode]
        if(event.keyCode == 32){
            createBullet() //총알 생성하는 함수
        }    
    });

}



function createBullet(){
    console.log('총알생성');
    let b = new Bullet();
    b.init() 
}

//적군이 1초마다 생기기
function createEnemy(){
    const interval = setInterval(function() {
        let e = new Enemy();
        e.init();
    },1000);

}

//우주선 X,y 값 업데이트해서 이동
function update() {
    if(39 in keysDown) {
        spaceshipX += 3 //우주선의 속도
    }// right
    if (37 in keysDown) {
        spaceshipX -= 3
    }// left

 //우주선의 좌표값이 무한대로 없데이트 되지 않고 경기장 안에서만 움직일 수 있게 하려면?
//x좌표 최소값 :0, 최대값: 130(캔버스의 너비-우주선 크기)
if(spaceshipX <= 0){
    spaceshipX = 0
}
if(spaceshipX >= canvas.width - 70){
    spaceshipX = canvas.width -70
}

//총알의 y좌표를 업데이트 해주는 함수 호출하면서 점수체크
for(let i=0; i<bulletList.length; i++){
    bulletList[i].update();
    bulletList[i].checkhit();

}

for(let i=0; i<enemyList.length; i++){
    enemyList[i].update();
}
}




//이미지 보여주는 함수
//render : 그리다, draw의 개념. ui를 그려주는 것
function render() {

ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
//canvas의 너비와 높이만큼
ctx.drawImage(spaceshipImage, spaceshipX, spaceshipY);

ctx.fillText(`score : ${score}`,20,30);
ctx.fillStyle = "white";
ctx.font = "20px arial";

//총알을 그려주자
for(let i=0; i<bulletList.length; i++){
    if(bulletList[i].alive){ //총알이 살아있으면 보여줘!
        ctx.drawImage(bulletImage, bulletList[i].x,bulletList[i].y); 
    }else{
        // ctx.drawImage(fireImage, bulletList[i].x,bulletList[i].y)
    }
   
}

//적군을 그려주자
for(let i=0; i<enemyList.length; i++){
    ctx.drawImage(enemyImage, enemyList[i].x, enemyList[i].y)
}
}



function main() {

    if(gameStatus == 'A'){ 
    // gameV = false
    update();
    render();
    requestAnimationFrame(main) 

}else if(gameStatus == 'Q'){
    console.log('게임멈춰!!')
    ctx.drawImage(gameOverImage,20,130,350,380)
    
}else if(gameStatus == 'P'){
    gameV = true;
    console.log('P가 되면용')
    ctx.drawImage(pauseImg,50,280,300,100)
}
}

function pause() {
    document.addEventListener('keydown', function(event){
        
        if(event.keyCode == 27){
            gameStatus = 'P'
            console.log('ESC클릭')
       
        }else if(event.keyCode == 13){
            console.log('ENTER클릭')
            gameStatus = 'A'
            main();
        }
    })
}




//만들어준 함수 불러주라
loadImage();
setupKeyboardListner();
createEnemy();
main();
pause();




  })
}




}
</script>

<style scoped>
  #toy2{
    width: 100%;
  }
  body{
            width: 100%;
            text-align: center;
            /* background-image: url(../assets/toy/bodyBg.jpg);
            background-repeat: no-repeat;
            background-size: cover; */
            margin: 0;
            color: aliceblue;
     
        }
 .box{
          width: 20%; height: fit-content;
          padding: 20px 0;
          margin: 50px;
          background-color: #f6f6f6;
          color: #0c0c0c;
        }
#toy2{
         display: flex;
            background-image: url(../assets/toy/bodyBg.jpg);
            background-repeat: no-repeat;
            background-size: cover; 
            padding: 10px 0;
}
 canvas{    width: 90%; height: auto;
           display: flex;
           /* margin: 0 auto;  */
           background-color: aquamarine;
        }
</style>