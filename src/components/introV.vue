<template>
  <h1 id="intro">intro page</h1>
  <button @click="acco = !acco">click</button>
  <!-- true일때 클릭하면 false(반대)가 되고 false를 누르면 true가 된다 -->
 
  <div> <transition name="fade">
    <h2 v-if="acco">show contents</h2>
    <!-- if에 acco를 쓰면 acco가 참일때~(acco == true인데 뒤에 생략) 라는 뜻 -->
  </transition></div>
</template>
<script>
export default {
  data(){
    return {
      acco : false,
    }
  }
}
</script>
<style scoped>
div{
  widows: 100%;
  height: 800px;
  background-color: rgb(216, 85, 76);
}
h2{
  font-size: 3rem;
}
.fade-enter-from{
  /* 처음에 어떻게 될건지 */
  opacity: 0;
}
.fade-enter-active{
  /* from->to로 넘어갈 때 어떤 액션을 쓸건지 */
  transition: opacity 1s ease-in-out;
  }
.fade-enter-to{
  opacity: 1;
}

.fade-leave-active{
  transition: opacity 1s ease-in-out;
  }
.fade-leave-to{
/* 어디까지 변형되고 싶은지 */
opacity: 0;
}
</style>
