AOS.init();
AOS.init({
  duration: 1500,
  once: true,
  easing: 'linear',
  disable: 'mobile',
});
    var video = document.getElementById("myvideo");
    var btn = document.getElementById("mybtn");

    function playpusefun(){
      if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
      }else{
        video.pause();
        btn.innerHTML = "play";
      }
    }
    function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

$('.menu li a').click(function () {
  $('#myNav').css("height", "0%");

});
        $(document).ready(function() {
        $(".tab").click(function () {
            $(".menu li").removeClass("active");
            $(this).addClass("active");   
        });
        });
        $(window).scroll(function () {
  if ($(this).scrollTop() > 80) {
    $('.navbar').addClass("sticky");
    $('.navbar').css({"background-color": "#fff", "transition": "0.5s all"});
  } else {
    $('.navbar').removeClass("sticky");
    $('.navbar').css({"background-color": "transparent"});
  }
});

$(function () {
  $('#ChangeToggle').click(function () {
    $('#navbar-hamburger').toggleClass('hidden');
    $('#navbar-close').toggleClass('hidden');
  });
});
