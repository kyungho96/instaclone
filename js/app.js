$(document).ready(function(){
// translate: when the document is fully loaded, launch the function following

	var $heart = $(".heart");
// function: declare the variable, and allocate all items with .heart class

	$heart.click(function(){
		$(this).toggleClass("fa-heart-o fa-heart")
	})
})