//home carousel
			var title = document.getElementById("carouseltext");
			var music = document.getElementById("carouselmusic");
			var textArray =[];
			textArray[0] = "Once upon a time, there was a cat.";
			textArray[1] = "Cat liked to have fun.";
			textArray[2] = "And more fun...";
			//https://developer.mozilla.org/en-US/docs/DOM/HTMLMediaElement
			var imgArray = new Array();
			imgArray[0] = new Image();
			imgArray[0].src = 'carouselimg0.jpg';
			imgArray[0].title = textArray[0];
			imgArray[1] = new Image();
			imgArray[1].src = 'carouselimg1.jpg';
			imgArray[1].title = textArray[1];			
			imgArray[2] = new Image();
			imgArray[2].src = 'carouselimg2.jpg';
			imgArray[2].title = textArray[2];
			
			

			$('#carouselimg').click(nextImage);
			//nextImage(carouselimg);
			
			function nextImage(element){
				var img = document.getElementById(element);
				for(var i = 0; i < imgArray.length;i++){
					if(imgArray[i].src == img.src){
						if(i==0){
							music.play();
							}
						if(i === imgArray.length-1){
							document.getElementById(element).src = imgArray[0].src;
							title.innerHTML = imgArray[0].title;
							music.pause();
							break;
						}else{
						document.getElementById(element).src = imgArray[i+1].src;
						title.innerHTML = imgArray[i+1].title;
						break;
						}
					}
				}
			}