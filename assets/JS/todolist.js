// Check off specific Todos by clicking
$("ul").on("click","li", function(){

    $(this).toggleClass("completed");
    // if($(this).css("color") === "rgb(128, 128, 128)"){
    //     $(this).css({
    //         color: "black", 
    //         textDecoration: "none"
    //     });
    // }
    // else{
    // $(this).css({
    //     color: "gray", 
    //     textDecoration: "line-through"
    // });
    // }
});

// Click on X to delete Todo
$("ul").on("click","span",function(event){
   $(this).parent().fadeOut(500, function(){
       $(this).remove();
   });
    event.stopPropagation();
});

//adding a todo
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        //create a 
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> "+ todoText + "</li>");
    }
});
//toggle to add the a todo to the list
$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});