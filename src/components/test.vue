  <div class="intro_wrap">
      <h1>HELLO,</h1>
      <h1>WORLD</h1>
      <div class="underbar_box"> 
        <span :style="{paddingRight:'15px'}">[</span>
      <span>
        <h1 class="text"></h1>
      <div class="underbar"></div>
      </span>
      <span :style="{paddingLeft:'15px'}">]</span>
      
      </div>
    </div>


      onMounted(() => {
    const target = document.querySelector('.text');
    const string = "HELLO WORLD!" 
    const split = string.split(""); 
          console.log(target)
          console.log(split)

    const dynamic = function(){

         if(split.length > 0){
        target.textContent += split.shift();
              console.log(split)
        setTimeout(function(){
            dynamic(split)}, 100) 
             
 
    }}
  })