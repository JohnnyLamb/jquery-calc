// add scripts
$(document).on('ready', function(){

  var operators = ["+","-","x","÷"];
      // this allows you to click any of the buttons
  $('span').on("click",function(){
      var keyPressed = $(this).html();
      $('#screen').append(keyPressed);
      var screenContents = $('#screen').html();

      if(keyPressed === '='){
        for(var i = 0; i < operators.length; i++){
          for(var j = 0; j < screenContents.length; j++){
              if(operators[i] === screenContents[j]){
                var indexOfOperator = screenContents.indexOf(screenContents[j]);
                var operatorKind = operators[i] || screenContents[j];
                var plusOne = indexOfOperator + 1;
                number1 = parseInt(screenContents.slice(0,indexOfOperator));
                number2 = parseInt(screenContents.slice(plusOne,-1));
              }
            }
          }
              console.log(number1 + " first parameter");
              console.log(number2 + " second parameter");

          if (operatorKind === "+"){
            var added = number1 + number2;
            $('#screen').html(null);
            $('#screen').append(added);
          }
          else if(operatorKind === "-") {
            var subtracted = number1 - number2;
            $('#screen').html(null);
            $('#screen').append(subtracted);
          }
          else if(operatorKind === "x"){
            var multiplied = number1 * number2;
            $('#screen').html(null);
            $('#screen').append(multiplied);
          }
          else if(operatorKind === "÷"){
            var divide = number1 / number2;
            $('#screen').html(null);
            $('#screen').append(divide);
          }
        }
      });
      $('#cancel').on("click",function(){
           $('#screen').html(null);
         });
});
