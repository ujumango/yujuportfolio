<template>
<div id="toy1">
     <div class="todo-wrap">
    <div class="todo-title">TODOLIST</div>
    <div class="todo-box">
      <div class="todo-input-wrap">
        <button class="add-list">✔</button>
        <input type="text" class="todo-input" placeholder="할 일을 입력해주세요!">
      </div>
      <ul class="todo-list">
 
      </ul> 
      <div class="todo-bottom">
        <div class="left-items">3 items left</div>
        <div class="button-box">
          <button class="show-all-btn selected" data-type="all">All</button>
          <button class="show-active-btn" data-type="active">Active</button>
          <button class="show-completed-btn" data-type="completed">Completed</button>
        </div>
        <button class="clear-completed-btn">Clear Completed</button>
      </div>
    </div>
    <p class="info">더블클릭 시 수정 가능!</p>
  </div>

</div>
 

</template>

<script>
import {onMounted} from 'vue';
export default {
  setup() {
    onMounted(() => {
      
const todoInputCont = document.querySelector ('.todo-input');
const todoListCont = document.querySelector('.todo-list');
const completeAllBtnCont = document.querySelector('.add-list');

const showAllBtnCont = document.querySelector('.show-all-btn'); //All 버튼
const showActiveCont = document.querySelector('.show-active-btn'); //active 버튼
const showCompletedBtnCont = document.querySelector('.show-completed-btn') //completed 버튼
const clearCompletedBtnCont = document.querySelector('.clear-completed-btn'); //completed Clear 버튼



//남은 할 일 개수 표시하기

const leftItemsCont = document.querySelector('.left-items');

//현재 완료되지 않은 할 일 리스트를 반환한다.

const getActiveTodolist = () => {
  return todolist.filter(todo => todo.isCompleted === false);
}

const setLeftItems = () => {
  const leftTodolist = getActiveTodolist()
  leftItemsCont.innerHTML = `${leftTodolist.length} items left`
}

let todolist = [];
let id = 0;


let currentShowType = 'all'; //all | active | complete
const setCurrentShowType = (newShowType) => currentShowType = newShowType

const onClickShowTodolistType = (e) => {
  const currentBtncont = e.target;
  const newShowType = currentBtncont.dataset.type;

  if( currentShowType === newShowType) return;

  const preBtnCont = document.querySelector(`.show-${currentShowType}-btn`);
  preBtnCont.classList.remove('selected');

  currentBtncont.classList.add('selected');
  setCurrentShowType(newShowType)

  paintTodolist();
}

//할일 추가하기
const setTodolist = (newTodolist) => {
  todolist = newTodolist
}

const getAllTodolist = () => {
  return todolist;
}

const getCompletedTodolist = () => {
  return todolist.filter(todo => todo.isCompleted === true);
}



let isAllCompleted = ''; //전체 todolist 체크 여부
const setIsAllCompleted = (bool) => { isAllCompleted = bool};



const completeAll = () => {
  completeAllBtnCont.classList.add('checked');
  const newTodolist = getAllTodolist().map(todo => ({...todo, isCompleted:true}))
  setTodolist(newTodolist)
}

const incompleteAll = () => {
  completeAllBtnCont.classList.remove('checked');
  const newTodolist = getAllTodolist().map(todo => ({...todo, isCompleted : false}));
  setTodolist(newTodolist)
}

// 전체 todolist의 isCompleted 여부를 체크하여 처리
const checkIsAllCompleted = () => {
  if(getAllTodolist().length === getCompletedTodolist().length){
    setIsAllCompleted(true);
    completeAllBtnCont.classList.add('checked');
  }else{
    setIsAllCompleted(false);
    completeAllBtnCont.classList.remove('checked');
  }

}


const onclickCompleteAll = () => {
  if(!getAllTodolist().length) return; //todolist 배열의 길이가 0이면 retrun;

  if(isAllCompleted) incompleteAll(); //isAllcompleted가 true이면 todolist를 전체 미완료 처리
  else completeAll(); //isAllcompleted가 false이면 todolist를 전체 완료 처리
  setIsAllCompleted(!isAllCompleted); //isAllCompleted 토글
  paintTodolist(); //새로운 todolist 렌더링
  setLeftItems();
}



const appendTodolist = (text) => {
  const newId = id++;
  const newTodolist = getAllTodolist().concat({id:newId, isCompleted: false, content: text})
  setTodolist(newTodolist)
  checkIsAllCompleted(); //전체 완료 처리 확인
  setLeftItems(); // 남은 할 일 개수 표시
  paintTodolist();
}

//지우기

const deleteTodo = (todoId) => {
  const newTodolist = getAllTodolist().filter(todo => todo.id !== todoId);
  setTodolist(newTodolist);
  setLeftItems(); //남은 할일 개수 표시
  paintTodolist();
}

//완료표시

const completeTodo = (todoId) => {
  const newTodolist = getAllTodolist().map(todo => todo.id === todoId ? {...todo, isCompleted: !todo.isCompleted} :todo)
    setTodolist(newTodolist);
    paintTodolist();
    setLeftItems(); //남은 할 일 개수 표시
    checkIsAllCompleted(); //전체 todolist의 완료 상태를 파악하여 전체 완료 처리 버튼 css 반영
  }


//더블클릭시 수정

const onDbclickTodo = (e, todoId) => {
  const todoCont = e.target;
  const inputText = e.target.innerText;
  const todoItemCont = todoCont.parentNode;
  const inputCont = document.createElement('input');
  inputCont.value = inputText;
  inputCont.classList.add('edit-input');

  inputCont.addEventListener('keypress', (e) =>{
    if(e.key === 'Enter') {
      updateTodo(e.target.value, todoId); //todo 수정
      document.body.removeEventListener('click', onClickBody);
    } //이벤트 리스너 제거
  })



  // todoitemCont 요소를 제외한 영역을 클릭 시, 수정모드 종료
  const onClickBody = (e) => {
    if(e.target !== inputCont){
      todoItemCont.removeChild(inputCont);
      document.body.removeEventListener('click', onClickBody);
    }
  }
  todoItemCont.appendChild(inputCont); //todoitemcont요소에 자식요소로 inputCont 요소 추가

  //body에 클릭에 대한 이벤트 리스너 등록
  document.body.addEventListener('click', onClickBody)
} 

//수정
const updateTodo = (text, todoId) =>{
  const currentTodolist = getAllTodolist();
  const newTodolist = currentTodolist.map(todo => todo.id === todoId ? ({...todo, content : text}):todo);
  setTodolist(newTodolist);
  paintTodolist();
}


 
//완료표시 제거

const clearCompletedTodolist = () => {
  const newTodolist = getActiveTodolist()
  setTodolist(newTodolist);
  paintTodolist();
}

//html에 그려주기
const paintTodolist = () => {
  todoListCont.innerHTML = ''; //todolistCont 요소 안의 HTMl을 초기화
  // const allTodolist = getAllTodolist(); //todolist 배열 가져오기
  switch (currentShowType) {
    case 'all' :
      const allTodolist = getAllTodolist();
      allTodolist.forEach(todo => { paintTodo(todo);});
      break;

    case 'active' :
      const activeTodolist = getActiveTodolist();
      activeTodolist.forEach(todo => { paintTodo(todo);})
      break;
    case 'completed' :
      const completedTodolist = getCompletedTodolist();
      completedTodolist.forEach(todo => { paintTodo(todo);});
      break;
    default :
    break;
  }
}


  const paintTodo = (todo) => {
    const todoItemCont = document.createElement('li');
    todoItemCont.classList.add('todo-item');
    todoItemCont.setAttribute('data-id', todo.id );
    
 //2-2. 할일 완료 처리 
    const checkboxCont = document.createElement('div');
    checkboxCont.classList.add('check-box');
    checkboxCont.addEventListener('click', ()=> completeTodo(todo.id));
    //'click'이벤트 발생 시, 완료 처리

   //3-1. 더블클릭 시 수정
    //onDbclickTodo() 함수는 두 개의 파라미터를 입력받음. 첫번째 파라미터는 event 객체, 두번째 파라미터는 할 일의 id. 
    const todoCont = document.createElement('div');
    todoCont.classList.add('todo');
    todoCont.addEventListener('dblclick', (event) => onDbclickTodo(event, todo.id)) 
    //더블 클릭에 대한 이벤트
    todoCont.innerText = todo.content;



    const delBtnCont = document.createElement('button');
    delBtnCont.classList.add('delBtn');
    delBtnCont.addEventListener('click', ()=> 
      
      deleteTodo(todo.id))
      // 'click' 이벤트 발생 시, 해당 할 일 삭제
    delBtnCont.innerHTML = 'x';

    if(todo.isCompleted) {
      todoItemCont.classList.add('checked');
      checkboxCont.innerHTML = '✔';
    }

    todoItemCont.appendChild(checkboxCont);
    todoItemCont.appendChild(todoCont);
    todoItemCont.appendChild(delBtnCont);

    todoListCont.appendChild(todoItemCont);
  }





const init = () => {
   todoInputCont.addEventListener ('keypress', (e)=>{
    if(e.key === 'Enter') {
      appendTodolist(e.target.value); todoInputCont.value = '';
    }
   })
   //todolist 전체 완료 처리-버튼 선언
   completeAllBtnCont.addEventListener('click', onclickCompleteAll);
   //전체 완료 처리 버튼에 클릭 이벤트 리스너담기


   showAllBtnCont.addEventListener('click', onClickShowTodolistType);
   showActiveCont.addEventListener('click', onClickShowTodolistType);
   showCompletedBtnCont.addEventListener('click', onClickShowTodolistType);
   clearCompletedBtnCont.addEventListener('click', clearCompletedTodolist);

  //  checkAllBtnCont.addEventListener('click', onclickCheckAll);



   setLeftItems(); //남은 할일 개수 표시
}

init();


    

     })   }
  }


