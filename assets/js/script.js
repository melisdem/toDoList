// Check off specific todos by clicking

//in 226:if we use $("li").click(function() {
//	this.classList.toggle("done");
//}); it does not work for new todos that we add using inputs
//beacuse click () loops for oone time 
//but if we use on() event we can do it
//and also we have to use parameters of on("click", "li")

$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});
// Click on X to delete todo

//sum:What we do in here?
//first:stopPropagation when you click span element 
//you also click li,ul,container and then body in order.
//stopPropagation can be used for stoping the job right that node,element.

//second:in the begining ı use this.parent() but it gives error
//use $(this) otherwise you dont select the node an also
//parent() is a method that jQuery in vanilla you can use parentNode()
//and we use parameter e(event) for this method.

//third:fadeOut do only display none, not remove li from ul
//but if we remove first or using this code $(this).parent().fadeOut().remove()
//it will remove immadiately, so if we use remove inside the fadeout it will remove slowly 
$("ul").on("click", "span", function(e) { //we use $("ul") instead of $("li") becuse it exist when page loads but span that we use as a parameter does not
	$(this).parent().fadeOut(200, function() {
		$(this).remove();
	});
	e.stopPropagation();
});

//adding new todos
$("input:text").keypress(function(evt) {
	if (evt.which === 13) {
		//grabbing new todos text from input
		var todoText = $(this).val();
		$(this).val(""); //changing placaholder to default
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " +todoText+ "</li>");
		// ı should use '' in span i beacuse otherwise it does not work
	}	
});

$(".fa-plus").click(function(){
	$("input:text").fadeToggle();
})