function scrollWin(a) {
    window.scrollTo(0, a*700);
}
function logoTrigger(){
  var a=document.getElementById("full-page");
  var x= a.scrollTop;
  console.log(x);
  document.getElementById("result").innerHTML = "Horizontally: " + x + "px.";
}


$(function () {
  $(window).on('scroll', function () {
      if ( $(window).scrollTop() != 0 && $(window).scrollTop() > 200 ) {
        $('.heading1').removeClass('active12');  
        $('.heading1').addClass('active11');
        $('.heading2').removeClass('active22');  
        $('.heading2').addClass('active21');
        $('#nav-container').css('background','black');
      } 
      if ( $(window).scrollTop() < 200 ) {
          $('.heading1').addClass('active12');
          $('.heading2').addClass('active22');
          $('#nav-container').css('background','rgba(255, 255, 255, 0)');
          $('#nav-container').css('background-image','linear-gradient(black, rgba(0, 0, 0, 0.726), rgba(0, 0, 0, 0))');
      }
  });
});