<template>
<section id="project" class="fixH" :class="{ active : turnMode }">
  <div class="project_wrap sectionP" >
    <div class="pjt_left">
      <h1>[ PROJECT ]</h1>
    </div>
    <div class="pjt_right">
      <div class="pjt_cont_wrap">
        <div class="pjt_cont_propa" data-aos="fade-up" data-aos-delay="200"  data-aos-duration="700">
          <div class="pjt_cont_img">
            <img src="../assets/project/propaganda2.png" alt="">
          </div>
          <div class="pjt_cont_txt">
            <div class="pjt_txt_left">
              <h4>프로파간다 홈페이지 리뉴얼</h4>
              <p>멋지다 연진아 브라보 멋지다 연진아 브라보 멋지다 연진아 브라보 멋지다 연진아 브라보 멋지다 연진아 브라보 멋지다 연진아 브라보 멋지다 연진아 브라보 멋지다 연진아 브라보 길게길게길게 세줄 세줄 세줄 되나요 되나요 되나요? 됩니다 </p>
              <span class="pjt_txt_info">제작기간 : 2022.12.02 ~ 2022.12.24</span>
              <span>제작프로그램 : HTML, CSS, JS, NODE.JS 등</span>
            </div>
            <div class="pjt_txt_right">
              <div class="pjt_btn_page pjt_btn btn_arrow">
                <a href="">자세히보기</a></div>
              <div class="pjt_btn_mockup pjt_btn btn_arrow"><a href="">페이지리뷰</a></div>
              <div class="pjt_btn_github pjt_btn btn_arrow"><a href="">깃허브</a></div>
            </div>
          </div>
        </div>
        <div class="pjt_cont_re" data-aos="fade-up" data-aos-delay="300"  data-aos-duration="700">
          <div class="pjt_cont_img">
            <img src="../assets/project/rexre2.png" alt="">
          </div>
          <div class="pjt_cont_txt">
            <div class="pjt_txt_left">
              <h4>리바이리 홈페이지 리뉴얼</h4>
              <p>멋지다 연진아 브라보 멋지다 연진아 브라보 멋지다 연진아 브라보 멋지다 연진아 브라보 멋지다 연진아 브라보 멋지다 연진아 브라보 멋지다 연진아 브라보 멋지다 연진아 브라보 길게길게길게 세줄 세줄 세줄 되나요 되나요 되나요? 됩니다 </p>
              <span class="pjt_txt_info">제작기간 : 2022.12.02 ~ 2022.12.24</span>
              <span>제작프로그램 : HTML, CSS, JS, NODE.JS 등</span>
            </div>
            <div class="pjt_txt_right">
              <div class="pjt_btn_page pjt_btn btn_arrow">
                <a href="">자세히보기</a></div>
              <div class="pjt_btn_mockup pjt_btn btn_arrow"><a href="">페이지리뷰</a></div>
              <div class="pjt_btn_github pjt_btn btn_arrow"><a href="">깃허브</a></div>
            </div>
          </div>
        </div>
        <div class="pjt_cont_team"  data-aos="fade-up" data-aos-delay="500"  data-aos-duration="700">
          <div class="pjt_cont_img">
            <img src="../assets/project/rexre2.png" alt="">
          </div>
          <div class="pjt_cont_txt">
            <div class="pjt_txt_left">
              <h4>부산광역시 축제위원회 홈페이지 리뉴얼</h4>
              <p>멋지다 연진아 브라보 멋지다 연진아 브라보 멋지다 연진아 브라보 멋지다 연진아 브라보 멋지다 연진아 브라보 멋지다 연진아 브라보 멋지다 연진아 브라보 멋지다 연진아 브라보 길게길게길게 세줄 세줄 세줄 되나요 되나요 되나요? 됩니다 </p>
              <span class="pjt_txt_info">제작기간 : 2022.12.02 ~ 2022.12.24</span>
              <span>제작프로그램 : HTML, CSS, JS, NODE.JS 등</span>
            </div>
            <div class="pjt_txt_right">
              <div class="pjt_btn_page pjt_btn btn_arrow">
                <a href="">자세히보기</a></div>
              <div class="pjt_btn_mockup pjt_btn btn_arrow"><a href="">페이지리뷰</a></div>
              <div class="pjt_btn_github pjt_btn btn_arrow"><a href="">깃허브</a></div>
            </div>
          </div>
        </div>
   
      </div>
    </div>
  </div>
  <div class="project_bnr">
    <div class="bjt_bnr_wrap">
      <span class="h1txt">[</span><h1 class="typingW"></h1><span class="h1txt">]</span><h1 class="normalTxt">하는</h1> <h1>프론트엔드</h1><h1 class="normalTxt">개발자</h1>
    </div>
  </div>
