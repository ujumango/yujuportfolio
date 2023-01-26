<template>
<section id="project" class="fixH">
  <div class="project_wrap sectionP">
    <div class="pjt_left">
      <h1>[ Project ]</h1>
    </div>
    <div class="pjt_right">
      내용
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
  height: 100vh;
}
#project .project_wrap{
  display: flex;
}
#project .project_wrap .pjt_left{
  width: 30%;
  transform: scale(-1);
   writing-mode:vertical-rl;
}

</style>