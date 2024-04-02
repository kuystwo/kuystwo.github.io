$(function () {
// 대상을 변수에 저장
  const $characterList = $('.character-list > li');
  const $characterCard = $('.character-card-item');
  const $popup = $('.popup');
  const $btnClose = $('.btn-close');
  const $dim = $('.dim');

  setTimeout(openPopup, 1000);

  $('.wrap a').on('click', (e) => {
    e.preventDefault();

    openPopup();
  });

  // btnClose를 클릭하면 팝업창이 닫히게
  $btnClose.on('click', closePopup);

  // dim을 클릭하면 팝업창이 닫히게
  $dim.on('click', closePopup);

  // 중복되는 동작을 함수로 정의 - closePopup
  function closePopup() {
    $popup.removeClass('active');
    $dim.fadeOut();
  }

  // openPopup
  function openPopup() {
    $dim.fadeIn();
    $popup.addClass('active');
  }
  
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
})