//====================== CURSOR ====================== 
let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {

	let x = e.clientX;
	let y = e.clientY;
	// console.log(x, y);
	innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;

}
//====================== DAY NIGHT ====================== 
const switchButton = document.getElementById("day-night");



switchButton = document.addEventListener('click',changeDayNight);

function changeDayNight(event){
	
	const target = event.target;
  if (target.id !== "day-night") return; // Exit if the click is not on the #day-night element

	document.querySelector("body").classList.toggle('dark-theme');
	document.querySelector(".text-container").classList.toggle('dark-theme');
	document.querySelector(".main-container").classList.toggle('dark-theme');
	document.querySelector(".arrow-top").classList.toggle('dark-theme');
	switchButton.classList.toggle('dark-theme');
		if(switchButton.classList.contains('dark-theme')){
				switchButton.innerHTML="+ light mode";
			}else{
				switchButton.innerHTML="+ dark mode";
			}
	};








