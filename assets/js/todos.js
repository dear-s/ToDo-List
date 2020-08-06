

// check off specific todos by clicking

// $('li').click(function(){
//     // check if gray
//     if($(this).css("color") === "rgb(128, 128, 128)"){
//         // turn it black
//         $(this).css({
//             color: "black",
//             textDecoration: "none"
//         });
//     }
//     else{
//         $(this).css({
//             color: "gray",
//             textDecoration: "line-through"
//         });
//     }
// });

// click --- present elements only
// on - all the future elements - both work the same
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});


// click on X to delete Todo
// fixed event bubbling
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
    // this is for enter keypress
      if(event.which === 13){
          // hit enter - code
          // extract text
          var todoText = $(this).val();
          
          // clear out the input
          $(this).val("");

          // create a new li and add to ul
          $('ul').append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
      }
});


// toggle plus icon - keeps track of the list without adding logic
$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle()
});

