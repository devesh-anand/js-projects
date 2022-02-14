let buttonColours = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];
var randomChosenColour, randomNumber, level = 0;

//game start on keypress
$(document).keypress(function() {
    if(level === 0) {
        $('h1').text("Level "+level);
        nextSequence();
    }
});

function playSound(name) {
    var sound = new Audio(name);
    sound.play();
}

function animatePress(currentColour) {
    $('.'+currentColour).addClass('pressed');
    setTimeout(function() {
        $('.'+currentColour).removeClass('pressed');
    }, 100);
}

//adds to gamePattern as long as user presses the correct patterns
function nextSequence(){
    level++;
    userClickedPattern = [];//clear this every time user gets correct pattern
    $('h1').text("Level "+level);
    randomNumber = Math.floor(Math.random()*4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    animatePress(randomChosenColour);
    playSound(`./sounds/${randomChosenColour}.mp3`);
}

//simply checks if user's and game's patterns are same or not
function check(curLevel){
    for(let i=0;i<curLevel;i++)
    {
        if(gamePattern[i] != userClickedPattern[i])
            return false;
    }
    return true;
}

$(`#${randomChosenColour}`).fadeOut(200).fadeIn(200);

//when user click a button
$('.btn').click(function() {
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);

    if(check(userClickedPattern.length)==true)
    {
        if(gamePattern.length == userClickedPattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    }
    else {
        let sound = new Audio('./sounds/wrong.mp3');
        sound.play();

        $('body').addClass('game-over');
        setTimeout(function(){
            $('body').removeClass('game-over');
        }, 200);

        $('h1').text('Game Over, Press Any Key to Restart');
        //restart game, i.e, reset all values of game
        level = 0;
        gamePattern = [];
        userClickedPattern = [];
    }

    // console.log(gamePattern);
    // console.log(userClickedPattern);
    animatePress(userChosenColour);
    playSound(`./sounds/${userChosenColour}.mp3`);
});