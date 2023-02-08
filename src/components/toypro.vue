<template>
<section id="toyproject" class="fixH">
    <div class="project_wrap sectionP">
    <div class="pjt_left">
      <h1>[ TOY PROJECT ]</h1>
    </div>
    <div class="pjt_right">

      <div class="pjt_cont_wrap toy_wrap">
       <div class="toy_cont">
        <div class="toy_cont_wrap">
        <toy1 v-if="toyContent == 'a'" />
        <toy2 v-else-if="toyContent =='b'" />
        <toy3 v-else-if="toyContent == 'c'" />
        <toy4 v-else-if="toyContent == 'd'" />
        </div>
       
       </div>
       <div class="toy_box">  
        <ul>
        <li @click="openA">투두리스트</li>
        <li @click="openB">슈팅게임</li>
        <li @click="openC">끝-말잇기</li>
        <li @click="openD">랜덤뽑기</li>
       </ul></div>
     
      </div>
    </div>
  </div>
</section>

</template>

<script>
import toy1 from './toy1.vue'
import toy2 from './toy2.vue'
import toy3 from './toy3.vue'
import toy4 from './toy4.vue'
export default {

data(){
  return{
    toyContent : 'a',
  }
},
components: {
    	toy1,
      toy2,
      toy3,
      toy4,
},
methods : {
  openA(){
    this.toyContent = 'a'
  },
  openB(){
    this.toyContent ='b'
  },
  openC(){
    this.toyContent = 'c'
  },
  openD(){
    this.toyContent = 'd'
  }
}

}
</script>

<style scoped>

#toyproject{
  width: 100%;
  height: auto;
  min-height: 100vh;
  padding-bottom: 15%;
}

#toyproject .pjt_right .toy_wrap{
  width: 100%;

} 

#toyproject .toy_cont {
  width: 100%;
  height: 100%;
  border: 1px solid #F6F6F6;
  padding: 20px;
  overflow: auto;
    box-sizing: border-box;
  /* background-color: #2925ffd2; */
}
#toyproject.darkmode .toy_cont{
    border: 1px solid #0c0c0c;
}
#toyproject .toy_cont_wrap{
    
}
#toyproject .toy_box{
  width: 20%;
  height: 5%;
  /* padding-top: 20px; */
}
#toyproject .toy_box ul {
 /* width: 100%;  */
 height: 100%;
  /* display: flex; */
  justify-content: space-between;
}
#toyproject .toy_wrap .toy_box ul li{
  /* width: calc((100% - 70px)/4); */
  height: auto;
  border: 1px solid #F6F6F6;
   display: flex;
    justify-content: center;
    padding: 20px;
    margin-right: 30px;
    margin-bottom: 30px;
    align-items:center;
}
#toyproject.darkmode .toy_wrap .toy_box ul li{
    border: 1px solid #0c0c0c;
}
#toyproject .pjt_right .toy_wrap{
  display: flex;
  flex-direction: row-reverse;
}
</style>