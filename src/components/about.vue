<template>
  <section id="about">
    <div id="about_sec1"> 
      <div class="aboutWrap">
       <span class="h1txt">[</span>
      <span>
        <h1 :style="{display:'inline-block'}" class="text" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200"> 
      자신이 <span class="underline">물음표</span>를 가지는 일에<br>
      <span class="underbar">마침표를 찍을 수 있는 사람</span>
      </h1>
      
      </span>
      <span class="h1txt">]</span>
    </div>
    </div>

    <div id="about_sec2" class="sWrap">
      <div class="sec2_left" data-aos="fade-up" data-aos-duration="1200">
        <div class="sec2_text_wrap">
          <h2>이유주 LEE YUJU</h2>
          <p>상우고등학교 졸업</p>
          <p>강원대학교 회계학과 졸업</p>
          <p>태양아이에스(주) 디자이너 근무</p>
          <p>뷰(VUE)활용 프론트엔드 웹개발자 양성과정 수료</p>
          <span class="sec2_more" @click="sec2modal =! sec2modal">자기소개서 보기
           </span>
            </div>
           </div>
     
      <div class="sec2_right" data-aos="fade-up" data-aos-delay="200"  data-aos-duration="1200">
        <div class="sec2_profile_img"></div>
      </div>
       </div>
           <div class="sec2_more_modal" :class="{ active : sec2modal }">
            <div class="sec2_more_cont">
              <span class="closeBtn" @click="sec2modal =! sec2modal">CLOSE</span>
              <img src="../assets/about/resumeimg.png">
            </div>
        </div>
    <div id="about_sec3" class="sWrap">
      <div class="sec3_circle">
      <div  data-aos="fade-up"   data-aos-duration="200"></div>
      <div  data-aos="fade-up"   data-aos-duration="300"></div>
      <div  data-aos="fade-up"   data-aos-duration="500"></div>
      <div  data-aos="fade-up"   data-aos-duration="800"></div>
      </div>
    <div class="sec3_cont">
      <div class="sec3_coding" data-aos="fade-up" data-aos-delay="50"  data-aos-duration="1200">
        <h2>CODING SKILLS</h2>
        <ul>
          <li v-for="image in iconS">
            <div class="iconS">
               <img v-if="lightMode" :src="image.imgD" />
               <img v-else :src="image.img" /> </div>
              <p>{{ image.name }}</p></li>
        </ul>
      </div>
      <div class="sec3_design" data-aos="fade-up" data-aos-delay="200"  data-aos-duration="1200">
        <h2>DESIGN SKILLS</h2>
        <ul>
          <li v-for="image in iconD">
            <div class="iconD">
               <img v-if="lightMode" :src="image.imgD" />  <img v-else :src="image.img" /> </div>
              <p>{{ image.name }}</p></li>
        </ul>
      </div>
    </div>
  
    </div>
    <div id="about_sec4">
      <div class="aboutWrap">
       <span class="h1txt">[</span>
      <span>
        <h1 :style="{display:'inline-block'}" class="text" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"> 
      자신이 <span class="underline">물음표</span>를 가지는 일에<br>
      <span class="underbar">마침표를 찍을 수 있는 사람</span>
      </h1>
      
      </span>
      <span class="h1txt">]</span>
    </div>
    </div>
   
      
  </section>
  <div></div>
</template>

<script>
import {onMounted} from 'vue';
// import{ computed } from "vue";

