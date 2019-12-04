$(document).on('turbolinks:load', function(){
  $('.ui.dropdown').dropdown();
  // $('.message .close').on('click', function() {
  //   $(this).closest('.message').transition('fade');
  // });
  $('.ui.message.success').modal('show').delay(5000).queue(function() {
        $(this).modal('hide').dequeue();
    });
  $('.ui.message.error').modal('show').delay(5000).queue(function() {
        $(this).modal('hide').dequeue();
    });
})