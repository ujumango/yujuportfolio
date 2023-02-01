<template>
  <nav :class="{ active : turnMode }">
      <div :class="{ active : subMenu }" @click="subMenu = ! subMenu" class="hambergers">      
      <span class="hamberger"></span>
      <span class="hamberger"></span>
      <span class="hamberger"></span>
      </div>
    <!-- <div class="gnbBg"></div> -->
    <!-- 나중에 다시 살려야 함!! 배경!! -->
    <div :class="{ active : subMenu }" class="gnbWrap">

      <div class="gnbSide">
       <ul class="gnb">
      <li v-on:click="goSection" data-target="intro" class="gotosec active">INTRO</li>
      <li v-on:click="goSection" data-target="about" class="gotosec">ABOUT</li>
      <li v-on:click="goSection" data-target="project" class="gotosec">PROJECT</li>
      <li v-on:click="goSection" data-target="toyproject" class="gotosec">JAVASCRIPT</li>
      <li v-on:click="goSection" data-target="cloning" class="gotosec">CLONING</li>
      <li v-on:click="goSection" data-target="contact" class="gotosec">CONTACT</li>
    </ul>
    </div>
    </div>
    
   
 
   
  </nav>
</template>
<script>
import {onMounted} from 'vue'
export default {
  data(){
    return{
      subMenu : false,
      lightMode : true,
      
    }
  },
  setup(){
    onMounted(()=>{

   
    })
      },
  methods: {
    goSection(e){
      if(!e.target.matches('.gotosec')) return;
      //클래스가 있는지 없는지 일치하지 않으면 아무것도 하지 말아라(리턴값이 없음) 나중에 또 클래스를 겹쳐서 쓸 수도 있는 것을 방지
      e.preventDefault();
      
      const sec = document.getElementById(e.target.dataset.target);
      if(sec){
        sec.scrollIntoView({ behavior : "smooth"})
      }
    },
    
    },
    
   
    }


  
</script>
<style scoped>
nav{
  width: 100%; 
  text-align: right;
  position: relative;
}
nav .hambergers{
  position: fixed;
  z-index: 3;
  top: 5%; right: 3.5%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
}
nav .hambergers.active{
right: 5%;
transition: all 0.3s;
}
nav .gnbBg{
  position:fixed;
  width:100%; height: 100vh;
  background-color: #0C0C0C80;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.3s ease-in-out;
}
nav .gnbBg.active{
  z-index: 1;
  opacity: 1;
   transition: opacity 0.3s ease-in-out;
}
nav .gnbWrap{
  position: fixed;
  z-index: 1;
  top: 0;
  right: -100%;
  display: flex;
  width: 100%; height: 100vh;
  justify-content: flex-end;
  text-align:end;
   transition: all 0.7s ease-in-out;
}
nav .gnbWrap.active{
    transition: all 0.3s ease-in-out;
    right: 0;
    opacity: 1;
      z-index: 1;
}

nav .hambergers .hamberger{
  display: block;
  width: 45px; height: 4px;
  margin-bottom: 11px;
  background-color: #F6F6F6;
  transition: all 0.5s ease-in-out;
}

nav.darkmode .hambergers .hamberger{
    background-color: #0c0c0c;
}
 .hambergers .hamberger.contDark{
      background-color: #0c0c0c;
 }
nav .hambergers.active .hamberger:first-child{
   -webkit-transform: translateY(5px) rotate(45deg);
    -ms-transform: translateY(5px) rotate(45deg);
    -o-transform: translateY(5px) rotate(45deg);
    transform: translateY(5px) rotate(45deg);
}
nav .hambergers.active .hamberger:nth-child(2){
  display: none;
}
nav .hambergers.active .hamberger:last-child{
  -webkit-transform: translateY(-10px) rotate(-45deg);
    -ms-transform: translateY(-10px) rotate(-45deg);
    -o-transform: translateY(-10px) rotate(-45deg);
    transform: translateY(-10px) rotate(-45deg);
}
nav .gnbSide{
  position: absolute;
  right: 0; 
  width:30%; height: 100vh;
  box-shadow: -1px 0px 15px 0px #F6F6F630;
  background-color: #0C0C0C;
}
nav .gnbSide ul{
padding-top:150px;
padding-right: 20%;
opacity: 1;
display: flex;
color: #F6F6F6;
flex-direction: column;
align-items: flex-end;
}

nav .gnbSide ul>li{
  display: inline-block;
  width:fit-content;

  font-size: 45px;
  /* padding: 30px 0; */
  cursor: pointer;
}

nav.darkmode .gnbSide, .contDark.gnbSide{
  background-color: #F6F6F6;
  box-shadow: -1px 0px 15px 0px #0C0C0C60;
}
nav.darkmode .gnbSide ul, .contDark.gnbSide ul{
  color: #0C0C0C;
  font-weight: 500;
}
nav .gotosec::after{
  display: block;
  content: '';
width:auto;
  height: 13px;
  background-color: transparent;
}
nav .gotosec.active::after{
  background-color: #2152FF;
  animation: underbar 0.3s ease-in-out;
  box-sizing: border-box;
}
nav.darkmode .gotosec.active::after{
    background-color: #1740d1;
}
@keyframes underbar{
    0% {width:0%;}
    100% {width: 100%;}
}

#turnDiv{
  padding-right : 20%;
  padding-top: 10%;
}


@media (max-width : 1400px){
nav .gnbSide ul>li{
font-size : 36px;
}
}



@media (max-width : 1300px){
  nav .hambergers{
    right: 2%;
  }
  nav .gotosec::after{
  height: 10px;
  }
}




@media (max-width : 1100px){
nav .gnbSide{
  width: 35%;
}
  nav .gotosec::after{
  height: 8px;
  }
}
</style>