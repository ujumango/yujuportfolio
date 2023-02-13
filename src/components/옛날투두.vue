<template>
<div id="toy1">
   <div class="input">
    <input type="date" v-model="todoDate" class="inputs" />
    <input type="text" v-model="todoItem" class="inputs" />
    <button @click="addTodo" class="btn">추가</button>
  </div>
  <ul class="todoul">
    <li
     v-for="(todo, index) in todolist"
      :key="todo"
       @click="complete(todo, index)"
       v-bind:class="{ completed : todo.complete }">
         <!-- {{index +1}}. -->
      <span>{{todo.dates}}</span>
       <p class="content">{{todo.item}}</p>
      <span @click="removeTodo(todo, index)" class="remove">삭제</span>
    
    </li>
  </ul>
  <div></div>

</div>
 

</template>

<script>
export default {
  data:function(){
    return {
      todoDate : "",
      todoItem : "",
      todolist : [],
    };
  },
  methods: {
    addTodo : function(){
      console.log(this.todoItem)
      if(this.todoItem != ""){
        //todoitem이 빈값이 아닐 때 배열에 추가해줘야 함!
        var obj = {
          dates : this.todoDate, 
          item : this.todoItem, 
          complete : false,
          };
        localStorage.setItem(this.todoItem, JSON.stringify(obj))
        console.log(obj);
        this.todolist.push(obj);
        this.todoDate = "";
      }
    },
    removeTodo : function(todo, index){
      localStorage.removeItem(todo.item);
      this.todolist.splice(index, 1)
    },
       complete : function(todo, index){
      todo.complete = !todo.complete;
      localStorage.removeItem(todo.item);
      localStorage.setItem(todo.complete, JSON.stringify(todo));
      console.log(todo);
    }
  },
    //created : 바로 바뀌게 만들어줌
  created : function(){
    if(localStorage.length>0){
      for(var i=3; i<localStorage.length; i++){
        if(localStorage.key(i) !=="loglevel:webpack-dev-server")
        //localstorage는 우리가 db가 없으니까 로칼에 일단 저장하겠다!라고 하느라 지금 쓰고 있는 것임. 이거 관련된 애들 다!
        this.todolist.push(
          JSON.parse(localStorage.getItem(localStorage.key(i)))
        );
      }
    }
  }
};
</script>
<style scoped>
 #toy1{
  /* background-color: #f6f6f6; */
  width: 100%;
  height: 100%;
  min-height: 700px;
  padding: 10px 0;
  background-color: #f6f6f6;
 
 }
 #toy1 .input{
  padding-top: 20px;
 }
  ul,li{
   list-style: none;
  }
  .completed {
    background-color: #2152FF;
    color: #fff;
    /* text-decoration: line-through; */
  }
  .btn{
    padding: 8px 10px;
    background-color: #2152FF;
    border-radius: 12%;
    color: #fff;
    outline: none;
    border: none;

  }
  .inputs{
    border: 1px solid #2152FF;
    color: #2152FF;
    padding: 5px;
    box-sizing: border-box;
    outline: none;
    margin-right:10px;
  }
  .todoul{
    display: flex;
    width: 100%;
    margin: 0 auto;
    max-width: 1000px;
    padding: 42px  20px;
    box-sizing: border-box;
    justify-content: center;
    flex-wrap: wrap;
    /* gap: 36px; */
  }
  .todoul>li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:90%; min-height: 50px;
    border: 1px solid #2152FF;
    color: #2152FF;
    /* background-color: #f6f6f6; */
    padding: 5px 20px;
    margin: 10px;
    border-radius: 30px;
    box-sizing: border-box;
  }
    .todoul>li>p{
      font-size: 18px;
      color: #2152FF;
    }
    .todoul .content{
      width: 100%;
      padding: 10px 0 20px 0;
    }

  .todoul h4{
    font-weight: 500;
    padding-bottom: 10px;
  }
    /* .todoul p{
      font-size: 24px;
    } */
  .todoul>li>span{
    display: block;
    width: 15%;
    padding: 5px 5px 6px 5px;
    font-size: 13px;
     color: #2152FF;
  }
  .todoul .remove{
    width: 10%; 
    height: fit-content;
    /* margin: 10px auto; */
    color: #2152FF;
    border: 1px solid #2152FF;
     border-radius: 15px;
    
  }
.todoul>li.completed {
   color: #fff;
  }
.todoul>li.completed p{
   color: #fff;
  }
.todoul>li.completed span{
   color: #fff;
  }

 .todoul .completed .remove{
    width: 10%;
    /* margin: 10px auto; */
    color: #fff;
    border: 1px solid #fff;
     border-radius: 15px;
  }
</style>