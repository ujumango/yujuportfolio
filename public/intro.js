

//타이핑 효과
const target = document.querySelector('.text');


const string = "THIS IS YUJU." //원하는 텍스트
const split = string.split(""); //string의 텍스트를 여러개의 문자열로 나눠줌
console.log(target)
//문자열을 한개씩 나타내주는 함수 만들기
function dynamic(arr){
    if(arr.length > 0){
        target.textContent += arr.shift();
        setTimeout(function(){
            dynamic(arr)}, 200) //0.08초 후에 dynamic 함수를 실행
        
    }
}
// dynamic(split); //dynamic 함수에 split 인자 넣어서 실행

function reset(){
    target.textContent = ""; //textContent의 내용 없애주기
    const resplit = string.split("");
    //string의 텍스트를 여러개의 문자열로 나눠주고 resplit 변수에 할당
    dynamic(resplit);
    
    //dynamic 함수에 resplit인자를 넣어서 실행
}

function dynamic(split){
    if(split.length > 0){
        target.textContent += split.shift();
        setTimeout(function(){
            dynamic(split)}, 100)
    }else{
        setTimeout(reset, 3000); 
        //3초 후에 reset 함수 실행
    }
}
dynamic(split);

function blink(){
    target.classList.toggle('active');
}
setInterval(blink, 500) //blink 함수를 0.5초마다 실행

