$(document).ready(function(){

  // рисуем хедер на весь экран, корректируем размер
 $('#header').height($(window).height() - $("#navigation").height());
 $('main').css('top', $("#navigation").height());


 $(".navbar a").click(function(){
 	$("body,html").animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top
 	},1000)

 })


})
