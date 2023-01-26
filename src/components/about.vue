<template>
  <section id="about">
    <div id="about_sec1"> 
      <div class="aboutWrap">
       <span :style="{paddingRight:'15px'},{fontSize:'96px'}">[</span>
      <span>
        <h1 :style="{display:'inline-block'}" class="text" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1200"> 
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
      <div class="sec3_coding">
        <h2>CODING SKILLS</h2>
        <ul>
          <li v-for="image in icons">
            <div>
               <img :src="require(`@/assets/skills/${image.img}`)" /> </div>
              <p>{{ image.name }}</p></li>
        </ul>
      </div>
      <div class="sec3_design">
        <h2>DESIGN SKILLS</h2>
      </div>
    </div>
  
    </div>
   
      
  </section>
  <div></div>
</template>

<script>
export default {
  data(){
    return{
      icons : [
        {img : 'checked.png', name : '체크박스'},
          {img : 'check.png', name : '체크'},
          {img : 'check-box.png', name : '체크된박스'},
           {img : 'heart.png', name : '하트'},
           {img : 'heart-colored.png', name : '색칠된하트'}
      
      
      
      ]
    }
  },
mounted() {
     window.addEventListener('scroll',this.scrllAbout)
  },
  methods: {
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
    // console.log(scrollY);
    //  console.log(e.deltaY)
    //deltaY는 100씩 움직인다
     if(scrollY > 1180 && scrollY < 3500){
        window.addEventListener("wheel", function(e) {
        zoomOut.style.transform = `scale(${(0.4)})`;
        zoomOut.style.transition = `all 0.5s`

        // e.preventDefault();
 })  
  }else{
        zoomOut.style.transform =  `scale(${(out)})`;
        zoomOut.style.transition = `all 0.5s`
      }
  if(scrollY > 1200 && scrollY < 3500){
        zoomOut.style.position = 'fixed'
        zoomOut.classList.add('active')

  }else{
     zoomOut.style.position = 'unset'
      zoomOut.classList.remove('active')
      
  }
  if(scrollY >= 1800){
    zoomOut.style.opacity = '0'
    zoomOut.style.transition = `all 0.5s`
  }else{
        zoomOut.style.opacity = '1'
    zoomOut.style.transition = `all 0.5s`
  }
  
  if(scrollY >= 2700){
    circlrWrap.classList.add('active')
  }else{
    circlrWrap.classList.remove('active')
  }
  }
},
}

</script>


<style scoped>
#about{
  width: 100%;
  padding: 50px 0;
  overflow: hidden;

}
  #about #about_sec1{
     margin: 0 auto;
    width:100%;
    /* height: 100vh; */
    color: #F6F6F6;
    padding: 18% 0;

  }


  #about #about_sec1  .aboutWrap span{
    display: inline-block; 
  }
  #about #about_sec1 .aboutWrap.active{
    /* position: fixed; */
    width: 100%;
    top: -38px;
    transition: all 1s;
 
 
  }
  #about .underbar::after{
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
  padding-top: 10%;
  padding-bottom: 5%;
  /* background-color: #303030; */
} 
#about .sec2_text_wrap{
  color: #F6F6F6;
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
  width: fit-content; height: 40px;
  line-height: 40px;
  display: block;
  /* text-align: right; */
  font-size: 24px;
  font-weight: 300;
  padding-right: 30px;
  padding-top: 20px;
  background-image: url(../assets/common/resume.png);
  background-repeat: no-repeat;
  background-position: bottom 30% right;
  background-size: 22px auto;
}
#about .sec2_more>a{
  display: block;
}
#about #about_sec3{
  width: 100%; height: 100vh;
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
  justify-content: space-between;
  position: relative;
  top: -20%;
}
#about .sec3_coding{
  width:45%;
}
#about .sec3_coding ul{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 15%;
  gap: 50px;
}
#about .sec3_coding ul li{
  width: calc((90% - 100px) /3) ;
}
#about .sec3_coding ul li p{
  padding-top: 20px;
  font-size: 20px;
}
#about .sec3_coding ul li img{
  display: block;
  box-sizing: border-box;
  width: 100%;
}
#about .sec3_design{
  width:45%;
}
</style>

