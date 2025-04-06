var video;

window.addEventListener("load", function() {
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.volume = 0.75;
	video.play()
 });

 document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click" , function(){
	video.playbackRate *= 1.1;
	console.log(video.playbackRate);
});

document.querySelector('#skip').addEventListener("click", function(){
	video.currentTime += 10;

	if (video.currentTime >= video.duration){
		video.currentTime= 0;
		console.log(video.currentTime);
	}
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function(){
	
	if (video.muted){ // make it unmuted
		video.muted = false;
		document.getElementById("mute").innerHTML="Mute"
		console.log("Unmuted");
	}
	else{ //mute it
		video.muted = true;
		document.getElementById("mute").innerHTML="Unmute"
		console.log("Muted");
	}
});

document.querySelector("#slider").addEventListener("change", function(){
	video.volume = this.value / 100;
	console.log(video.volume);
});

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool");
});

