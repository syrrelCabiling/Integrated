
$(document).foundation()

(() =>{
  console.log('video stuff loaded');

	
	var play_btn = document.getElementById('trailer'),
		pause_btn = document.getElementById('trailer'),
		stop_btn = document.getElementById('trailer');
	

	
function play_vid()
{
 play_btn.play();
	
}
	
	
function pause_vid()
{
 pause_btn.pause();
}
	
	
function stop_vid() 
{
 stop_btn.pause();
stop_btn.currentTime = 0;
}
	

	
	

	play_btn.addEventListener('click', play_vid);
	pause_btn.addEventListener('click', pause_vid);
	stop_btn.addEventListener('click', stop_vid);
	
})();