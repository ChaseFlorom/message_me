console.log("ui loaded")
$(document).on('turbolinks:load', function(){
  console.log("document loaded")
$('.message .close')
  .on('click', function() {
    $(this)
      .closest('.message')
      .transition('fade')
    ;
  })
;
})