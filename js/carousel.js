//home carousel
			var title = document.getElementById("carouseltext");
			var music = document.getElementById("carouselmusic");
			var textArray =[];
			//var arraySize = 3;
			textArray[0] = "Once upon a time, there was a cat.";
			textArray[1] = "Cat liked to have fun.";
			textArray[2] = "And more fun...";
			//https://developer.mozilla.org/en-US/docs/DOM/HTMLMediaElement
			var imgArray = new Array();			
			for (i=0;i<textArray.length; i++){
				imgArray[i] = new Image();
				imgArray[i].src = 'carouselimg'+i+'.jpg';
				imgArray[i].title = textArray[i];				
			}

			$('#carouselimg').click(nextImage);
			function nextImage(){
				var img = document.getElementById(element);
				for(var i = 0; i < imgArray.length;i++){
					if(imgArray[i].src == img.src){
						if(i==0){
							music.play();
							}
						if(i === imgArray.length-1){
							img.src = imgArray[0].src;
							title.innerHTML = imgArray[0].title;
							music.pause();
							break;
						}else{
							img.src = imgArray[i+1].src;
							title.innerHTML = imgArray[i+1].title;
							break;
						}
					}
				}
			}