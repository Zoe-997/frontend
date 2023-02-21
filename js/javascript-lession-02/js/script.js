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
// class: document.getElementsByClassName("Class")
// id: document.getElementById("Id")
// tag: document.getElementsByTagName("Tag")

// var h3 = document.getElementsByTagName("h3");
// console.log(h3[0]);

// h3[0].innerHTML = '<div><h3>Hello, Minh !</h3></div>';
// h3[0].innerText = 'Hello, Minh !';

for (let i = 0; i < h3.length; i++) {
    h3[i].innerText = 'Hello, Minh !' + i;
    console.log(h3[i]);
}