export default {
  props: ['value'],
  data(){
    return{
      lightMode : this.value,
      sec2modal : false,
        
      iconS : [
        {img : require(`@/assets/skills/html_wht.png`), name : 'HTML', imgD : require(`@/assets/skills/html.png`)},
          {img : require(`@/assets/skills/css_wht.png`), name : 'CSS', imgD :require(`@/assets/skills/css.png`)},
          {img : require(`@/assets/skills/js_wht.png`), name : 'JavaScript', imgD :require(`@/assets/skills/js.png`)},
           {img : require(`@/assets/skills/nodejs_wht.png`), name : 'Node.js', imgD :require(`@/assets/skills/nodejs.png`)},
           {img : require(`@/assets/skills/mysql_wht.png`), name : 'MySQL', imgD :require(`@/assets/skills/mysql.png`)},
           {img : require(`@/assets/skills/vue_wht.png`), name : 'Vue.js', imgD :require(`@/assets/skills/vue.png`)},
           {img : require(`@/assets/skills/git_wht.png`), name : 'Git', imgD :require(`@/assets/skills/git.png`)},
           {img : require(`@/assets/skills/github_wht.png`), name : 'GitHub', imgD :require(`@/assets/skills/github.png`)},
      ],      
      iconD : [
        {img : require(`@/assets/skills/psd_wht.png`), name : 'Photoshop', imgD :require(`@/assets/skills/psd.png`)},
          {img : require(`@/assets/skills/ai_wht.png`), name : 'Illustrator', imgD : require(`@/assets/skills/ai.png`)},
          {img : require(`@/assets/skills/figma_wht.png`), name : 'Figma', imgD :require(`@/assets/skills/figma.png`)},
      ]
    }
  },
mounted() {
     window.addEventListener('scroll',this.scrllAbout)
  },
methods: {
    scrllAbout(){
    const zoomOut = document.querySelector('.aboutWrap');
    let out = 1;
    const scrollY = window.scrollY;
    const about = document.querySelector('#about');
    const sec2Left = document.querySelector('.sec2_left');
    const aboutT = about.offsetTop;
    const sec2LeftT = sec2Left.offsetTop;
    const circlrWrap = document.querySelector('.sec3_circle')

    // console.log(scrollY);
    // console.log('오프셋은' + aboutT);
    // console.log('섹션2오프셋은' + sec2LeftT);
    //오프셋은 852
    //deltaY는 100씩 움직인다
    if(scrollY < aboutT + 300 ){
      zoomOut.style.position = 'absolute'
      
    }
     if(scrollY >= aboutT + 300){
        window.addEventListener("wheel", function(e) {
        zoomOut.style.transform = `scale(0.4)`;
        zoomOut.style.transition = `all 0.5s`
 })  
  }else{
        zoomOut.style.transform =  `scale(${(out)})`;
        zoomOut.style.transition = `all 0.5s`
      }
  if(scrollY > aboutT + 350 && scrollY < sec2LeftT - 200){
        zoomOut.style.position = 'fixed'
        zoomOut.classList.add('active')
         zoomOut.style.top = '0'
         zoomOut.style.transition = `all 0.5s`

  }else {
         zoomOut.style.opacity = '0'
            zoomOut.style.top = '40%'
            zoomOut.style.transition = `all 0.5s`
      //  zoomOut.style.position = 'absolute'
      zoomOut.classList.remove('active')
  }
  
  if(scrollY > sec2LeftT - 200  && scrollY < 3600){
        zoomOut.style.opacity = '0'
      //  zoomOut.style.position = 'absolute'
      zoomOut.classList.remove('active')
      // zoomOut.style.top = '35%'
    zoomOut.style.transition = `all 0.5s`
  }else{
        zoomOut.style.opacity = '1'
    zoomOut.style.transition = `all 0.5s`
    
  }

  if(scrollY > 3400 && scrollY < 3800){
    zoomOut.style.opacity = '0'
   zoomOut.style.transition = `all 0.5s`
   
  }else if(scrollY >= 3800){
   zoomOut.style.opacity = '0'
  //  zoomOut.style.position = 'absolute'
   zoomOut.style.display = 'none'
  //  zoomOut.style.top = '40%'
  }else{
    zoomOut.style.display = 'block'
  }
  
  if(scrollY >= sec2LeftT + 400){
    circlrWrap.classList.add('active')
  }else{
    circlrWrap.classList.remove('active')
  }
  }
},
setup(){
  onMounted(()=>{
      const sec2More = document.querySelector('.sec2_more')
      sec2More.addEventListener('mouseenter',()=>{
        sec2More.classList.add('active')
      })
      sec2More.addEventListener('mouseleave',()=>{
        sec2More.classList.remove('active')
      })

      
  })


  },
watch: { 
  value(){
    console.log('와치가되나요?')
    this.lightMode = this.value
        
      

  },
    // immediate : false
  
        
       

    

},
}

</script>


