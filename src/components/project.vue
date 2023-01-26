<template>
<section id="project" class="fixH">
  <div class="project_wrap sectionP">
    <div class="pjt_left">
      <h1>[ Project ]</h1>
    </div>
    <div class="pjt_right">
      <div class="pjt_cont_wrap">
        <div class="pjt_cont_re">

        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</section>
 
</template>

<script>
export default {
  
}
</script>

<style scoped>
#project{
  width: 100%;
  height: auto;
  min-height: 100vh;
}
#project .project_wrap{
  display: flex;
}
#project .project_wrap .pjt_left{
  width: 25%;
  height: 100vh;
  top: 5%;
  position: sticky;
  transform: scale(-1);
   writing-mode:vertical-rl;
   text-align: end;
}
#project .project_wrap .pjt_right{
  width: 70%;
  height: auto;
}
#project .pjt_cont_wrap div{
  width: 100%;
  height: 800px;
  margin-bottom: 10%;
  border: 1px solid #fff;
}
</style>