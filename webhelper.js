var buttonElement = document.getElementById("submit-guess");

window.onload = start;

var colors=[], code=[], guess=[], feedback=[], newGame = true;
var turn=0;
colors = ["r","b","g","w","c","y"];
// add arrays for thisTurn, turnRecords
var thisTurn = [], turnRecords = [];
var alertString="";

function start() {
    setup();
}
function main(){
	while (feedback[3]!="b" && guess[0]!="q")  {
		
	}
}

function startGame(){
	code=setCode(colors)
	var startPlay="<h1>Code Is Set up!</h1>\n<p>Pick your four choices for your first guess.</p>"+code;
	var welcome="<h1>Welcome to Mastermind!</h1><p>Here are instructions.</p>"+code;
    var buttonElement = document.getElementById("submit-guess");
    buttonElement.innerHTML = "Submit color choices"; 
	var board = document.getElementById("board");
	board.innerHTML=startPlay;
	buttonElement.onclick = function () {
		newGetGuess();
	}
}

function delayText(text, delay) {
    var boardElement = document.getElementById("board");
    var index = 0;
    story("");
    var callback = function (text) {

        story(boardElement.innerHTML  + text[index]+ "<br />"+ "<br />");
        index += 1;
        if (index >text.length-1){
            clearInterval(timer);
        }
    }
    var timer = setInterval(function () {
        callback(text);
    }, delay);
}


function setup() {
	var welcome="<h1>Welcome to Mastermind!</h1><p>Here are instructions: Colors include [r]ed, [c]yan, [y]ellow, [w]hite, [b]lack, [g]reen.</p>"+code;
    var buttonElement = document.getElementById("submit-guess");
    buttonElement.innerHTML = "Start Game"; 
	var board = document.getElementById("board");
	board.innerHTML=welcome;
	
    buttonElement.onclick = function () {
		startGame();
	}
}

function newGetGuess(){
	var guess=[];
	var turn = 1;
	alert("Turn = "+turn);
	var alertString="<h1>Mastermind</h1><p>Guess "+turn+":";
	for(var i=0;i<4;i++){
		var g = document.getElementById(i);
		guess[i]=g.options[g.selectedIndex].value;
		
	}
	alertString=alertString.concat(guess.join" ");
	board.innerHTML=alertString;
}