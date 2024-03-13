$(function () {
  // 대상을 변수에 저장
  const $characterList = $('.character-list > li');
  const $characterCard = $('.character-card-item');

  // 초기 세팅
  tabAction(0);

  // 탭메뉴를 클릭했을 때
  $characterList.on('click', function () {
    let idx = $(this).index();

    tabAction(idx);
  });

  // 중복되는 동작을 함수로 정의
  function tabAction(index) {
    $characterList.removeClass('on');
    $characterList.eq(index).addClass('on');

    $characterCard.hide();
    $characterCard.eq(index).show();
  }
});
