//função para trocar o active da nav
/*(document).on('click', 'ul li', function(){
    $(this).addClass('active').siblings().removeClass('active')
})*/

//função para trocar o background da nav

  $(function() {
    var size = 0;
    if(window.innerWidth < 575){
      size = 100;
    }
    else if (window.innerWidth < 870){
      size = 400;
    }
    else{
      size = 730;
    }
    $(window).on("scroll", function() {
      if($(window).scrollTop() > size) {
        $(".nav-color").addClass("bg-black");
      } else {
        $(".nav-color").removeClass("bg-black");
      }
    });
  });