</script>
<style scoped>
 #toy1{
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

.todo-wrap {
  justify-content: center;
  margin-top: 36px;
  min-width: 600px;
}

.todo-title {
  padding: 50px;
  text-align: center;
  font-size: 36px;
  color: #2152FF;
  font-weight: bold;
}

.todo-box {
  border: 1px solid #2152FF;
  background-color: #fff;
}
.todo-input-wrap {
  display: flex;
  flex-wrap: nowrap;
  height: 45px;
  justify-content: flex-start;
}
button {
  border: 0;
  background-color: transparent;
}
.add-list {
  color: gray;
  min-width: none;
  min-height: none;
  width: 18px;
  height: 18px;
  margin: 10px 10px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 18px;
}
.add-list.checked {
  color : 8FE948;
}
.todo-input {
  width: 80%;
  text-align: center;
  border: 0;
  outline: none;
  font-size: 18px;
}
 .todo-item{
  position: relative;
  display: flex;
  height: 45px;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
}
.todo-item:hover .delBtn {
  opacity: 1;
}
.check-box {
  min-width: none;
  min-height: none;
  height: 18px;
  width: 18px;
  border-radius: 50px;
  margin: 10px 10px;
  border: 1px solid lightgray;
  cursor: pointer;
  text-align: center;
}
.todo-item.checked .check-box{
  border : 2px solid darkgray;
  color: 8FE948;
  line-height: 18px;
}
.todo {
  font-size: 18px;
  padding: 5px 15px;
  width: 80%;

}

.todo-item.checked .todo {
  font-style: italic;
  text-decoration: line-through;
  color: lightgray;
}
.delBtn { 
  opacity: 1;
  width: 36px;
  height: 36px;
  font-size: 18px;
  font-weight: lighter;
  cursor: pointer;
}
.todo-bottom {
  height: 55px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
}
.button-box {
  flex-direction: row;
  flex-wrap: nowrap;
}
.button-box button {
  border: 1px solid #eee;
  padding: 7px 7px;
  margin : 0 10px;
  border-radius: 8px;
  cursor: pointer;
}
.button-box button.selected {
  border: 2px solid #2152FF;
}

.clear-completed-btn:hover {
  font-style: italic;
  text-decoration: underline;
  cursor: pointer;
}

.edit-input {
  position: absolute;
  left: 60px; top: 0;
  width: 90%;
  height: 45px;
  box-sizing: border-box;
  font-size: 18px;
  margin: 0;
  outline: 1px solid #696969;
  color: rgb(49, 49, 49);
  border: 0;
}

p.info {
  margin-top: 18px;
  text-align: center;
  color: #ccc;
}


</style>