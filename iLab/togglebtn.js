/*================================
=            COMPTEUR            =
================================*/
var addBtn = document.getElementById("addBtn");
var subBtn = document.getElementById("subBtn");
var count = document.getElementById("count");
var countValue = count.innerHTML;

addBtn.addEventListener("click", function(e) {
    countValue++;
    instance(countValue);
})

subBtn.addEventListener("click", function(e) {
    if (countValue > 1) {
        countValue--;
        instance(countValue);
    }
})

instance(countValue);

function instance(countValue) {
    count.innerHTML = countValue;
    if (countValue == 1) {
        subBtn.classList.add("count__button--off");
    } else {
        subBtn.classList.remove("count__button--off");
    }
    
}

/*----------  count -> NOMBRE DE BILLETS  ----------*/

/*=====  End of COMPTEUR  ======*/

/*=====================================
=            TOGGLE BUTTON            =
=====================================*/

var selectDetailsBtns = document.querySelectorAll(".formore__btn");
var previousSelectType = document.getElementById("preselectedType");
var previousSelectComfort = document.getElementById("preselectedComfort");
var flag = "0";


for (var i = selectDetailsBtns.length - 1; i >= 0; i--) {
	selectDetailsBtns[i].addEventListener("click", setActiveSwap);
}


function setActiveSwap(){
	// Si a l'attribut A
		// A retirer toute les classes active

	// Si a l'attribut B
		// A retirer toutes les classes actives
	if(flag = "1"){
		if(this.hasAttribute("data-type")){
			
			previousSelectType.classList.remove("formore__btn--active");
			previousSelectType = this;


		}else if(this.hasAttribute("data-comfort")){
			
			previousSelectComfort.classList.remove("formore__btn--active");
			previousSelectComfort = this;
		}
	}
	this.classList.add("formore__btn--active");
	flag = "1";
		
}


var btnNext = document.getElementById("btnNext");

btnNext.addEventListener("click" , results);
function results(){
	console.log("Résultars du sondage: ")
	console.log("")
	console.log("count" , countValue);
	console.log("Type de voyage" , previousSelectComfort.getAttribute("data-type"));
	console.log("Confort" , previousSelectComfort.getAttribute("data-comfort"));	
}

/*=====  End of TOGGLE BUTTON  ======*/
