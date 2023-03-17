document.addEventListener("DOMContentLoaded", function(){
    var body = document.querySelector('body'),
        backgroundEffect = document.querySelector('.background-effect'),
        postPopup = document.querySelector('.post-popup'),
        postImages = document.querySelectorAll('.section-post .section-images .image-item'),
        postPopupCloseBtn = document.querySelector('.post-popup .close-btn'),
        postItemsWrapper = document.querySelector('.section-post .post-items'),
        postItems = document.querySelectorAll('.section-post .post-item'),
        slider = document.querySelector('.slider'),
        sliderItems = document.querySelectorAll('.slider .slider-item'),
        sliderNext = document.querySelector('.slider .arrow.next'),
        sliderPrev = document.querySelector('.slider .arrow.prev'),
        sliderPadding = slider.getAttribute('data-padding'),
        activeCount = 0;

    
    function PostItems() {
        for (let i = 0; i < postItems.length; i++) {
            var S4 = function() {
                return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
            };
            var classCode = (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
            var itemClassName = postItems[i].classList[0];
            var itemClassCode = itemClassName + '-' + classCode
            postItems[i].classList.add(itemClassCode);

            var PostItemImageCode = '.section-post ' + '.' + itemClassCode + ' .section-images .image-item';
            var PostImagesPrivate = document.querySelectorAll(PostItemImageCode);
            var postImageSection = document.querySelector('.section-post');
            var postImageShow = postImageSection.getAttribute('data-show-image');
    
            if (PostImagesPrivate.length > postImageShow) {
                var viewMoreNumber = PostImagesPrivate.length - postImageShow;
                PostImagesPrivate[postImageShow-1].dataset.viewMore = '+' + viewMoreNumber;      
                PostImagesPrivate[postImageShow-1].classList.add('view-more');
                for (let i = postImageShow; i < PostImagesPrivate.length; i++) {
                    PostImagesPrivate[i].style.display = 'none'; 
                }
            }
        }
    }

    for (var j = 0; j < postImages.length; j++) {
        postImages[j].addEventListener('click', function(){
            body.classList.add('open-popup');
            postPopup.classList.add('show');
            var clickImage = this;

            var postImagesParent = clickImage.closest('.post-item');
            console.log(postImagesParent);
            var postImagesChild = postImagesParent.querySelectorAll('.section-images .image-item');
            console.log(postImagesChild);
            var popupSlider = document.querySelector('.post-popup .slider .slider-items');
            popupSlider.innerHTML = '';
            for (let k = 0; k < postImagesChild.length; k++) {
                var postImagesChildHTML = postImagesChild[k].innerHTML;
                console.log(postImagesChildHTML);
                popupSlider.innerHTML += '<li class="slider-item"><div class="inner-slider-item">'+ postImagesChildHTML +'</div></li>'
            }

            var sliderItemPopup = document.querySelectorAll('.slider .slider-item');
            for (var count = 0; clickImage = clickImage.previousElementSibling ; count++) {}
            activeCount = count;
            sliderItemPopup[count].classList.add('active');

            var ItemCurrentCount = activeCount;
            function SlideArrow(arrow){
                var slideItemCurrent = sliderItemPopup[ItemCurrentCount];
                if (arrow == 'next') {
                    ItemCurrentCount = (ItemCurrentCount < (sliderItemPopup.length - 1)) ? (ItemCurrentCount+1) : 0;
                } else {
                    ItemCurrentCount = (ItemCurrentCount > 0) ? (ItemCurrentCount-1) : (sliderItemPopup.length - 1);
                }
                var slideItemNext = sliderItemPopup[ItemCurrentCount];
                slideItemCurrent.classList.remove('active');
                slideItemNext.classList.add('active');       
            }

            sliderNext.addEventListener('click', function(){
                SlideArrow('next');
            });

            sliderPrev.addEventListener('click', function(){
                SlideArrow('prev');
            });

            for (let i = 0; i < sliderItemPopup.length; i++) {
                sliderItemPopup[i].style.paddingLeft = sliderPadding + 'px';
                sliderItemPopup[i].style.paddingRight = sliderPadding + 'px';
            }
        });
    }

    function ClosePopup(ClickButton){
        ClickButton.addEventListener('click', function(){
            body.classList.remove('open-popup');
            postPopup.classList.remove('show');
            let sliderItemsActive = document.querySelector('.slider .slider-item.active');
            sliderItemsActive.classList.remove('active');
        });
    };

    ClosePopup(postPopupCloseBtn);
    ClosePopup(backgroundEffect);
    PostItems();
},false);