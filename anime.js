(function(){
	var preload = document.getElementById('preload')
	var loading = 0;
	var id = setInterval(frame , 64);

	function frame(){
		if(loading == 50){
			clearInterval(id);
			window.open("../pic/index.html", "_self");
		}
		else{
			console.log(loading)
			loading++;
			if(loading ==40){
				preload.style.animation = "fade-out 1s ease"
			}
		}
	}
})();