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
      //  console.log(scrollY)
      //  console.log('1번' + contactTop)

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
      padding-top: 3%;
      padding-bottom: 5%;
      transform: translateY(-20px);
}
#contact.active{
    background-color: #F6F6F6;
    transition: all 0.5s;
    color: #0C0C0C;
}
.contact_title{
  width: 60%;
  box-sizing: border-box;
}
.contact_title h1{
  text-align: left;
  padding-left: 16%;
}
.contact_wrap{
  width: 95%;
  display: flex;
  height: auto;
  padding-top: 2%;
  padding-bottom: 1%;
  padding-right: 5%;
  padding-left: 12%;
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
#contact.darkmode .contact_left h3.phone::after{
   background-color: #1740d1;
}
.contact_left h3.email::after{
  display: block;
  content: '';
   height: 13px;
  background-color: #8FE948;
  animation: underbar 2s ease-in-out;
}
#contact.darkmode .contact_left h3.email::after{
  background-color: #8dde4e;
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
  background-size: cover;
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

  @media (max-width : 1400px){
  .contact_wrap{
  width: 100%;
  padding-left: 12%;
   } 
  
  #cloning .cloning_cont_img{
    padding: 10px;
  }
  #contact .contact_prof_img{
  width: 400px; height: 400px;
  } 
  }
  @media (max-width : 1200px){
    
  #contact .contact_prof_img{
  width: 350px; height: 350px;
  }
 .contact_right{
  justify-content: unset;
 }
  }

  
  @media (max-width : 1200px){
    #contact{
      padding-top: 10%;
      padding-bottom: 5%;
    }
  }

  @media  (max-width : 1200px){
 .contact_wrap {
    padding-top: 5%;
    padding-bottom: 5%;
  }
  .contact_bottom{
    padding-top: 5%;
  }
  }

    @media  (max-width : 900px){
 .contact_wrap {
    padding-top:10%;
    padding-left: 9%;
  }
  .contact_left{
     padding-top: 5%;
  }
  .contact_title h1{
    padding-left: 10%;
  }
  .contact_bottom{
    padding-top: 5%;
  }
  #contact .contact_prof_img{
    width:300px;
    height:300px;
  }
  }
 @media (max-width : 700px) {
  #contact{
    padding-top: 20%;
    padding-bottom: 17%;
  }
  #contact .contact_prof_img{
    width: 270px;
    height: 270px;
  }

 }

 @media (max-width : 600px){}


</style>