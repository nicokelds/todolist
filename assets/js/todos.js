
$("ul").on("click","li", function(){
    $(this).toggleClass("completed");    
    
});

$("ul").on("click","span",function(event){
$(this).parent().fadeOut(500,function(){
    $(this).remove();
});
event.stopPropagation;

});

$("#textbox").on("keypress",function(event){
    if(event.which === 13){
        var newTodo = $(this).val();
        $(this).val("");
        $.post('/', {todo: newTodo});
    };
});

$("i.fa-plus").on("click", function(){
    var newTodo = $("#textbox").val();
    $("#textbox").val("");
    $.post('/', {todo: newTodo});
});



