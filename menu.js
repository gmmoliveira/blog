$(function(){
	var bg_height = $("#lower_top_bg_img").height();
	var top_bg_vertical_pos = $("#lower_top_bg_img").offset().top;
	
	var face_height = $("#face").height();
	var face_vertical_pos = $("#face").offset().top;

	var h = face_vertical_pos - top_bg_vertical_pos - ((bg_height - face_height)/2);
	$("#face").css({bottom: h.toString()});
});
