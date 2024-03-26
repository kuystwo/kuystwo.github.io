// 대상을 변수에 저장
let goTop = document.querySelector(".go-top");
let targetPos = document.documentElement.scrollHeight / 2;
console.log(targetPos);

// 스크롤이 발생하면 실행할 동작
window.addEventListener("scroll", function () {
  // 스크롤 값 구하기
  let scrollTop = window.scrollY;
  console.log(scrollTop);

  // 스크롤 값이 350을 넘어가면
  if (scrollTop > targetPos) {
    // 탑버튼에 active 클래스 부여
    goTop.classList.add("active");
  } else {
    // 그렇지 않으면 탑버튼에 active 클래스 삭제
    goTop.classList.remove("active");
  }
});
