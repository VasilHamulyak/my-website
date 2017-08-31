$(function() {
    $('input[type=submit]').click(sendData);
});

function sendData(e) {
    e.preventDefault();
    if (!$('form')[0].checkValidity()) {
        $('#checkup').show();
        return;
    }
    $.ajax({
        url: 'https://formspree.io/vasil.hamulyak@gmail.com',
        method: 'POST',
        data: {
           name: $('[name=user-name]').val(),
           email: $('[name=user-email]').val(),
           subject: $('[name=object]').val(),
           message: $('#textarea').val()
        },
        dataType: 'json'
    }).done(function(){
    $('form')[0].reset();
    $('#sent').show();
  })
}