<template>
<div class="modeBtn" @change="lightM()" :class="{ active : subMenu }" >
<input type="checkbox" id="modeL">
<label for="modeL" class="modeLight">
<span class="modeHandle"></span>
  </label>
  </div>

  <headerV  />
  <intro id="intro" />
  <about id="about" :value="lightMode" />
  <project id="project"  />
  <toyproject id="toyproject"  />
  <cloning id="cloning"  />
  <contact id="contact"  />
</template>

<script>
import headerV from './components/headerV.vue'
import intro from './components/intro.vue'
import about from './components/about.vue'
import project from './components/project.vue'
import toyproject from './components/toypro.vue'
import cloning from './components/cloning.vue'
import contact from './components/contact.vue'


//AOS
import AOS from 'aos'
import 'aos/dist/aos.css'
import {onMounted} from 'vue'
import {ref} from 'vue'

export default {
  name: 'App',
  components: {
    headerV,
    intro,
    about,
    project,
    toyproject,
    cloning,
    contact,
    AOS,
  },
  created() {
        AOS.init();
    },
  mounted(){
    window.addEventListener('scroll',this.onScroll)
  },
    data(){
    return{
      lightMode : null
     
    }
  },
  
    
    
  methods: {
    // lightMod(){
    //      const about = document.querySelector('#about');
    //      if(about.classList.contains('darkmode')){
    //        this.lightMode = true
    //        }else{
    //         this.lightMode = false
    //         }
    // },
    onScroll(){
      const sections = document.querySelectorAll('section[id]');
      const scrollYs = window.pageYOffset;

      for(var i=0; i<sections.length; i++){
        const sectionHeights = sections[i].offsetHeight;
        const sectionTops = sections[i].offsetTop - 40;
        let navName = document.querySelectorAll('.gotosec');

        if(scrollYs > sectionTops && scrollYs <= sectionTops + sectionHeights){
          for(let i=0; i<navName.length; i++){
            navName[i].classList.remove('active');
          }
          navName[i].classList.add('active');
        }
      }
    },
    lightM(){
     const modeL = document.querySelector('#modeL');
     const sections = document.querySelectorAll('section[id]');
     const navD = document.querySelector('nav');

        if(!modeL) {return !1}

    //  modeL.addEventListener('change', ()=> {
      const about = ref("about")
         for(let i=0; i<sections.length; i++){
           if(!sections[i].classList.contains('darkmode')){
            sections[i].classList.add('darkmode')
            navD.classList.add('darkmode'); 
            this.lightMode = true
          
           }else{
             sections[i].classList.remove('darkmode');
             navD.classList.remove('darkmode');
             this.lightMode = false
        
           }
          
         }
   
    },
 
    }
   
    
  }


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #F6F6F6;

}
#app.active {
    color: #0C0C0C;
   background-color: #F6F6F6;
}
html::-webkit-scrollbar {
  border: 1px solid #F6F6F6;
}
html::-webkit-scrollbar-thumb {
  /* background-color: #0c0c0c; */
  background-color: #8FE948;
}

html::-webkit-scrollbar-track {
  background-color: #1b1b1b;
  /* border-left: 1px solid #F6F6F650; */
}
html::-webkit-scrollbar-thumb:window-inactive {
    background: #2152FF; 
}
section{
  color: #F6F6F6;
   background-color: #0C0C0C;
     transition: all 0.3s;
}
section.darkmode{
  background-color: #f6f6f6;
  color: #0C0C0C;
  transition: all 0.3s;
}
.blankBox{
  padding: 30px 0;
}
#modeL{
  display:none
}
.modeLight{
  cursor: pointer;
  display: inline-block;
  position: relative;
  margin-left: 75px;
  width: 55px;
  height: 32px;
  background-color: rgb(124, 124, 124);
  /* border: 1px solid #0c0c0c50; */
  border-radius: 80px;
  transition: background 200ms cubic-bezier(.445,.05,.55,.95);
}
.modeBtn{
  position: fixed;
  right: 3.3%;
  top:12%;
  z-index:1;
}
.modeLight:before, .modeLight:after{
  margin-top: 5px;
}
.modeLight::before{
  display: block;
  /* content:'DARK'; */
  position: absolute;
  left: -95px;
  color: #8FE948;
}
.modeLight::after{
  display: none;
  /* content: 'LIGHT'; */
  position: absolute;
  left: -90px;
}
.modeHandle{
  width: 28px;
  height: 28px;
  position: absolute;
  top:2px; left: 1px;
  border-radius: 50%;
  display: inline-block;
  z-index: 3;
  background-color: #8FE948;
  background-image: url(assets/dark3.png);
  background-size: 20px auto;
  background-repeat: no-repeat;
  background-position: center center;
  box-shadow: none;
  /* background-size: 0; */
  transition: transform .5s;
  }
  #modeL:checked+.modeLight{
    background-color: #e6e6e6;
  }
  #modeL:checked+.modeLight::before{
    display: none;
    color:var(--check-color)
  }
  #modeL:checked+.modeLight::after{
    display: block;
    color:#2152FF;

  }
  #modeL:checked+.modeLight .modeHandle{
    width: 28px;
  height: 28px;
    border-radius: 50%;
    display: inline-block;
    transform:translate3d(25px, 0, 0) rotate(0);
    background:#2152FF;
    color: #2152FF;
    background-image: url(assets/light.png);
    background-size: 20px auto;
    background-repeat: no-repeat;
    background-position: center center;
  }
  @media (max-width : 1300px){
    .modeBtn{
      right: 2%;
    }
  }


  @media (max-width : 900px){
  .modeBtn{
    right: 110px;
    top: 3%;
  }
  }
</style>
