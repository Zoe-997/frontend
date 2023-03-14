document.addEventListener("DOMContentLoaded", function(){
    let html = document.querySelector('html');
    var btn_push = document.querySelector('.button-push'),
        background_effect = document.querySelector('.background-effect');


    btn_push.onclick = function(){
        html.classList.toggle('open-left-menu');
    }

    background_effect.onclick = function(){
        html.classList.remove('open-left-menu');
    }

    
    // var status = 'under300';
    // window.addEventListener('scroll', function(){
    //     console.log(window.pageYOffset);
    //     if (window.pageYOffset > 300) {
    //         if (status == 'under300') {
    //             console.log('under300');
    //             status = 'behind300';
    //         }
            
    //     }
    // })

    var header = document.getElementsByClassName('header');
    var headerHeight = header[0].offsetHeight;
    var headerFixed = document.getElementsByClassName('header-fixed');
    var status = 'larger';
    var sidebar = document.querySelector('.sidebar');
    var sidebarInner = document.querySelector('.inner-sidebar');
    var sidebarPosition = sidebar.offsetTop;
    var sidebarStatus = "behind";
    var scrollEndSpace = 600;
    var scrollEnd = sidebarPosition + scrollEndSpace;

    window.addEventListener('scroll', function(){
        if (window.pageYOffset > headerHeight) {
            if (status == 'larger') {
                headerFixed[0].classList.add('sticky'); 
                header[0].style.minHeight = headerHeight + 'px';
                status = 'smaller';
            }
        } else {
            if (status == 'smaller') {
                headerFixed[0].classList.remove('sticky');        
                status = 'larger';
            }
        }

        if ((window.pageYOffset > sidebarPosition) && (window.pageYOffset < scrollEnd)){
            if (sidebarStatus == 'behind') {
                sidebar.classList.add('sticky');
                sidebarInner.style.top = sidebarPosition;         
                sidebarStatus = 'under';
            }
        } else if ((window.pageYOffset < sidebarPosition) || (window.pageYOffset > scrollEnd)) {
            if (sidebarStatus == 'under') {
                sidebar.classList.remove('sticky');           
                sidebarStatus = 'behind';
            }
        }

    })

    // load
    var loaded = document.querySelector('.load');
    var loadPosition = loaded.offsetTop;
    var statusLoad = 'show';

    window.addEventListener('scroll', function(){
        if (window.pageYOffset > loadPosition) {
            if (statusLoad == 'show' ){
                loaded.classList.add('loaded');
                statusLoad = 'hide';
            }
        } else{
            if (statusLoad == 'hide' ){
                loaded.classList.remove('loaded');
                statusLoad = 'show';
            }    
        }
    })
},false);