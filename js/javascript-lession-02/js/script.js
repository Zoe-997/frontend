// trước khi truy xuất phải document ready
// document.addEventListener('DOMContentLoaded', function(){
//     var btn_1 = document.getElementById('toggle-tab');
//     var btn_hu = document.getElementById('btn-hu');
//     var wrapper = document.getElementsByClassName('card');
//     var status = 'lần 1';

//     btn_1.onclick = function(){
//         wrapper[0].classList.toggle('active');
//     }

//     btn_hu.onclick = function(){
//         if (status == 'lần 1') {
//             console.log('Click nút hiệu ứng ' +  status);
//             status = 'lần 2';
//             wrapper[0].classList.remove('chieu2');
//             wrapper[0].classList.add('chieu1');
//         } else if (status == 'lần 2') {
//             console.log('Click nút hiệu ứng ' + status);
//             status = 'lần 1';
//             wrapper[0].classList.remove('chieu1');
//             wrapper[0].classList.add('chieu2');
//         }
//     }
// }, false);

// facebook effect
// document.addEventListener('DOMContentLoaded', function(){
//     var ToggleTab = document.getElementsByClassName('toggle-tab');
//     var ToggleTabClick = ToggleTab[0];
//     var ToggleContent = document.getElementsByClassName('toggle-content');
//     var List = ToggleContent[0];

//     ToggleTabClick.onclick = function(){
//         this.classList.toggle('visible');
//         List.classList.toggle('visible');
//     }
// },false );

// Hiệu úng tổng quát
// document.addEventListener('DOMContentLoaded', function(){
//     var ToggleTab = document.getElementsByClassName('toggle-tab');
//     var ToggleContent = document.getElementsByClassName('toggle-content');

//     for (let i = 0; i < ToggleTab.length; i++) {
//         ToggleTab[i].onclick = function(){
//             var Name = this.getAttribute('data-name');
//             var Index = this.getAttribute('data-index');
//             console.log(Name);
//             console.log(Index);
//             this.classList.toggle('visible');
//             ToggleContent[i].classList.toggle('visible');
//         }
//     }
// },false );


document.addEventListener('DOMContentLoaded', function(){
    var ToggleTab = document.getElementsByClassName('toggle-tab');
    var ToggleContentList = document.getElementsByClassName('toggle-content');

    for (let i = 0; i < ToggleTab.length; i++) {
        ToggleTab[i].onclick = function(){
            if (this.classList[1] == 'visible') {
                this.classList.remove('visible');
                var ContentName = this.getAttribute('data-name');
                var ToggleContent = document.getElementById(ContentName);
                ToggleContent.classList.remove('visible');
            } else {
                for (let j = 0; j < ToggleTab.length; j++) {
                    ToggleTab[j].classList.remove('visible');
                }
                for (let t = 0; t < ToggleContentList.length; t++) {
                    ToggleContentList[t].classList.remove('visible');
                    
                }
                this.classList.toggle('visible');
                var ContentName = this.getAttribute('data-name');
                var ToggleContent = document.getElementById(ContentName);
                ToggleContent.classList.toggle('visible');
            }
        }
    }
},false );