<style scoped>
#about{
  width: 100%;
  padding-bottom: 5%;
/* height: 100vh; */
  /* overflow: hidden; */

}
  #about #about_sec1{
    position: relative;
    width:100%;
    /* height: 100vh; */
    color: #F6F6F6;
    margin: 0 auto;
    padding: 20% 0;
    box-sizing: border-box;
  }


   #about.darkmode #about_sec1{
      color: #0c0c0c;
   }
  #about #about_sec1 .aboutWrap{
    width: 100%; 
    opacity: 1;
  }
  #about  .aboutWrap span{
    display: inline-block; 
  }
  
  #about #about_sec1 .aboutWrap.active{
    width: 100%; 
    top: 0; 
    transition: all 0.5s;
  }
.underbar::after{
   display: block;
  content: '';
  height: 13px;
  width: 0%;
  background-color: #2152FF;
  animation: underbar 2s ease-in-out;
  animation-delay: 2s;
  animation-fill-mode:forwards;
}
section.darkmode .underbar::after{
   background-color: #1740d1;
}
#about .underline::after{
  display: block;
  content: '';
  height: 13px;
  background-color: #9AEF58;
  animation: underbar 2s ease-in-out;
}
#about.darkmode .underline::after{
  background-color: #8dde4e;
}

@keyframes underbar{
    0% {width:0%;}
    100% {width: 100%;}
  }
#about #about_sec2{
  width:100%;
  max-width: 1650px;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  /* padding-right: 10%;
  padding-left: 10%; */
  padding-top: 20%;
  padding-bottom: 5%;
  /* background-color: #303030; */
} 
#about .sec2_text_wrap{
  /* color: #F6F6F6; */
  text-align: left;
}
#about .sec2_text_wrap h2{
  display: inline-block;
  padding-bottom: 50px;
}
#about .sec2_text_wrap h2::after{
  display: block;
  content: '';
  height: 13px;
  width: 0%;
  background-color: #2152FF;
  animation: underbar 2s ease-in-out;
  animation-delay: 2s;
  animation-fill-mode:forwards;
}
#about.darkmode .sec2_text_wrap h2::after{
   background-color: #8dde4e;
}
#about .sec2_profile_img{
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background-color: #9AEF58;
  background-size: cover;
  background-image: url(../assets/about/profile-1.png);
  background-position: center center;
}
#about.darkmode .sec2_profile_img{
background-color: #1740d1;
}
#about.darkmode .sec2_text_wrap p{
  font-size: 28px;
}
#about .sec2_more{
  width: 45%; height: 40px;
  line-height: 40px;
  display: block;
  /* text-align: right; */
  font-size: 22px;
  font-weight: 300;
  padding-right: 45px;
  padding-top: 20px;
  background-image: url(../assets/common/resume.png);
  background-repeat: no-repeat;
  background-position: bottom 25% left 72%;
  background-size: 22px auto;
  transition: all 0.3s ease-in-out;
}
#about.darkmode .sec2_more{
  background-image: url(../assets/common/resumeBk.png);
}
#about .sec2_more.active{
    background-position: bottom 25% left 77%;
    transition: all 0.3s ease-in-out;
}

#about #about_sec3{
  width: 100%; height: 100vh;
  padding-top: 18%;
  margin-bottom: 10%;
    position:relative;
}
#about #about_sec3 .sec3_circle{
  display: flex;
  justify-content: space-between;
  top:-10%;
}

