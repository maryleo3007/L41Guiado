$(function (){

  var screenValue = $('input:text');
  $('input:button').on('click', function () {

    var eachNumber = $(this).val();
    var currentScreen = screenValue.val();
    currentScreen += eachNumber;

    screenValue.val(currentScreen);

    if($(this).val() == 'C'){
      screenValue.val("");
    }
  });

  $('button').click(function (event) {
    event.preventDefault();
    screenValue.val(eval(screenValue.val()));
  });

});
