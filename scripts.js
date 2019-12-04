// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener('load', function(){
	let takeoff = document.getElementById('takeoff');
	let flightStatus = document.getElementById("flightStatus");
	let shuttleBg = document.querySelector("#shuttleBackground");
	let shuttleHeight = document.getElementById("spaceShuttleHeight");
	let upBtn = document.getElementById("upbtn");
	let downBtn = document.getElementById("downbtn");
	let leftBtn = document.getElementById("leftbtn");
	let rightBtn = document.getElementById("rightbtn");

	takeoff.addEventListener('click', function(){	
		let confirm = window.confirm("Confirm that the shuttle is ready for takeoff.");
		if (confirm){
			flightStatus.innerHTML = "Shuttle in flight.";
			shuttleBg.style.backgroundColor = 'blue';
			shuttleHeight.innerHTML = 10000;
		}
	});

	let landing = document.getElementById('landing');
	landing.addEventListener("click", function(){
		let landAlert = window.alert("The shuttle is landing. Landing gear engaged.");
		flightStatus.innerHTML = "The shuttle has landed.";
		shuttleBg.style.backgroundColor = "green";
		shuttleHeight.innerHTML = 0;
	});

	let abort = document.getElementById("missionAbort");
	abort.addEventListener("click", function(){
		let confirm = window.confirm("Confirm that you want to abort the mission.");
		if (confirm){
			flightStatus.innerHTML = "Mission aborted.";
			shuttleBg.style.backgroundColor = "green";
			shuttleHeight.innerHTML = 0;
		}
	});

	let rocket = document.querySelector("#rocket");
	rocket.style.position = "relative";
	let vertical = 0;
	let horiz = 0;

	upBtn.addEventListener("click", function(){
		vertical -= 10;
		rocket.style.top = `${vertical}px`;
	});

	downBtn.addEventListener("click", function(){
		vertical += 10;
		rocket.style.top = `${vertical}px`;
	});

	leftBtn.addEventListener("click", function(){
		horiz += 10;
		rocket.style.right = `${horiz}px`;
	});

	rightBtn.addEventListener("click", function(){
		horiz -= 10;
		rocket.style.right = `${horiz}px`;
	});
});