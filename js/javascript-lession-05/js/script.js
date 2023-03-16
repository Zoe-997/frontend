document.addEventListener("DOMContentLoaded", function(){
    // slider
    var slider = document.querySelector('.slider')
        sliderItems = document.querySelectorAll('.slider .slider-item'),
        sliderItemsCount = sliderItems.length,
        arrowNext = document.querySelector('.slider .next'),
        arrowPrev = document.querySelector('.slider .prev'),
        slideAutoplay = slider.getAttribute('data-autoplay'),
        slidePadding = slider.getAttribute('data-padding');
        slideDots = slider.getAttribute('data-dots')
        currentNum = 0;
        animationStatus = 'stop';
    
        if (slideAutoplay == 'true') {
            var sliderTime = setInterval(function(){autoSlide()}, 3000);   
        }

        if (slideDots == 'true') {
            document.querySelector('.slider .dots').style.display = 'block';
            let dots = document.querySelectorAll('.slider .dots .item');
            for (let i = 0; i < dots.length; i++) {
                dots[i].addEventListener('click', function(){
                    clearInterval(sliderTime);
                    for (let i = 0; i < dots.length; i++) {
                        dots[i].classList.remove('active');                
                    }
                    this.classList.add('active');
                    var dotActive = this;
                    var itemPosition = 0
                    for (itemPosition = 0; dotActive = dotActive.previousElementSibling; itemPosition++){}
        
                    for (let i = 0; i < sliderItem.length; i++) {
                        sliderItem[i].classList.remove('active');
                    }
                    sliderItem[itemPosition].classList.add('active');
                });
            }
        }

        function SlidePadding(){
            for (let i = 0; i < sliderItems.length; i++) {
                sliderItems[i].style.paddingLeft = slidePadding + 'px';              
                sliderItems[i].style.paddingRight = slidePadding + 'px';              
            }
        }
        SlidePadding();  

        function SlideArrow(arrow){
            if (animationStatus == 'run') {return false;}
            animationStatus = 'run';
            let animationStatusCount = 0;
            let currentItem = sliderItems[currentNum];

            if (arrow == 'next') {
                currentNum = (currentNum < sliderItemsCount - 1) ? (currentNum+1) : 0;
            } else{
                currentNum = (currentNum > 0) ? (currentNum-1) : (sliderItemsCount - 1);
            }

            let slideItemNext = sliderItems[currentNum];
            let currentItemHandle = function(){
                this.classList.remove('active');
                this.classList.remove('effect-normal');
                animationStatusCount++;
                animationStatus = (animationStatusCount == 2) ? 'stop' : animationStatus;
            }
            
            let slideItemNextHandle = function(){
                this.classList.remove('effect-active');
                this.classList.add('active');
                animationStatusCount++;
                animationStatus = (animationStatusCount == 2) ? 'stop' : animationStatus;
            }
            
            currentItem.addEventListener('webkitAnimationEnd', currentItemHandle);
            slideItemNext.addEventListener('webkitAnimationEnd', slideItemNextHandle);
            currentItem.classList.add('effect-normal');
            slideItemNext.classList.add('effect-active');
        }
        
        var SlideNext = function(){
            SlideArrow('next');
        };

        var SlidePrev = function(){
            SlideArrow('prev');
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