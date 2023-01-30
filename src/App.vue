<template>
  <headerV  />
  <intro id="intro"  />
  <about id="about"  />
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
  methods: {
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
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #F6F6F6;
   background-color: #0C0C0C;
 

  /* margin-top: 60px; */
  /* cursor: url(./assets/cursor.png),auto; */
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
</style>
