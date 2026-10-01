var times = [];
times[4] = [30, 20, 15, 12, 10, 9, 8, 7, 6, 5];
times[5] = [40, 25, 20, 18, 15, 12, 10, 8, 7, 6];
times[6] = [50, 30, 25, 20, 18, 15, 12, 10, 9, 8];
times[7] = [60, 40, 30, 25, 20, 18, 16, 14, 12, 10];

function clicker(button, type){
	document.querySelectorAll('.' + type).forEach(element => {
		element.classList.remove("selected");
	});
	button.classList.add("selected");
	
	setClock();
};

function getValue(type){
	var retorno = "";
	document.querySelectorAll('.' + type + '.selected').forEach(element => {
		if(element.id){retorno = element.id;}
		else{retorno = element.innerText;}
	});
	return parseInt(retorno);
};

function toggleLife(life){
	if(Number.isInteger(life)){life = document.getElementById("life_" + life);}

	if(life.src.includes("life")){life.src = life.src.replace("life","fire");}
	else{life.src = life.src.replace("fire","life");}
};

function timeRuns(timer){
	if(timer[1] == 0){timer[0] -= 1; timer[1] = 99;}
	else{timer[1] -= 1;}
	
	if(timer[0] >= 0){setTimeout(timeRuns, 10, timer);}
	else{
		timer = [0, 0];
		alert("Acabou a missão!");
	}
	
	updateClock(timer);
};

function setClock(){
	var timer = [times[getValue("players")][getValue("mission") - 1], 0];
	updateClock(timer);
	return timer;
};
setClock();

function updateClock(timer){
	var text = "00:";
	if(timer[0] < 10){text += "0";}
	text += timer[0] + ":";
	if(timer[1] < 10){text += "0";}
	text += timer[1];
	
	document.getElementById("timer").innerText = text;
};

function startMission(){
	timeRuns(setClock());
}