<template>
<section id="intro">

  <div class="intro_wrap">

      <h1>HELLO,</h1>
      <h1>WORLD</h1>
      <div class="underbar_box"> 
        <span class="h1txtL">[</span>
      <span>
        <h1 class="text"></h1>
      <div class="underbar"></div>
      </span>
      <span class="h1txtR">]</span>
      
      </div>
    </div>
  
</section>
</template>

<script >

export default {

// data(){
//   return{
//     string : "HELLO WORLD"
//   }
// },

mounted() {
//타이핑 효과
const target = document.querySelector('.text');


const string = "THIS IS YUJU." //원하는 텍스트
const split = string.split(""); //string의 텍스트를 여러개의 문자열로 나눠줌
console.log(target)
//문자열을 한개씩 나타내주는 함수 만들기
function dynamic(arr){
    if(arr.length > 0){
        target.textContent += arr.shift();
        setTimeout(function(){
            dynamic(arr)}, 150) //0.08초 후에 dynamic 함수를 실행
        
    }
}
// dynamic(split); //dynamic 함수에 split 인자 넣어서 실행

function reset(){
    target.textContent = ""; //textContent의 내용 없애주기
    const resplit = string.split("");
    //string의 텍스트를 여러개의 문자열로 나눠주고 resplit 변수에 할당
    dynamic(resplit);
    
    //dynamic 함수에 resplit인자를 넣어서 실행
}

function dynamic(split){
    if(split.length > 0){
        target.textContent += split.shift();
        setTimeout(function(){
            dynamic(split)}, 150)
    }else{
        setTimeout(reset, 3000); 
        //3초 후에 reset 함수 실행
    }
}
dynamic(split);

function blink(){
    target.classList.toggle('active');
}
setInterval(blink, 500) //blink 함수를 0.5초마다 실행


},



}
    

</script>


<style scoped>

#intro{
  width: 100%; height: 100%;
   min-height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.35)), url(../assets/space-main.jpg) center/cover no-repeat;
}

#intro h1{
  line-height: 1.3;
}
#intro .h1txtL{
  padding-right: 15px;
}
#intro .h1txtR{
  padding-left: 15px;
}
.intro_wrap{
  color: #F6F6F6;
  font-size:100px;
  text-align: left;
  padding-left: 10%;
  padding-top: 13%;
}
.underbar_box span{
  display: inline-block;
  /* font-size: 54px; */
  color: #fff;
}


.underbar::after{
  display: block;
  content: '';
   height: 13px;
  background-color: #2152FF;
  animation: underbar 2s
   ease-in-out;
}
@keyframes underbar{
    0% {width:0%;}
    100% {width: 100%;}
}
.underbar_box h1{
  font-size: 96px;
}
.text{
    position: relative;
  display: inline-block;
  /* width: 100%; */

}
.text::after{
  position: absolute;
  top: -5px; right: 2px;
  font-weight: 400;
  content:"|";
  display: block;
  width: 0px; height: 100%;
  background-color: #F6F6F6;
}
.text.active::after{
  display: none;
}


@media (max-width : 1200px){
  .intro_wrap{
       padding-top: 400px;
  }
  .underbar_box h1{
    font-size:80px;
  }
  .underbar_box{
    transform: translateY(-20%);
  }
  .underbar_box span{
    font-size: 80px;
  }
}

@media (max-width : 1000px){
  .underbar_box h1{
    font-size: 70px;
  }
  .underbar_box span{
    font-size: 70px;
  }
}

@media (max-width :800px) {
  .intro_wrap{
    padding: 400px 5% 0 5%;
  }
   .underbar_box h1{
    font-size: 60px;
  }
}
</style>
