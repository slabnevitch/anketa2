$(document).ready(function() {

	(function() {

		var stamp = document.querySelector('.header-stamp');
		setTimeout(function() {
			stamp.classList.add('tada');
			stamp.classList.remove('header-stamp-no-visible');
		}, 1000);

		function Skills() {
			var __self = this;
			var item = window.document.body;
			var pointer = document.querySelector('.pointer');
	 		var counter = document.querySelector('.jsskills-counter');
	 		var scale = document.querySelector('.scale-wrap');
	 		var body = document.body;
		 	var	prevX = 0;
		 	var clickCount = 0;
		 	var num = 0;

	 		
	 		this.init = function() {
	 			this.regListeners();
			}

			this.regListeners = function() {
				scale.addEventListener('mouseenter', enterHandler);
				scale.addEventListener('mouseleave', leaveHandler);
				scale.addEventListener('click', clickHandler);
				body.addEventListener('click', bodyClickHandler);
			}

			this.countActivation = function(e, byClick){
	 			var scaleWidth = scale.offsetWidth,
		 			deg = scaleWidth/180,
		 			coords = scale.getBoundingClientRect(),
		 			origin = coords.left,
		 			countItem = scaleWidth/1000;
		 			cursorX = e.pageX - origin,
		 			currentDeg = cursorX/deg,
		 			currentDegCorrecton = currentDeg - 90,
		 			counterValue = cursorX/countItem,
		 			pointerDifference = counterValue.toFixed() - prevX;


	 				console.log('текущее '+ counterValue.toFixed());
	 				console.log('старое '+ prevX);
	 				console.log('разница '+ pointerDifference);

				if(byClick == true){
					this.rotateByClick(currentDegCorrecton, pointerDifference);
					this.animateCounter(prevX, counterValue.toFixed());
				}else{
	 				this.rotatePointer(currentDegCorrecton);
	 				counter.innerText = counterValue.toFixed();
				}
		 			prevX = counterValue.toFixed(); 

	 			
	 			return counter.innerText;
			}

			this.rotatePointer = function(currentDegCorrecton) {
	 			pointer.style.transform = 'rotate('+ currentDegCorrecton + 'deg)';

	 			//$('.pointer').animate({rotate: currentDegCorrecton}, 1);
			}

			this.rotateByClick = function(currentDegCorrecton, pointerDifference) {
	 			var pointerDifferenceModule = Math.abs(pointerDifference);
	 			console.log('модуль ' + pointerDifferenceModule);
	 			$('.pointer').animate({rotate: currentDegCorrecton}, pointerDifferenceModule *4);
			}
			
			this.resetCounter = function() {
					pointer.classList.add('pointer-animated');
					counter.innerText = '000';
			}

			this.animateCounter = function(prevNum, nextNum) {
				
								//counter.innerText = prevNum;

				console.log('prevNum ' + prevNum);
				console.log('nextNum ' + nextNum);
				if(nextNum > prevNum){
					console.log('сработал ИФ');
					var plusTimer = setInterval(function() {
						num++;
						if(num == nextNum){
							 clearInterval(plusTimer);
						}
						counter.innerText = num;
					}, 1);
						
				}else{
					var minusTimer = setInterval(function() {
						num--;
						if(num == nextNum){
							 clearInterval(minusTimer);
						}
						counter.innerText = num;
					}, 1);
				}
				
						console.log('num in timer ' + num);
				return nextNum;
			}

			function bodyClickHandler(e) {
				if(e.target.className !== 'scale'){
					__self.resetCounter();
					
				}
			}

			function clickHandler(e){
				console.log('коунт ' + clickCount);
				pointer.classList.remove('pointer-animated');
				if(clickCount == 0){
					pointer.style.transform = 'rotate(-90deg)';
				}
				clickCount++;
				scale.removeEventListener('mousemove', mooveHandler);
	 			
	 			__self.countActivation(e, true);				
			}

			function enterHandler(e) {
				pointer.classList.remove('pointer-animated');
	  			scale.addEventListener('mousemove', mooveHandler);
				
	 		}

	 		function leaveHandler(e) {
	 				
	    		scale.removeEventListener('mousemove', mooveHandler);
	    		__self.resetCounter();
	 		}
			
	 		function mooveHandler(e) {
	 			
	 			__self.countActivation(e, false);

	 		}
		}

		var skill = new Skills();
		skill.init();
	 })();

});
