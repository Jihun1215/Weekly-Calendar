// 다중 모달 만들기 


const $modalBg = document.getElementsByClassName('modal-background');
const $btnOpen = document.getElementsByClassName('btn-open');
const $btnClose = document.getElementsByClassName('btn-close')
//
function modal(m) {
    $btnOpen[m].addEventListener('click', () => {
        $modalBg[m].style.display = "flex";
        document.body.style.overflow = "hidden";
    });
    $btnClose[m].addEventListener('click', () => {
        $modalBg[m].style.display = "none";
        document.body.style.overflow = "unset";
    });
}

for (let m = 0; m < $btnOpen.length; m++) {

    modal(m);

}

// userModal창

const userModal = document.querySelector('.userNameForm');
const userInput = document.getElementById('userNameInput');
const userBtn = document.querySelector('.usernameBtn');


const userNameSave = document.getElementById('userNameSave');
// 가장 먼저시작되어야함
const loadedUserName = localStorage.getItem('userName');
// 저장된 닉네임이 있는지 체크 
// 유저이름이 저장되어있으면
if (loadedUserName !== null) {
    console.log('유저있음');
    // userName에 저장된이름 넣기
    userNameSave.innerText = `${loadedUserName}님👻`;
    // user modal 안열리게 고정
    $modalBg[1].style.display = "none";
    document.body.style.overflow = "unset";
}
// 유저이름이 저장되어있지않으면
else {
    console.log('유저없음');
    let 이름 = [];

    function saveName() {
        userInput.value == 이름[0].이름;
        localStorage.setItem('userName', 이름[0].이름);
    }



    userInput.addEventListener('input', function () {
        // userinput 창에 2글자이상되면 
        if (userInput.value.length >= 2) {
            userBtn.classList.add('usernameBtnShow')
        } else {
            userBtn.classList.remove('usernameBtnShow')
        }
    })



    // user버튼이 체크 되면?
    userBtn.addEventListener('click', function () {
        // input 값이 비워있다면?
        if (userInput.value == "") {
            alert('유저이름 입력하세요!');
        } // input 값이 2글자 이상 4글자 이하 일경우
        else if (userInput.value.length >= 2 && userInput.value.length <= 4) {
            let 유저이름 = userInput.value;
            let userobj = {
                이름: 유저이름,
            }
            이름.push(userobj);
            saveName();
            userNameSave.innerText = 유저이름;
            alert('이름이 추가되었습니다');
            $modalBg[1].style.display = "none";
            document.body.style.overflow = "unset";
        }
    })


}


// 3번쨰 모달 
const removeBtn = document.querySelector('.removeBtn');

removeBtn.addEventListener('click', function () {
    localStorage.removeItem('toDos');
    alert('일정에 삭제되었습니다');
    $modalBg[2].style.display = "none";
    document.body.style.overflow = "unset";
})