</section>
 
</template>

<script>
import {onMounted} from 'vue'

export default {
  setup(){
  onMounted(()=>{
    const pjtBtn = document.querySelectorAll('.pjt_btn')
    const btnArrow = document.querySelectorAll('.btn_arrow')
    

    for(let i=0; i<pjtBtn.length; i++){
      pjtBtn[i].addEventListener('mouseenter',()=>{
        btnArrow[i].classList.add('active');
         })
      pjtBtn[i].addEventListener('mouseleave',()=>{
        btnArrow[i].classList.remove('active');
         })
      
        }

      const letters = ['도전','발전','노력'];
      let i = 0;
      const letter = letters[i].split('');
      const targets = document.querySelector('.typingW')
      // console.log(targets)
      console.log(letters[0])

      function typing(arr){
        if(arr.length > 0){
          targets.textContent += arr.shift();
          setTimeout(function() {
            typing(arr)}, 150)
        }
      }
       typing(letter);
       

        function blink(){
        targets.classList.toggle('active');
        }
        setInterval(blink, 500) //blink 함수를 0.5초마다 실행
      

       })

      //  dynamic(split);



},
  }

</script>

<style>

#project{
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding-bottom: 15%;
}

 .project_wrap{
  display: flex;
  gap: 5%;
}
 .project_wrap .pjt_left{
  width: 20%;
  height: 100vh;
  top: 5%;
  position: sticky;
  transform: scale(-1);
   writing-mode:vertical-rl;
   text-align: end;
}
 .project_wrap .pjt_right{
  width: 70%;
  height: auto;
}

 .pjt_cont_wrap .pjt_cont_img{
  width: 100%;
  height: auto;
  border: 1px solid #fff;
  margin-bottom: 5%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
     padding: 20px;
  box-sizing: border-box;
}
#project .pjt_cont_wrap .pjt_cont_propa .pjt_cont_img{
  background-image: url(../assets/project/propagandaBg.png);
}
#project .pjt_cont_wrap  .pjt_cont_img img{
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
}
.pjt_cont_wrap .pjt_cont_txt{
  width:100%;
  border: 1px solid #F6F6F6;
  padding: 30px;
  box-sizing: border-box;
}
#project.darkmode .pjt_cont_wrap .pjt_cont_txt{
   border: 1px solid #0c0c0c;
}
 .pjt_cont_wrap .pjt_cont_txt p{
  font-size: 18px;
}
 .pjt_cont_txt{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
 .pjt_cont_txt .pjt_txt_left{
  width: 70%;
  text-align: left;
  padding-left: 20px;
}
 .pjt_cont_txt .pjt_txt_left p{
  padding-top: 20px;
}
 .pjt_cont_txt .pjt_txt_right
{
  text-align: right;
  width: 30%;
  padding-right: 20px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: end;
   box-sizing: content-box;
  justify-content: space-around;

 

}
 .pjt_cont_txt .pjt_txt_right .pjt_btn{
  width: 150px; height: 45px;
  border: 1px solid #F6F6F6;
  margin-bottom: 20px;
  padding-right: 20px;
  text-align: center;
  line-height: 45px;
  font-size: 15px;
}
#project.darkmode .pjt_cont_txt .pjt_txt_right .pjt_btn{
  border: 1px solid #0c0c0c;
}

 .pjt_cont_txt span{
  font-weight: 400;
  font-size: 15px;
}
 .pjt_txt_info{
  display: block;
  padding-top: 20px;
}

 .btn_arrow{
  width:100%;
  height: 40px;
  line-height: 45px;
  background-image: url(../assets/common/resume.png);
  background-repeat: no-repeat;
  background-position: bottom 50% right 40px;
  background-size: 15px auto;
  transition: all 0.3s ease-in-out;
}
 .active.btn_arrow{
    background-position: bottom 50% right 30px;
}
 .active.pjt_btn_page{
  background-color: #2152FF;
  border: 1px solid transparent !important;
}
/* section.darkmode .active.pjt_btn_page{
   background-color: #1740d1; 
} */
 .active.pjt_btn_mockup{
  background-color: #8FE948;
  border: 1px solid transparent !important;
}
 section.darkmode .active.pjt_btn_mockup{
  background-color: #8dde4e;
 }
