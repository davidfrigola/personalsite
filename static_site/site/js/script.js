$(document).ready(function(){
	

	$(".menuoption").click(function(){
		$(".menuoption").fadeTo('fast',0.45);
		$(this).fadeTo('slow',1.0);
		
		$(".contentsection").addClass("contentsectionhidden");
		$(".contentsection").removeClass("contentsection");
		
		var section = ("#" + $(this).attr('id')+"section");
		$menusection = $(section);
		$menusection.addClass("contentsection");
		$menusection.removeClass("contentsectionhidden");
	});
});
