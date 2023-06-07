botReply("Hello, Let's Chat!");


var responseMessage = "";

function botReply(responseMessage){

	var defaultState = $("#main-container").html();

	$("#main-container").html(defaultState + "<div class=\"bubble bot-output currentMessage\">" + responseMessage + "</div></br>");

	$(".currentMessage").hide().delay(850).fadeIn();
	$(".currentMessage").removeClass("currentMessage");

}


var processMessage = "";

function botAlgorithm(processMessage){

	if((processMessage.indexOf("hello") >= 0) || (processMessage.indexOf("hi") >= 0) || (processMessage.indexOf("salam") >= 0)){
	var greeting = [
		"Heyyy",
		"hello and goodbye",
		"Hola",
		"salammm",
		"ciao"
		];
	var randomGreeting = greeting[Math.floor(Math.random() * greeting.length)];
		botReply(randomGreeting)
	}
  	if((processMessage.indexOf("????") >= 0) ||  (processMessage.indexOf("????") >= 0)){
	var greeting = [
		"????!",
		];
	var randomGreeting = greeting[Math.floor(Math.random() * greeting.length)];
		botReply(randomGreeting)
	}

	if(processMessage.indexOf("how are you") >= 0){
	var feeling = [
		"I'm okay",
		"Not Bad??",
		"Awlieee?",
		"IN NIZ BOGZARAD",
		"All good here."
		];
	var randomFeeling = feeling[Math.floor(Math.random() * feeling.length)];
		botReply(randomFeeling)
	}

	if((processMessage.indexOf("lol") >= 0) || (processMessage.indexOf("lmao") >= 0) || (processMessage.indexOf("haha") >= 0)){
	var greeting = [
		"It's not that funny.",
		"HAHAHA",
		"LMAO!",
		"Don't Laugh!",
		"COOL??"
		];
	var randomGreeting = greeting[Math.floor(Math.random() * greeting.length)];
		botReply(randomGreeting)
	}

	if(processMessage.indexOf("bye") >= 0){
	var goodbye = [
		"Bedrood",
		"Goodbye, my friend",
		"Have a Nice Day",
		"Okay, till next time!",
		"Bye bye!"
		];
	var randomGoodbye = goodbye[Math.floor(Math.random() * goodbye.length)];
		botReply(randomGoodbye)
	}
	if(processMessage.indexOf("how you doing") >= 0){
	var feeling = [
		"well same as alway",
		"its going bad lately",
		"Awli?",
		"IN NIZ BOGZARAD",
		"it rolls really good"
		];
	var randomFeeling = feeling[Math.floor(Math.random() * feeling.length)];
		botReply(randomFeeling)
	}
  if(processMessage.indexOf("what is this?") >= 0){
	var feeling = [
		"its a project for software design at university",
		];
	var randomFeeling = feeling[Math.floor(Math.random() * feeling.length)];
		botReply(randomFeeling)
	}
    if(processMessage.indexOf("??? ????? ???? ?? ????") >= 0){
	var feeling = [
		"??? ?? ????? ????? ???? ??? ???? ????? ????????? ???",
		];
	var randomFeeling = feeling[Math.floor(Math.random() * feeling.length)];
		botReply(randomFeeling)
	}
    if(processMessage.indexOf("can you write in persian?") >= 0){
	var feeling = [
		"????? ?? ??????? :)",
		];
	var randomFeeling = feeling[Math.floor(Math.random() * feeling.length)];
		botReply(randomFeeling)
	}

	if(processMessage.indexOf("time") >=0){
	var dateNow = new Date();
	var hour = dateNow.getHours();
	var minute = dateNow.getMinutes();
		botReply("The time is " + hour + ":" + minute + " at your current location.");
	}
  
  //works with vpn only!//

  	if (processMessage.indexOf("/gif") > -1){
    var gifQuery = processMessage.replace("/gif ", "").split(" ").join("+");
  		getGIF(gifQuery);
  	}

}

function getGIF(input){
    $(".main-container").innerHTML = "";

	var giphySource = "http://api.giphy.com/v1/gifs/search?q=";
	var giphyKey = "&api_key=dc6zaTOxFJmzC";

	var giphySearch = giphySource + input + giphyKey;

	var giphyAJAXCall = new XMLHttpRequest();
	giphyAJAXCall.open("GET", giphySearch);
	giphyAJAXCall.send();

	giphyAJAXCall.addEventListener("load",function(e){
	var data = e.target.response;
	var response = JSON.parse(data);

	var imageUrls = response.data;

	imageUrls.forEach(function(image){

	var src = image.images.fixed_height.url;

	botReply("<img src=\"" + src + "\" class=\"gif-container\"></br>");

	});
});
}


$(document).ready(function(){

  $("#textbox").keypress(function(event){

  	if(event.which === 13){

  		if ($("#enter").prop("checked")){

  			$("#send").click();

  		event.preventDefault();
  	    }
  	}
  });

  $("#send").click(function(){

  	var userMessage = $("#textbox").val();
  	
  	$("#textbox").val("");

  	var defaultState = $("#main-container").html();

 	$("#main-container").html(defaultState + "<div class=\"bubble user-input\">" + userMessage + "</div></br>");

 	$("#main-container").scrollTop($("#main-container").prop("scrollHeight"));

  	var forBotProcess = userMessage.toString().toLowerCase();

	botAlgorithm(forBotProcess);

  });
});
