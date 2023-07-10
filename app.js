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

let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.getElementById("day-night");


//  check if dark mode is enabled
// if its enbled, turn it off
// if it disabled,turn it on

const enableDarkMode = () => {
	//  1. add the class dark -theme to the body
	document.querySelector("body").classList.add("dark-theme");
	document.querySelector(".text-container").classList.add("dark-theme");
	document.querySelector(".main-container").classList.add("dark-theme");
	document.querySelector(".arrow-top").classList.add("dark-theme");
	darkModeToggle.classList.add("dark-theme");
	darkModeToggle.innerHTML = "+ light mode";
	//  2. upadate darkMode in the localStorage
	localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
	//  1. remove the class dark -theme to the body
	document.querySelector("body").classList.remove("dark-theme");
	document.querySelector(".text-container").classList.remove("dark-theme");
	document.querySelector(".main-container").classList.remove("dark-theme");
	document.querySelector(".arrow-top").classList.remove("dark-theme");
	darkModeToggle.classList.remove("dark-theme");
	darkModeToggle.innerHTML = "+ dark mode";
	//  2. upadate darkMode in the localStorage
	localStorage.setItem("darkMode", null);
};

if(darkMode ==="enabled"){
	enableDarkMode();
}else{
	disableDarkMode();
}


darkModeToggle.addEventListener("click", () => {
	darkMode = localStorage.getItem("darkMode"); // Updatind darkMode Vairable
	if (darkMode !== "enabled") {
		enableDarkMode();
		console.log(darkMode);
	} else {
		disableDarkMode();
		console.log(darkMode);
	}
});

//  230709
//  Improve media queries  ---> footer padding,font size,
// working on dark mode (localStorage)
