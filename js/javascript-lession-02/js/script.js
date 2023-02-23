// var dl = [
//     {
//         id: 1,
//         image: "image1",
//         name: "Minh",
//         content: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit."
//     },
//     {
//         id: 2,
//         image: "image2",
//         name: "Ha",
//         content: "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//     }
// ];

// console.log(dl);
// console.log(dl[0].name);
// console.log(dl[0].content);

// for (var i = 0; i < dl.length; i++) {
//     var ContentElement = `<div class="card" id="card-${dl[i].id}"><div class="card-body"><h3 class="card-title">${dl[i].name}</h3><p class="card-text">${dl[i].content}</p></div></div>`;
//     console.log(ContentElement);
// }

// truy xuất dữ liệu
// class: document.getElementsByClassName("[Class]")
// id: document.getElementById("[Id]")
// tag: document.getElementsByTagName("[Tag]")
// selector: document.querySelector("[data as CSS]")
// selector: document.querySelectorAll("[data as CSS]")

// var h3 = document.getElementsByTagName("h3");
// console.log(h3[0]);

// h3[0].innerHTML = '<div><h3>Hello, Minh !</h3></div>';
// h3[0].innerText = 'Hello, Minh !';

// for (let i = 0; i < h3.length; i++) {
//     h3[i].innerText = 'Hello, Minh !' + i;
//     console.log(h3[i]);
// }


// vòng lặp
// var title = document.getElementsByTagName('h3');
// console.log(title);

// for (let i = 0; i < title.length; i++) {
//     title[i].innerHTML = 'Hello, Minh!' + 'time ' + i;
// }

// document.getElementById('[id]')
// var element = document.getElementById('card-1');
// console.log(element);

// document.getElementsByClassName('[class]') -> trả về mảng -> thay đổi từng phần tử trong mảng
// var element = document.getElementsByClassName('card-title');
// console.log(element);
// for (let i = 0; i < element.length; i++) {
//     element[i].innerHTML = 'Title have changed'
// }

// document.querySelector("[data as CSS]" &  document.querySelector("[data as CSS]"
// var element = document.querySelector('.card-title');
// console.log(element);

// var element_all = document.querySelectorAll('.card-title');
// console.log(element_all);
// console.log(element_all[1]);
// for (let i = 0; i < element_all.length; i++) {
//     console.log(element_all[i]);

//     if (i == 2){
//         element_all[i].innerHTML = 'Title has selected';
//     }
// }

// var element_id = document.querySelectorAll('#card-1');
// console.log(element_id);

// var element_data = document.querySelectorAll('[data-note]');
// console.log(element_data);

// classList.remove('[class]')
// classList.add('[class]')
// classList.toggle('[class]')
// var element = document.querySelectorAll('.card .action');
// console.log(element);
// element[0].classList.remove('action');
// element[0].classList.add('btn');

// element[1].classList.toggle('change-class');

// xử lý sự kiện
// document.addEventListener('DOMContentLoaded', function(){
//     var x1 = document.querySelectorAll('.action');
//     x1[0].onclick = function(){
//         x1[0].classList.toggle('btn');
//     }
// }, false)