.sec3_circle div:first-child{
   position:absolute;
   top:-5%;
  width: 240px; height: 240px;
  border-radius: 50%;
  background-color: #9AEF58;
  /* opacity: 0; */
}
.section.darkmode .sec3_circle div:first-child{
   background-color: #8dde4e;
 
}
.sec3_circle.active div:first-child{
 
  animation: movingC 1s 1 ease-in-out;
  animation-fill-mode: forwards;
}
@keyframes movingC {
  0% { top : 0; opacity: 1;}
  45%{ top : 85%;}
  70%{top : 78%;}
  100% { top : 85%; opacity: 0.3;}
}
.sec3_circle div:nth-child(2){
  position:absolute;
  top:-10%;   top:-8%;
  left:35%;
  width: 115px; height: 115px;
  border-radius: 50%;
    /* transform: translateY(-80%); */
  background-color: #F6F6F6;
}
section.darkmode .sec3_circle div:nth-child(2){
  background-color: #D2D2D2;
}
.sec3_circle.active div:nth-child(2){
  animation: movingC2 1s 0.3s 1 ease-in-out;
  animation-fill-mode: forwards;
}
@keyframes movingC2 {
  0% { top : 0; opacity: 1;}
  45%{ top : 95%;}
  70%{top : 88%;}
  100% { top : 95%; opacity: 0.3;}
}
.sec3_circle div:nth-child(3){
  position:absolute;
  left:55%;   top:-8%;
  width: 165px; height: 165px;
  border-radius: 50%;
  /* transform: translateY(-80%); */
  background-color: #9AEF58;
}
section.darkmode .sec3_circle div:nth-child(3){
  background-color: #8dde4e;
}
.sec3_circle.active div:nth-child(3){
  animation: movingC3 1s 0.5s 1 ease-in-out;
  animation-fill-mode: forwards;
}
@keyframes movingC3 {
  0% { top : 0; opacity: 1;}
  45%{ top : 92%;}
  70%{top : 85%;}
  100% { top : 92%; opacity: 0.3;}
}
.sec3_circle div:last-child{
   position:absolute;
  right: 10%;  top:-5%;
  width: 290px; height: 290px;
  border-radius: 50%;
  background-color: #2152FF;
}
section.darkmode .sec3_circle div:last-child{
  background-color: #1740d1;
}
.sec3_circle.active div:last-child{
animation: movingC4 1s 0.8s 1 ease-in-out;
animation-fill-mode: forwards;
}
@keyframes movingC4 {
  0% { top : 0; opacity: 1;}
  45%{ top : 80%;}
  70%{top : 78%;}
  100% { top : 80%; opacity: 0.3;}
}
#about .sec3_cont{
  display: flex;
  position: relative;
  justify-content: space-between;
  top: -15%;
}
#about .sec3_coding{
  width:45%;
}
#about .sec3_coding ul{
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 10%;
  gap: 10%;
  margin: 0 auto;
}
#about .sec3_coding ul li{
  width: calc((80% - 80px) /4);
  padding-top: 10%;
  text-align: center;
}
#about .sec3_cont h2{
 display: inline-block;
}
#about .sec3_coding h2::after{
  display: block;
  content: '';
  height: 13px;
  width: 0%;
  background-color: #2152FF;
  animation: underbar 2s ease-in-out;
  animation-delay: 2s;
  animation-fill-mode:forwards;
}
#about .sec3_coding ul li p{
  padding-top: 10px;
  font-size: 18px;
}
#about .sec3_cont ul li img{
  display: block;
  box-sizing: border-box;
  width: 100%;
}
#about .sec3_design{
  width:45%;
}
#about .sec3_design ul{
  width: 90%;
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  padding-top: 10%;
  padding-left: 10%;
  gap: 10%;
  margin: 0 auto;

}
#about .sec3_design ul li{
  width: calc((80% - 90px) /4);
  padding-top: 10%;
    text-align: center;
}
#about .sec3_design ul li p{
  padding-top: 10px;
  font-size: 20px;
}
#about .sec3_design h2::after{
  display: block;
  content: '';
  height: 13px;
  width: 0%;
  background-color: #9AEF58;
  animation: underbar 2s ease-in-out;
  animation-delay: 2s;
  animation-fill-mode:forwards;
}
#about #about_sec4{
  width: 100%;
  /* height: 100vh; */
  padding: 5% 0;
  margin-bottom: 10%;
  box-sizing: border-box;
}

.sec2_more_modal{
  width: 100%;
  height: 100vh;
  background-color: #0c0c0c50;
  position:fixed;
  z-index: 2;
  top:0;
  opacity: 0;
  display: none;
  animation: modalClose 0.3s;
  /* transition: opacity 0.5s ease-in-out; */
}
.sec2_more_modal.active{
  opacity: 1;
  display: flex;
  animation: modalOpen 0.3s;
}

