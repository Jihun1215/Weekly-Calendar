const toDoForm = document.querySelector('.todoForm');
const toDoInput = document.querySelector('#todoInput');
const toDoList = document.querySelector('.list-in');
const timeInput = document.getElementById('timeInput');

// 현실시간으로 타임인풋 저장
let timeSetH = now.getHours();
let timeSetM = now.getMinutes();
let timeSet = `${timeSetH}:${timeSetM}`

timeInput.value = timeSet

const TODOS_LS = 'toDos'; // 지역저장소에 저장될 value에 대응하는 key값을 설정 
let toDos = [

];

function saveToDos() {
    // "" JSON으로 문자형을 만든다 
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
}

// 현재시간 기준으로 24시간마다 로컬스토리지를 비운다
// 수정필요 이건 사용자를 배려한 코드가 아니다 
let removeToDos = function () {
    localStorage.removeItem(TODOS_LS);
}
setInterval(removeToDos, 86400000)

// 조건 매일 00 시가 되면 기존 로컬스테이지를 초기화하기
let 시 = now.getHours()
let 분 = now.getMinutes();
let 초 = now.getSeconds();
let 시간 = `${시}${분}${초}`;


function setToDos() {
    // if 날짜가 바뀌면 ? 
    // 아니면 특정시간이 지나면 함수 실행
    // 오늘표시가 사라진다면 
    if ('142030' == 시간) {
        reSet()
    }
}






// 조건 4개 하루에 투두는 5까지만 작성이 가능하다
// if(toDos.length < 4)
//  else if (toDos.length == 2)  
// 3개 만들면 문자로 4개 까지만 만들수 있다고 문자를 하야된다


function paintToDo(text, TimeInput) {
    // todoInput 값이 없을때 




    if (toDos.length < 4) {

        const bigDiv = document.createElement('div');
        bigDiv.classList.add('addtodo');
        const div1 = document.createElement('div');
        div1.classList.add('num_time');


        const h4 = document.createElement('h4');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const newId = toDos.length + 1;



        h4.innerText = `${newId}.`;
        span.innerText = text;
        p.innerText = TimeInput;
        // bigDiv.addEventListener("click", deleteToDo); // delBtn에 클릭이벤트에 deleteToDo함수 연결
        toDoList.appendChild(bigDiv);
        bigDiv.appendChild(div1)
        div1.appendChild(h4);
        div1.appendChild(p);
        bigDiv.appendChild(span);

        // 결국에는 찾았다 여기가 문제였다 이말이야!!!
        const toDoObj = {
            text,
            id: newId,
            time: TimeInput,
        };

        toDos.push(toDoObj); // toDos에 toDoList 삽입
        saveToDos(); // localStorage에 저장하는 함수
        // 이게 로컬스토리지에 저장되어있으니 리로딩하면 재반복한다

        $modalBg[0].style.display = "none";
        document.body.style.overflow = "unset";

        // 일정과 시간을 넣지 않을경우


    }
    else {
        console.log('4개이상이네')

    }

} //esle if 부분 input값이 2글자 이상이어만 작동




function handleSubmit(event) {
    event.preventDefault(); // 엔터를 눌러도 submit이 작동하지 않도록 기본 기능을 정지시킴

    const currentValue = toDoInput.value;
    const TimeInput = timeInput.value;
    paintToDo(currentValue, TimeInput);
    toDoInput.value = "";
    TimeInput.value = "";
}



function loadToDos() { // 지역저장소에 저장된 key값의 value를 불러오는 function 
    const loadedToDos = localStorage.getItem(TODOS_LS);
    console.log(loadToDos)
    // localStorage에 TODOS_Ls가 있는지 확인

    // 로컬스토리지에 값이 있을경우! 
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos); // loadedToDos를 json객체로 변경
        console.log(parsedToDos)
        parsedToDos.forEach(function (toDo) { // 객체 내용 한개씩 파라미터로 넣어서 함수 실행
            // 결국에는 찾았다 여기가 문제였다 이말이야!!!
            paintToDo(toDo.text, toDo.time); // 리스트 추가하는 함수
        });
    }
}




function init() {
    loadToDos(); // 함수를 만든 후, 반드시 호출해야 한다. 
    setToDos();
    toDoForm.addEventListener("submit", handleSubmit);



}

init();






