<template>
<div id="toy3">

<div class="wordgame">
  <div class="word-title">
    <h1>끝말잇기</h1>
  </div>
<div class="word-cont">
 <div class="word-box">
  <p>제시어</p>
   <div>{{ letter1 }}</div>
 </div>
 <div class="word-letter">
  <div class="word-letter-words"> {{ letter2 }}</div>
 
  <input type="text" class="word-input" v-model="letter2" placeholder="답을 작성해주세요">
  <button @click="letter" class="word-btn">입력</button>
 </div>
 <div class="word-result">
  <div>{{ result }}</div>
 </div>
</div>

</div>

</div>
</template>

<script>
export default {
data(){
  return{
    letter1 : '오렌지',
    letter2 : '',
    result : '',
  }
},
methods : {
  letter () {
    if(this.letter1[this.letter1.length - 1] == this.letter2[0]){
      this.result = '정답입니다!'
      this.letter1 = this.letter2
    }else {
      return this.result = '땡! 다시 도전해주세요!'
    }
  }
}
}
</script>

<style scoped>
 #toy3{
  width: 100%;
  height: 100%;
  min-height: 700px;
  padding: 10px 0;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  color: #0c0c0c;
  background-color: #f6f6f6;
 }
 .wordgame{
  padding-top: 50px;
 }
.word-title>h1{
  font-size: 36px;
  padding: 50px;
  color: #2152FF;
}
.word-box{
  width: 300px;
  font-size: 36px;
  padding: 20px;
  font-weight: bold;
  box-sizing: border-box;
  border-radius: 20px;
  border: 2px solid #2152FF;
}
.word-letter{
  width: 100%;
  font-size: 36px;
  padding-top: 40px;
}
.word-input{
  width: 200px;
  margin-right: 20px;
  /* padding: 20px; */
 height: 30px;
 outline: none;
}

.word-btn{
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #0c0c0c;
  border-radius: 10px;
}
</style>