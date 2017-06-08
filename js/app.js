'use strict';

$(_ => {
  const screenValue = $('input:text');

  $('input:button').on('click', _ => {
    var eachNumber = $(this).val();
    var currentScreen = screenValue.val();
    currentScreen += eachNumber;

    screenValue.val(currentScreen);
    if($(this).val() == 'C'){
      screenValue.val("");
    }
  });

});
