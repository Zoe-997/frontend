document.addEventListener("DOMContentLoaded", function(){
    // slider
    var slider = document.querySelector('.slider')
        sliderItems = document.querySelectorAll('.slider .slider-item'),
        sliderItemsCount = sliderItems.length,
        arrowNext = document.querySelector('.slider .next'),
        arrowPrev = document.querySelector('.slider .prev'),
        autoplay = slider.getAttribute('data-autoplay');
        currentNum = 0;
        animationStatus = 'stop';
    
        if (autoplay == 'true') {
            var sliderTime = setInterval(function(){autoSlide()}, 3000);   
        }
        
        var SlideNext = function(){
            let currentItem = sliderItems[currentNum];

            if (animationStatus == 'run') {return false;}
            animationStatus = 'run';
            let animationStatusCount = 0;

            if(currentNum < (sliderItemsCount - 1)){
                currentNum++;
            } else{
                currentNum = 0;
            }
            let slideItemNext = sliderItems[currentNum];

            let currentItemHandle = function(){
                this.classList.remove('active');
                this.classList.remove('effect-normal');
                animationStatusCount++;
                if (animationStatusCount == 2) {
                    animationStatus = 'stop';
                }
            }
            
            let slideItemNextHandle = function(){
                this.classList.remove('effect-active');
                this.classList.add('active');
                animationStatusCount++;
                if (animationStatusCount == 2) {
                    animationStatus = 'stop';
                }
            }
            
            currentItem.addEventListener('webkitAnimationEnd', currentItemHandle);
            slideItemNext.addEventListener('webkitAnimationEnd', slideItemNextHandle);

            currentItem.classList.add('effect-normal');
            slideItemNext.classList.add('effect-active');
        };

        var SlidePrev = function(){
            let currentItem = sliderItems[currentNum];

            if (animationStatus == 'run') {return false;}
            animationStatus = 'run';
            let animationStatusCount = 0;

            if(currentNum > 0){
                currentNum--;
            } else{
                currentNum = sliderItemsCount - 1;
            }
            let slideItemNext = sliderItems[currentNum];

            let currentItemHandle = function(){
                this.classList.remove('active');
                this.classList.remove('effect-normal');
                animationStatusCount++;
                if (animationStatusCount == 2) {
                    animationStatus = 'stop';
                }
            }
            
            let slideItemNextHandle = function(){
                this.classList.remove('effect-active');
                this.classList.add('active');
                animationStatusCount++;
                if (animationStatusCount == 2) {
                    animationStatus = 'stop';
                }
            }
            
            currentItem.addEventListener('webkitAnimationEnd', currentItemHandle);
            slideItemNext.addEventListener('webkitAnimationEnd', slideItemNextHandle);

            currentItem.classList.add('effect-normal');
            slideItemNext.classList.add('effect-active');
        };

        arrowNext.addEventListener('click', SlideNext);
        arrowPrev.addEventListener('click', SlidePrev);
    
        function autoSlide(){
            var sliderItemActive = document.querySelector('.slider .slider-item.active');
            var sliderItemPosition = 0;
            for (sliderItemPosition = 0; sliderItemActive = sliderItemActive.previousElementSibling; sliderItemPosition++){}
    
            if (sliderItemPosition < (sliderItems.length - 1)){
                for (let i = 0; i < sliderItems.length; i++) {
                    sliderItems[i].classList.remove('active');               
                }
                sliderItem[sliderItemPosition].nextElementSibling.classList.add('active');
            } else {
                for (let i = 0; i < sliderItems.length; i++) {
                    sliderItems[i].classList.remove('active');               
                }
                sliderItem[0].classList.add('active');
            }
            
        }    

},false);