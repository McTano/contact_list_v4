"use strict"



$(function() {
  var $all = $("#all");
  var $contacts = $("#contacts");

  function getContactsFrom(route) {
  $.ajax({
    url: route,
    method: 'GET',
    // dataType: 'json',
    success: function (contacts) {
      $contacts.text('');
      $.each(contacts, function (i, contact) {
        $("#contacts").append("<tr><td>" + contact.name + "</td><td>" + contact.email + "</td></tr>");
      });
    }
  });
}

  

  $("#all").on('click', function() {
    getContactsFrom('contacts');
  });
});