#project.darkmode .btn_arrow{
background-image: url(../assets/common/resumeBk.png);

}
 .active.pjt_btn_github{
  background-image: url(../assets/common/resumeBk.png);
  background-color: #F6F6F6;
  color: #0C0C0C;
  border: 1px solid transparent !important;
}
 #project.darkmode .active.pjt_btn_github{
    background-image: url(../assets/common/resume.png);
  background-color: #0C0C0C;
  color: #F6F6F6;
 }
/* 프로젝트2번째 */
#project .pjt_cont_wrap .pjt_cont_propa{
  padding-bottom: 18%;
}
#project .pjt_cont_wrap .pjt_cont_re{
  padding-bottom: 18%;
}
#project .pjt_cont_wrap .pjt_cont_re .pjt_cont_img{
  background-image: url(../assets/project/rexreBg.png);
}
#project .pjt_cont_wrap .pjt_cont_dusan{
  padding-bottom: 18%;
}
#project .pjt_cont_wrap .pjt_cont_dusan .pjt_cont_img{
  background-image: url(../assets/project/dusanBg.png);
}
#project .pjt_cont_wrap .pjt_cont_team{
  padding-bottom: 20%;
}
#project .project_bnr{
  width:100%;
  height: 100vh;
  position: relative;
  background-image: url(../assets/space-bnr_dark.png);
  background-size: cover;
  padding-top: 5%;
 
}
#project.darkmode .project_bnr{
    background-image: url(../assets/space-bnr_light.png);
}
#project .bjt_bnr_wrap{
  position: absolute;
  width: 100%;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
}
#project .normalTxt{
  font-weight: 300;
}
#project .h1txt{
  padding: 0 30px;
  box-sizing: border-box;
}
#project .project_bnr h1{
  display: inline-block;
  padding-right: 20px;
}

.typingW{
  position: relative;
  display: inline-block;
}
.typingW::after{
  position: absolute;
  top: -5px; right: 2px;
  font-weight: 400;
  content:"|";
  display: block;
  width: 0px; height: 100%;
  background-color: #fff;
}
.typingW.active::after{
  display: none;
}


@media (max-width : 1200px){
  .project_wrap .pjt_left{
    width: 15%;
  }
  .project_wrap .pjt_right{
    width: 75%;
  }
}

@media (max-width : 1100px){
  #project .bjt_bnr_wrap{
    width: 75%;
  }

}



@media (max-width : 1000px){
.pjt_cont_txt{
 padding: 20px;
}
..pjt_cont_txt .pjt_txt_left{
  padding-left: 0;
}
.pjt_cont_txt .pjt_txt_right{
  justify-content: unset;
  align-items:unset;
}
}

</style>