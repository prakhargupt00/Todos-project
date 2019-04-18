$("ul").on("click", "li", function(){
 	$(this).toggleClass("completed");  	
}) ; 

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){ // parent gives parent of span which is li here 
		$(this).remove() ;  // this here refers to $(this).parent
	}) ; 

	event.stopPropagation() ; // stops event bubbling in :see html 

}) ; 

$("input[type='text']").keypress(function(event){
	 
	if(event.which === 13){
	 var Todotext=	$(this).val() ; 
	 $(this).val("") ; 

	 $("ul").append("<li> <span><i class='fa fa-trash'></i></span> "+Todotext+"</li>")  ;

	}
}) ; 

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle(30) ; 
})