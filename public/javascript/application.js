"use strict";



$(function() {
  var $contacts = $("#contacts");

  function getContactsFrom(route, method, params) {
    return $.ajax({
      url: route,
      method: method,
      data: params,
      dataType: 'json',
    });
  }

  

  $("#all").on('click', function() {
    var promise = getContactsFrom('contacts', 'get');
    console.log(promise);
    promise.then(function(contacts) {
        $contacts.text('');
        $.each(contacts, function (i, contact) {
          $("#contacts").append("<tr><td>" + contact.name + "</td><td>" + contact.email + "</td></tr>");
        });
      });
  });

  $("#find").on('submit', function(event) {
    // alert( "finding" + $("#id").val());
    var promise = getContactsFrom('contacts/' + $('#id').val(), 'get');
    promise.then(function(contact) {
      $contacts.text('');
      $contacts.append("<tr><td>" + contact.name + "</td><td>" + contact.email + "</td></tr>");
    }, function() {
      $contacts.text('');
      $contacts.append('Not Found.');
    });
    event.preventDefault();
  });

});




