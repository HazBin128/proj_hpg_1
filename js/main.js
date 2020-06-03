$(document).ready(function(){

var height = $("#navigation").height();

  // рисуем хедер на весь экран, корректируем размер
 $('#header').height($(window).height() - $("#navigation").height() - $("#description").height());
 $('main').css('top', $("#navigation").height());


 $(".nav-item a").click(function(){
 	$("body,html").animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top - height
 	},1000)

 $(".navbar-toggler").click();

 })


})
