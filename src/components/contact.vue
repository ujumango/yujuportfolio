<template>
<section id="contact">
    <div class="contact_title sectionP">
  <h1>[ CONTACT ]</h1>
  </div>
  <div class="contact_wrap sectionP">

    <div class="contact_left">
        <div class="contact_info">
          <h3>이유주 LEE YUJU</h3>

          <p>전화번호</p>
          <h3 class="phone">010-4942-1981</h3>
        

          <p>이메일</p>
          <h3 class="email">ujusunrise@gmail.com</h3>
          
        </div>

    </div>
    <div class="contact_right">
      <div class="contact_prof_img"></div>
    </div>
  </div>
  <div class="contact_bottom">
    <div class="flow_text">
          <div class="flow_wrap">THANK YOU THANK YOU THANK YOU THANK YOU </div>
          <div class="flow_wrap">THANK YOU THANK YOU THANK YOU THANK YOU </div>
          <div class="flow_wrap">THANK YOU THANK YOU THANK YOU THANK YOU </div>
          <div class="flow_wrap">THANK YOU THANK YOU THANK YOU THANK YOU </div>

      </div>
  </div>

  <div></div>
</section>
 
</template>
<script>
import {onMounted} from 'vue'
export default {
  mounted() {
     window.addEventListener('scroll',this.scrllContact)
  },
  methods  : {
    scrllContact(){
      const contact = document.querySelector('#contact');
       const scrollY = window.scrollY;
       const contactTop = contact.offsetTop;
       const hambergers = document.querySelector('.hambergers');
       const hamberger = document.querySelectorAll('.hambergers>.hamberger');
       const gnbSide = document.querySelector('.gnbSide');
       const gnbSideul = document.querySelector('.gnbSide>ul');
       const cloning = document.querySelector('#cloning')
       console.log(scrollY)
       console.log('1번' + contactTop)

      if(scrollY >contactTop - 150){
        contact.classList.add('active');
        gnbSide.classList.add('contDark')
        cloning.classList.add('active');
        for(let i=0; i<hamberger.length; i++){
          hamberger[i].classList.add('contDark');
        }
        
   
      }else{
        contact.classList.remove('active');
        gnbSide.classList.remove('contDark')
        cloning.classList.remove('active');
       for(let i=0; i<hamberger.length; i++){
          hamberger[i].classList.remove('contDark');
        }

       
      }
    }
  }
}
</script>
<style scoped>
#contact{
  width: 100%;
  height: auto;
  /* background-color: #F6F6F6; */
  transition: all 0.5s;
      padding-top: 5%;
      transform: translateY(-20px);
}
#contact.active{
    background-color: #F6F6F6;
    transition: all 0.5s;
    color: #0C0C0C;
}
.contact_title{
  width: 60%;
  padding-top: 2%;
  box-sizing: border-box;
}
.contact_wrap{
  width: 90%;
  display: flex;
  height: auto;
  padding-top: 3%;
  padding-bottom: 5%;
  padding-right: 5%;
  padding-left: 16%;
  justify-content: space-between;
}

.contact_left{
  width: 48%;
  /* height: 800px; */
  text-align: left;
  padding-top: 2%;
}
.contact_left h3{
display: inline-block;
}

.contact_left h3.phone::after{
  display: block;
  content: '';
   height: 13px;
  background-color: #2152FF;
  animation: underbar 2s ease-in-out;
}
.contact_left h3.email::after{
  display: block;
  content: '';
   height: 13px;
  background-color: #8FE948;
  animation: underbar 2s ease-in-out;
}
@keyframes underbar{
    0% {width:0%;}
    100% {width: 100%;}
}

.contact_left .contact_info p{
  padding-top: 5%;
}




.contact_right{
  width: 48%;
  display: flex;
  justify-content: flex-end;

}

#contact .contact_prof_img{
  width: 450px; height: 450px;
  border-radius: 50%;
  background-color: #D2D2D2;
  background-image: url(../assets/about/profile-2.png);
}
#contact .flow_text{
  display: flex;
  flex: 0 0 auto;
  white-space: nowrap;
  transition: 0.3s;
  font-size: 90px;
  font-weight: bold;
  color: #D2D2D2;
   overflow: hidden;
}
#contact .flow_text:hover{
  color:#0C0C0C;
}
#contact .flow_text:hover .flow_wrap {
  animation-play-state: paused;
  cursor: pointer;
}
#contact .flow_wrap{
  animation: textFlow 18s linear infinite;
  padding-right: 1.5%;

}
  @keyframes textFlow {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }
</style>