function playKey(e){
	// console.log(e);
	document.getElementById('keystroke').innerHTML = 'Key pressed' + e.keyCode ; //: "${e.keyCode}"';
	const audio = document.querySelector('audio[data-key="'+e.keyCode+'"');
	const key = document.querySelector('div[data-key="'+e.keyCode+'"');

	if(!audio) return; //to stop other keys pressed whose audio would not be available

	key.classList.add('playing');
	audio.currentTime = 0; //when key prssed repeatedly play again from start as by default it will wait for the *same* audio to finish before playing it
	audio.play();

}
function removeTransition(e){
	if(e.propertyName !== 'transform') return;//many event are triggered for transitionend but we just take the transform to track
	e.target.classList.remove('playing');
	console.log(e);
}
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown',playKey);