var randomNumber = Math.floor((Math.random() * 100) + 1);

$('#guess').click(function(){
    var userGuess = $('#userGuess').val();
    var diff = Math.abs(randomNumber - userGuess); 
    var count = 1;
    $('#numGuesses').append(count);
    if(userGuess == randomNumber){
        alert("You are right!");
        $('.history').empty();
        count = 1;
    }
    else if(diff <= 10){
        alert("You are hot!");
        $('div').removeClass();
        $('div').addClass('hot');
        $('<li>').text(userGuess).appendTo('.history');
    }
    else if(diff <= 25){
        alert("You are warm.");
        $('div').removeClass();
        $('div').addClass('warm');
        $('<li>').text(userGuess).appendTo('.history');
    }
    else if(diff > 25){
        alert("Cold! Brrr...");
        $('div').removeClass();
        $('div').addClass('cold');
        $('<li>').text(userGuess).appendTo('.history');
    }
        $('#userGuess').val("");
});
