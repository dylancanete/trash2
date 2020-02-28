var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	let vol = document.querySelector("#volume");
	vol.innerHTML=video.volume *100 +"%";
	console.log("Play Video");
	console.log(video);
} 

function pauseVid() { 
	video.pause();
	console.log(video);
} 

function decreaseSpeed() { 
	video.playbackRate/=1.25;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate*=1.26;
  	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	video.currentTime=video.duration;
  	video.currentTime = 0;
  	video.play();
	console.log("Current location is "+video.currentTime);
}
function mute() { 
  	if (video.muted){
  		console.log("Changing to Unmuted");
  		video.muted = false;
  	}
  	else{
      	console.log("Changing to Muted");
      	video.muted= true;
  	}
}

function changeVolume() {
	var volume = document.querySelector("#volumeSlider").value/100;
	video.volume = volume;
	console.log("Volume is " +volume*100);
	let vol = document.querySelector("#volume");
	vol.innerHTML=video.volume *100 +"%";
}
       

function gray() { 
	document.getElementById("myVideo").style.filter = "grayscale(100%)";
	console.log("In grayscale");
}

function color() {
	document.getElementById("myVideo").style.filter = "none";
	console.log("In color");
}
