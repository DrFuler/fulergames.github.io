
function clicker(button, type){
	document.querySelectorAll('.' + type).forEach(element => {
		element.classList.remove("selected");
	});
	button.classList.add("selected");
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