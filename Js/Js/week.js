const now = new Date();
const year = now.getFullYear(); //2022
const month = now.getMonth() + 1; //12
const today_day = now.getDate();  //10

const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "June",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];
const week = now.getDay();// 요일
const WEEK_DAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fai', 'Sat'];

const thisMonth = document.getElementById('thisMonth');
const thisDay = document.getElementById('thisday');
const thisYear = document.getElementById('thisyear');
const thisWeekofDay = document.getElementById('thisWeekofDay');

// 월
thisMonth.innerText = MONTH[month - 1];
// 날
thisDay.innerText = ` ${today_day},`;
// 년도
thisYear.innerText = year;
// 요일
thisWeekofDay.innerText = WEEK_DAY[week];

// 요일표시
let day = document.querySelectorAll('#week');

// 오늘표시 원
let ground = document.querySelectorAll('.ground');
// 2022-12-10 ex)
const TODAY = `${year}${month}${today_day}`;
// 날짜대입
let dayOfDay = document.querySelectorAll('#dayofday')







// 요일 저동 등록  
for (let i = 0; i < WEEK_DAY.length; i++) {
    day[i].innerText = WEEK_DAY[i];
    // 오늘요일이면 class 넣기 
    if (WEEK_DAY[week] === day[i].textContent) {
        // 오늘요일 div 요일 오늘표시하기
        day[i].classList.add('today_color');
        // 오늘요일 div 동그라미 오늘표시하기
        ground[i].classList.add('todayGround');







    }

}



// 이번주 날짜 출력하는 코드
let thisWeek = [];
for (var i = 0; i < 7; i++) {
    let resultDay = new Date(year, month - 1, today_day + (i - week));
    let yyyy = resultDay.getFullYear();
    let mm = Number(resultDay.getMonth()) + 1;
    let dd = resultDay.getDate();

    mm = String(mm).length === 1 ? '0' + mm : mm;
    dd = String(dd).length === 1 ? '0' + dd : dd;

    thisWeek[i] = yyyy + '-' + mm + '-' + dd;

}

// 위코드에 값가지고 이번주 날짜 생성 후 표시
//  2022-12-10 == "2022-12-10"
// // 구현성공... 힘들었땅
for (let d = 0; d < thisWeek.length; d++) {
    if (thisWeek[d] == thisWeek[d]) {
        dayOfDay[d].innerText = thisWeek[d].slice(8, 10);
    }
}
// +버튼 애니메이션 메뉴 나오게
let menuToggle = document.querySelector('.menuToggle');
menuToggle.onclick = function () {
    menuToggle.classList.toggle('active');
}


