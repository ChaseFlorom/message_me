// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
// Loads all Semantic javascripts
import 'semantic-ui-sass'
require("jquery")
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
//= require semantic-ui
//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_self
//= require_tree .
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)




$( document ).on('turbolinks:load', function() {
  submit_message();
  scroll_bottom();
  $('.message .close')
  .on('click', function() {
    console.log("button")
    $(this).closest('.message').transition('fade');
  })
;
})

console.log("this should be working..")

window.scroll_bottom = function() {
  console.log("scrolling to the bottom")
  if($('#messages'.length > 0)) {
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
}

window.submit_message = function() {
  $('#message_body').on('keydown',function(e) {
    if(e.keyCode == 13) {
      $('button').click()
      e.target.value = ""
    }
  })
}