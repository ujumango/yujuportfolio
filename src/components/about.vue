<template>
  <section id="about">
    <div id="about_sec1"> 
      <div class="aboutWrap">
       <span :style="{paddingRight:'15px'},{fontSize:'96px'}">[</span>
      <span>
        <h1 :style="{display:'inline-block'}" class="text" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200"> 
      자신이 <span class="underline">물음표</span>를 가지는 일에<br>
      <span class="underbar">마침표를 찍을 수 있는 사람</span>
      </h1>
      
      </span>
      <span :style="{paddingLeft:'15px'},{fontSize:'96px'}">]</span>
    </div>
    </div>

    <div id="about_sec2" class="sWrap">
      <div class="sec2_left" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1200">
        <div class="sec2_text_wrap">
          <h2>이유주 LEE YUJU</h2>
          <p>상우고등학교 졸업</p>
          <p>강원대학교 회계학과 졸업</p>
          <p>태양아이에스(주) 디자이너 근무</p>
          <p>뷰(VUE)활용 프론트엔드 웹개발자 양성과정 수료</p>
          <span class="sec2_more"><a href="">자기소개서 보기</a>
           </span>
        </div>
      </div>
      <div class="sec2_right" data-aos="fade-up" data-aos-delay="200"  data-aos-duration="1200">
        <div class="sec2_profile_img"></div>
      </div>
    </div>
    <div id="about_sec3" class="sWrap">
      <div class="sec3_circle">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
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
        <h1 :style="{display:'inline-block'}" class="text" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"> 
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
import {onMounted} from 'vue'

export default {
  data(){
    return{
        lightMode : false,
        
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
     window.addEventListener('onload',this.modeImg)
  },
methods: {
    modeImg(){
          const about = document.querySelector('#about');
         if(about.classList.contains('darkmode')){
            this.lightMode = true;
           }else{
             this.lightMode = false;
           }
    },
    scrllAbout(){
    const about = document.querySelector('#about');
    const zoomOut = document.querySelector('.aboutWrap');
    let out = 1;
    const zoomoutSpeed = 0.1;
    const scrollY = window.scrollY;
    const aboutTop = about.offsetTop;
    const aboutHeight =  about.offsetHeight;
    const windowTop = window.pageYOffset;
    const project =  document.querySelector('#project')
    const projectTop = project.offsetTop;
    const projectHeight = project.offsetTop;
    const WoffsetT = scrollY.offsetTop;
    const circlrWrap = document.querySelector('.sec3_circle')
    // console.log(about);
    // console.log(aboutTop);
    console.log(scrollY);
    //  console.log(e.deltaY)
    //deltaY는 100씩 움직인다
    if(scrollY < 1180 ){
      zoomOut.style.position = 'absolute'
    }
     if(scrollY >= 1180 && scrollY < 2500){
        window.addEventListener("wheel", function(e) {
        zoomOut.style.transform = `scale(${(0.4)})`;
        zoomOut.style.transition = `all 0.5s`
        // e.preventDefault();
 })  
  }else{
        zoomOut.style.transform =  `scale(${(out)})`;
        zoomOut.style.transition = `all 0.5s`
      }
  if(scrollY > 1200 && scrollY < 1690){
        zoomOut.style.position = 'fixed'
        zoomOut.classList.add('active')
         zoomOut.style.top = '0'

  }else {
         zoomOut.style.opacity = '0'
            zoomOut.style.top = '40%'
      //  zoomOut.style.position = 'absolute'
      zoomOut.classList.remove('active')
  }
  
  if(scrollY > 1690  && scrollY < 3600){
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
   zoomOut.style.top = '40%'
  }else{
    zoomOut.style.display = 'block'
  }
  
  if(scrollY >= 2500){
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


  }

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
  #about #about_sec1  .aboutWrap{
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
#about .underline::after{
   display: block;
  content: '';
   height: 13px;
  background-color: #9AEF58;
  animation: underbar 2s ease-in-out;
}

@keyframes underbar{
    0% {width:0%;}

    100% {width: 100%;}

  }
#about #about_sec2{
  width:100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
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

#about .sec2_profile_img{
  width: 450px;
  height: 450px;
  border-radius: 50%;
  background-color: #9AEF58;
  background-image: url(../assets/about/profile-1.png);
  background-position: center center;
}
#about .sec2_more{
  width: 30%; height: 40px;
  line-height: 40px;
  display: block;
  /* text-align: right; */
  font-size: 24px;
  font-weight: 300;
  padding-right: 30px;
  padding-top: 20px;
  background-image: url(../assets/common/resume.png);
  background-repeat: no-repeat;
  background-position: bottom 25% right 30px;
  background-size: 22px auto;
  transition: all 0.3s ease-in-out;
}
#about .sec2_more.active{
    background-position: bottom 25% right 20px;
    transition: all 0.3s ease-in-out;
}
#about .sec2_more>a{
  display: block;
}
#about #about_sec3{
  width: 100%; height: 100vh;
  padding-top: 10%;
  padding-bottom: 10%;
}
#about #about_sec3 .sec3_circle{
  display: flex;
  justify-content: space-between;
}

.sec3_circle div:first-child{
  width: 240px; height: 240px;
  border-radius: 50%;
  transform: translateY(-80%);
  background-color: #9AEF58;
}
.sec3_circle.active div:first-child{
  animation: movingC 1s 1 ease-in-out;
  animation-fill-mode: forwards;
}
.sec3_circle div:nth-child(2){
  width: 115px; height: 115px;
  border-radius: 50%;
    transform: translateY(-80%);
  background-color: #F6F6F6;
}
#about.darkmode .sec3_circle div:nth-child(2){
  background-color: #D2D2D2;
}
.sec3_circle.active div:nth-child(2){
  animation: movingC2 1s 0.3s 1 ease-in-out;
  animation-fill-mode: forwards;
}
.sec3_circle div:nth-child(3){
  width: 165px; height: 165px;
  border-radius: 50%;
    transform: translateY(-80%);
  background-color: #9AEF58;

}
.sec3_circle.active div:nth-child(3){
  animation: movingC3 1s 0.5s 1 ease-in-out;
  animation-fill-mode: forwards;
}
.sec3_circle div:last-child{
  width: 290px; height: 290px;
  border-radius: 50%;
    transform: translateY(-80%);
  background-color: #2152FF;
}
.sec3_circle.active div:last-child{
animation: movingC4 1s 0.8s 1 ease-in-out;
animation-fill-mode: forwards;
}
@keyframes movingC {
  0% { transform: translateY(-80%);}
  45%{ transform: translateY(310%);}
  70%{ transform: translateY(235%);}
  100% { transform: translateY(310%);}
}
@keyframes movingC2 {
  0% { transform: translateY(-80%);}
  45%{ transform: translateY(755%);}
  70%{ transform: translateY(600%);}
  100% { transform: translateY(755%);}
}
@keyframes movingC3 {
  0% { transform: translateY(-80%);}
  45%{ transform: translateY(497%);}
  70%{ transform: translateY(470%);}
  100% { transform: translateY(497%);}
}
@keyframes movingC4 {
  0% { transform: translateY(-80%);}
  45%{ transform: translateY(240%);}
  70%{ transform: translateY(215%);}
  100% { transform: translateY(240%);}
}

#about .sec3_cont{
  display: flex;
  position: relative;
  justify-content: space-between;
  top: -20%;
}
#about .sec3_coding{
  width:45%;
}
#about .sec3_coding ul{
  width: 93%;
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
  width: 95%;
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
  height: 100vh;
  padding: 20% 0;
  box-sizing: border-box;
}
</style>

