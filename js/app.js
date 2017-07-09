$(document).ready(function(){
// translate: when the document is fully loaded, launch the function following
	var $heart = $(".heart"),
		$addComment = $(".photo__addcomment-area");
// function: declare the variable, and allocate all items with .heart class

	$heart.click(function(){
		if($(this).hasClass('fa-heart-o')){
			console.log("+1")
		} else{
			console.log("-1")
		}
		$(this).toggleClass("fa-heart-o fa-heart")
	});

	$addComment.keydown(function(event){
		//detect if the key is enter//
		if(event.keyCode == 13){
			//save the textarea's value//
			var newComment = event.target.value;
			//select the comment list above textarea//
			var commentList = $(this).parent().parent().children(".comments");
			//empty the value of textarea after press Enter//
			$(this).val('').blur();
			//Append a <li> to comments//
			commentList.append("<li class='photo__comment'>\
						<span class='photo__comment--author'>Serranoarevalo</span> " + newComment + "</li>");
		}
	})
})