@keyframes modalOpen{
  0% {opacity: 0;}
  100% {opacity: 1;}
}
@keyframes modalClose{
  0% {opacity: 1;}
  100% {opacity: 0;}
}
.sec2_more_cont{
  position: relative;
  width: 100%;
}
.sec2_more_cont img{
  width: 32%;
  top: 6%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  margin:0 auto;
  box-sizing: border-box;
}

.sec2_more_cont .closeBtn{
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  font-weight: bold;
}


@media (max-width : 1670px){
 .sec2_more_cont img{
    width: 33%;
  }
}
@media (max-width : 1600px){
  #about #about_sec1{
    min-height: 500px;
  }
 .sec2_more_cont img{
    width: 34%;
  }
  #about #about_sec1{
    padding: 25% 0;
  }
}


@media (max-width : 1400px){
  #about #about_sec2{
  padding-bottom: 5%;
  height: auto;
  }
  #about .sec2_more{
     width: 35%; 
    font-size: 18px;
  }
  #about .sec2_profile_img{
    width: 400px;
    height: 400px;
  }
  #about .sec3_cont{
    top : -10%;
  }
  .sec2_more_cont img{
    width: 39%;
  }
  #about #about_sec3{
    padding-top: 15%;
    margin-bottom:0;
    margin-top: 5%;
  }
  
  #about .sec3_coding ul li p{
  font-size: 18px;
}
  #about .sec3_design ul li p{
  font-size: 18px;
}
.sec3_circle div:first-child{
  width: 195px; height: 195px;
}
.sec3_circle div:nth-child(2){
  width: 90px; height: 90px;
  }
.sec3_circle div:nth-child(3){
  width: 130px; height: 130px;
  }
.sec3_circle div:last-child{
  width: 240px; height: 240px;
  }
#about #about_sec4{
  padding: 10% 0;
}
}


@media (max-width : 1350px){
 .sec2_more_cont img{
    width: 40%;
  }
  .sec3_circle div:last-child{
    right:7%;
  }
}


@media (max-width : 1200px){
    #about .sec2_profile_img{
    width: 350px;
    height: 350px;
  }
  #about .sec2_more{
    font-size: 16px;
  }
  #about #about_sec3{
    height: 100%;
    padding-top:13%;
    padding-bottom:12%;
  }
  .sec3_circle div:first-child{
  width: 150px; height: 150px;
}
.sec3_circle div:nth-child(2){
  width: 70px; height: 70px;
  }
.sec3_circle div:nth-child(3){
  width: 95px; height: 95px;
  }
.sec3_circle div:last-child{
  width: 200px; height: 200px;
  }
  #about .sec3_coding ul li p{
  font-size: 16px;
}
  #about .sec3_design ul li p{
  font-size: 16px;
}
 .sec2_more_cont img{
    width: 47%;
  }
  #about #about_sec4{
    padding: 15% 0;
  }
}

@media (max-width : 1000px){
#about #about_sec2{
  padding-right: 8%;
  padding-left:8%;
  padding-bottom:10%;
  flex-direction: column;
}
.sec2_right{
  width:100%;
  display:flex;
  justify-content:center;
  padding-top:20%;
}

#about .sec2_more{
  width: 40%;
  background-size: 18px auto;

}
}

@media (max-width : 800px) {

  #about #about_sec2{
    padding-bottom: 15%;
  }
  #about #about_sec3{
    padding-bottom: 22%;
  }
  #about .sec3_cont{
    flex-direction:column;
    gap:10%;
  }
  #about .sec3_coding{
    width:100%;
  }
  #about .sec3_coding ul{
    padding-top: 3%;
  }
  #about .sec3_design{
    width:100%;
    padding-top: 20%;
  }
    #about .sec3_design ul{
    padding-top: 3%;
  }
 .sec3_circle div:last-child{
    width: 150px;
    height: 150px;
  }
  
}

@media (max-width : 700px) {
#about .sec2_text_wrap p{
 font-size: 17px;
}
}

@media (max-width : 500px){
#about #about_sec1{
  min-height: 350px;
}
#about #about_sec2{
  padding-top: 40%;
}
#about .sec2_text_wrap p{
 font-size: 3.5vw;
}
}

</style>

