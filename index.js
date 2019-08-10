//找到第一個button，加入eventlistener，前面為驅動的原因，後面則為執行的動作

//偵測滑鼠
var numberOfDrumButtons = document.querySelectorAll(".drum").length

for(var i = 0; i < numberOfDrumButtons; i++){ 

	document.querySelectorAll(".drum")[i].addEventListener("click", function(){

	  var buttonInnerHTML = this.innerHTML;


	makeSound(buttonInnerHTML);   

	buttonAnimation(buttonInnerHTML);

});

}
//偵測鍵盤按鍵

document.addEventListener("keypress", function(event){

	makeSound(event.key);

	buttonAnimation(event.key);

});

function makeSound(key){

	  switch(key){
	  	case "w":
	  		var crash = new Audio("file:///Volumes/apple/%E5%89%8D%E7%AB%AF%E8%AA%B2%E7%A8%8B/[Angela%20Yu]%20Udemy%20-%20The%20Complete%202019%20Web%20Development%20Bootcamp/12.%20Advanced%20Javascript%20and%20DOM%20Manipulation/Drum%20Kit%20Starting%20Files/sounds/crash.mp3")
	  		crash.play();
	  		break;

	  	case "a":
	  		var kickbass = new Audio("file:///Volumes/apple/%E5%89%8D%E7%AB%AF%E8%AA%B2%E7%A8%8B/[Angela%20Yu]%20Udemy%20-%20The%20Complete%202019%20Web%20Development%20Bootcamp/12.%20Advanced%20Javascript%20and%20DOM%20Manipulation/Drum%20Kit%20Starting%20Files/sounds/kick-bass.mp3")
	  		kickbass.play();
	  		break;

	  	case "s":
	  		var snare = new Audio("file:///Volumes/apple/%E5%89%8D%E7%AB%AF%E8%AA%B2%E7%A8%8B/[Angela%20Yu]%20Udemy%20-%20The%20Complete%202019%20Web%20Development%20Bootcamp/12.%20Advanced%20Javascript%20and%20DOM%20Manipulation/Drum%20Kit%20Starting%20Files/sounds/snare.mp3")
	  		snare.play();
	  		break;

	  	case "d":
	  		var tom1 = new Audio("file:///Volumes/apple/%E5%89%8D%E7%AB%AF%E8%AA%B2%E7%A8%8B/[Angela%20Yu]%20Udemy%20-%20The%20Complete%202019%20Web%20Development%20Bootcamp/12.%20Advanced%20Javascript%20and%20DOM%20Manipulation/Drum%20Kit%20Starting%20Files/sounds/tom-1.mp3")
	  		tom1.play();
	  		break;

	  	case "j":
	  		var tom2 = new Audio("file:///Volumes/apple/%E5%89%8D%E7%AB%AF%E8%AA%B2%E7%A8%8B/[Angela%20Yu]%20Udemy%20-%20The%20Complete%202019%20Web%20Development%20Bootcamp/12.%20Advanced%20Javascript%20and%20DOM%20Manipulation/Drum%20Kit%20Starting%20Files/sounds/tom-2.mp3")
	  		tom2.play();
	  		break;

	  	case "k":
	  		var tom3 = new Audio("file:///Volumes/apple/%E5%89%8D%E7%AB%AF%E8%AA%B2%E7%A8%8B/[Angela%20Yu]%20Udemy%20-%20The%20Complete%202019%20Web%20Development%20Bootcamp/12.%20Advanced%20Javascript%20and%20DOM%20Manipulation/Drum%20Kit%20Starting%20Files/sounds/tom-3.mp3")
	  		tom3.play();
	  		break;

	  	case "l":
	  		var tom4 = new Audio("file:///Volumes/apple/%E5%89%8D%E7%AB%AF%E8%AA%B2%E7%A8%8B/[Angela%20Yu]%20Udemy%20-%20The%20Complete%202019%20Web%20Development%20Bootcamp/12.%20Advanced%20Javascript%20and%20DOM%20Manipulation/Drum%20Kit%20Starting%20Files/sounds/tom-4.mp3")
	  		tom4.play();
	  		break;

	  	default: console.log(buttonInnerHTML);

}}


function buttonAnimation(currentKey){

	var activeButton = document.querySelector("." + currentKey);
//pressed 是css原檔案已設置好的灰色背景
	activeButton.classList.add("pressed");
//此時變灰色，卻不會變回白色，需加入間隔時間後回到白色。
setTimeout(function(){
	activeButton.classList.remove("pressed");
}, 100); 


}






//var audio = new Audio("file:///Volumes/apple/%E5%89%8D%E7%AB%AF%E8%AA%B2%E7%A8%8B/[Angela%20Yu]%20Udemy%20-%20The%20Complete%202019%20Web%20Development%20Bootcamp/12.%20Advanced%20Javascript%20and%20DOM%20Manipulation/Drum%20Kit%20Starting%20Files/sounds/tom-1.mp3");
//audio.play();