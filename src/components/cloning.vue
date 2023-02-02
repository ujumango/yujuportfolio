<template>
<section id="cloning" class="fixH">
    <div class="project_wrap sectionP">
    <div class="pjt_left">
      <h1>[ CLONING ]</h1>
    </div>
    <div class="pjt_right">
      <div class="pjt_cont_wrap">
       <div class="cloning_cont_dosirak"  data-aos="fade-up"   data-aos-duration="700">
        <div class="cloning_cont_img">
          <img src="../assets/cloning/dosirak.png" alt="">
             <div class="pjt_cont_txt">
            <div class="pjt_txt_left">
              <h4>도시락통 웹크로닝</h4>
              <p>멋지다 연진아 브라보 멋지다 연진아 브라보 멋지다 연진아 브라보 </p>
              <span class="pjt_txt_info">제작기간 : 2022.12.02 ~ 2022.12.24</span>
              <span>제작프로그램 : HTML, CSS, JS 등</span>
            </div>
            <div class="pjt_txt_right">
              <div class="pjt_btn_page pjt_btn btn_arrow">
                <a href="http://uju.dothome.co.kr/dosirock/index.html" target="_blank">자세히보기</a></div>
        
 
            </div>
          </div>
           </div>
       </div>
       <div class="cloning_cont_greenhome"  data-aos="fade-up"   data-aos-duration="1000">
         <div class="cloning_cont_img">
               <img src="../assets/cloning/greenhome.png" alt="">
             <div class="pjt_cont_txt">
            <div class="pjt_txt_left">
              <h4>싱그러운 집 웹크로닝</h4>
              <p>멋지다 연진아 브라보 멋지다 연진아 브라보 멋지다 연진아 브라보 </p>
              <span class="pjt_txt_info">제작기간 : 2022.12.02 ~ 2022.12.24</span>
              <span>제작프로그램 : HTML, CSS, JS 등</span>
            </div>
            <div class="pjt_txt_right">
              <div class="pjt_btn_page pjt_btn btn_arrow">
                <a href="http://uju.dothome.co.kr/green_house/index.html" target="_blank">자세히보기</a></div>
        
            </div>
          </div>
         </div>
       </div>
       <div class="cloning_cont_richmond"  data-aos="fade-up"  data-aos-duration="1200">
         <div class="cloning_cont_img">
          <img src="../assets/cloning/richmond.png" alt="therichmond">
             <div class="pjt_cont_txt">
            <div class="pjt_txt_left">
              <h4>더 리치먼드 평창 웹크로닝</h4>
              <p>멋지다 연진아 브라보 멋지다 연진아 브라보 멋지다 연진아 브라보 </p>
              <span class="pjt_txt_info">제작기간 : 2022.12.02 ~ 2022.12.24</span>
              <span>제작프로그램 : HTML, CSS, JS 등</span>
            </div>
            <div class="pjt_txt_right">
              <div class="pjt_btn_page pjt_btn btn_arrow">
                <a href="http://uju.dothome.co.kr/therichmond/index.html" target="_blank">자세히보기</a></div>
        
            </div>
          </div>
         </div>
       </div>
     
    </div>
  </div>
   </div>
</section>

</template>
<style scoped>
#cloning{
  width: 100%;
  height: auto;
  min-height: 100vh;
}
#cloning.active{
  background-color: #f6f6f6;
  color: #0c0c0c;
}
#cloning .darkmode{
  background-color: #f6f6f6;
  color: #0c0c0c;
}
#cloning .cloning_cont_img{
   width: 100%;
  height: auto;
  border: 1px solid #f6f6f6;
  margin-bottom: 15%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
   padding: 20px;
  box-sizing: border-box;
}
#cloning.darkmode .cloning_cont_img{
  border: 1px solid #0c0c0c;
}
#cloning .cloning_cont_img img{
    display: block;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
}
#cloning .pjt_cont_wrap .pjt_cont_txt{
  border: none;
  padding-top: 0;
}
#cloning.darkmode  .pjt_cont_txt .pjt_txt_right .pjt_btn{
  border: 1px solid #0c0c0c;
}
#cloning.darkmode .btn_arrow{
background-image: url(../assets/common/resumeBk.png);

}
@media (max-width : 1400px){

#cloning .pjt_cont_txt .pjt_txt_left {
  padding-left: 0;
}
#cloning .pjt_cont_txt .pjt_txt_right{
  padding-right: 0;
}
  #cloning .cloning_cont_img{
      margin-bottom: 10%;
  }
}
@media (max-width : 1000px){
#cloning .pjt_cont_wrap .pjt_cont_txt{
  padding: 10px;
}
}

</style>