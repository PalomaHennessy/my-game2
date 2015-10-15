var easy = ['Tiger', 'Elephant', 'Blue Whale', 'Orangutan', 'Panda', 'Orca', 'Giraffe', 'Polar Bear', 'Rhinoceros', 'Hippopotamus', 'Koala', 'Moose', 'Chimpanzee', 'Cheetah'];
var medium = ['Brown Bear', 'Snow Leopard', 'Humpback Whale', 'Aardvark', 'Puma', 'Sperm whale', 'coyote', 'red panda', 'narwal', 'flamingo', 'komodo dragon', 'great white shark'];
var hard = ['iberian lynx', 'aye-aye', 'wolverine', 'bonobo', 'caracal', 'puffin', 'mallard', 'hawksbill turtle', 'whale shark', 'giant manta ray', 'sunfish'];
var easyImgs = ['img/tiger.jpg', 'img/elephant.jpg', 'img/bluewhale.jpg', 'img/orangutan.jpg', 'img/panda.jpg', 'img/orca.jpg', 'img/giraffe.jpg', 'img/polar bear.jpg', 'img/rhinoceros.jpg', 'img/hippopotamus.jpg', 'img/koala.jpg', 'img/moose.jpg', 'img/chimpanzee.jpg', 'img/cheetah.jpg'];
var mediumImgs =  ['img/brownbear.jpg', 'img/snowleopard.jpg', 'img/humpbackwhale.jpg', 'img/aardvark.jpg', 'img/puma.jpg', 'img/spermwhale.jpg', 'img/coyote.jpg', 'img/redpanda.jpg', 'img/narwal.jpg', 'img/flamingo.jpg', 'img/komododragon.jpg', 'img/greatwhiteshark.jpg'];
var hardImgs = ['img/iberianlynx.jpg', 'img/aye-aye.jpg', 'img/wolverine.jpg', 'img/bonobo.jpg', 'img/caracal.jpg', 'img/puffin.jpg', 'img/mallard.jpg', 'img/hawksbillturtle.jpg', 'img/whaleshark.jpg', 'img/giantmantaray.jpg', 'img/sunfish.jpg'];
var animalGuess = "";
var playerArray = "";
var playerImages = "";
var counter = 0;
var player1 = 0;
var player2 = 0;
var currentPlayer = 'player1';

$(document).ready(function(){

$("#selector-buttons").click(function (event) {
	// console.log('hitting form')
    event.preventDefault();
    var hash = $('input[type="radio"]:checked').val();
	switch (hash){
		case 'game.html#easy':
			playerArray = easy
			playerImages = easyImgs
			console.log('playerImages',playerImages)
		break;
		case 'game.html#medium':
			playerArray = medium
			playerImages = mediumImgs
			console.log('playerImages',playerImages)
		break;
		case 'game.html#hard':
			playerArray = hard
			playerImages = hardImgs
			console.log('playerImages',playerImages)
		break;
		default: 
	}
    // window.location = $(this).find('input[type="radio"]:checked').val();
    console.log("TEST",$('input[type="radio"]:checked').val())
    $('#launchPage').hide()
    $('#playGame').show()
    nextImage();

});

// console.log(easyImgs[0])
//input image from specific array
//player 1 guesses image 
//if it is correct then they should get a point
//new image is called 
//other players turn
//when one persons score reaches 5 game over

var nextImage = function(){
	console.log('image', playerImages[counter])
	$('#imageInput').append("<img src=" + ' " ' + playerImages[counter] + ' " ' + ">")
}

// var checkGuess = function (){
// var currentImage = playerArray[counter] 
// if ($('#guess').val().toLowerCase() === currentImage.toLowerCase()){
//  if (currentPlayer == 'player1'){
//  	player1 ++
//  	$('#counter1').text(player1)
//  	currentPlayer = 'player2'
//  }
//  else if(currentPlayer == 'player2'){
//  	player2 ++
//  	$('#counter2').text(player2)
//  	currentPlayer = 'player1'
//  }
//  counter++
//  getRid();
//  nextImage ();  
//  winner();
// }
// }

var checkGuess = function (){
	var currentImage = playerArray[counter] 
	
		if (currentPlayer === 'player1'){	
			currentPlayer = 'player2'
			if ($('#guess').val().toLowerCase() === currentImage.toLowerCase()){	
				player1 ++
				$('#counter1').text(player1)
			}
		}
		else if(currentPlayer === 'player2'){
			currentPlayer = 'player1'
			if ($('#guess').val().toLowerCase() === currentImage.toLowerCase()){
				player2 ++
				$('#counter2').text(player2)
			}
		
		}

	counter++
	getRid();
	nextImage();  
	winner();

	$('input').val('');
	$('input').focus();	
}


var getRid = function () {
 $('#imageInput img').remove()

}

$('#submit').submit(function (event) {
	event.preventDefault();
	checkGuess();
});

var winner = function (){
	console.log('winner');
	if (player1 === 5){
		alert('Player 1 is the Winner!');
	$("#new-game").show();
	}
	else if (player2 === 5){
		alert('Player 2 is the Winner!');
	$("#new-game").show();
	}
};

var endGame = function(){
	location.reload();
}
$("#new-game").on('click', function (event){
	event.preventDefault();
	endGame();
	})
})

