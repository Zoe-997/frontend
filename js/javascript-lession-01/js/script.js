// console.log("Hello world!");

// var array = 10;
// var array_2 = 20;
// var array_3 = array + array_2;
// console.log(array);
// console.log(array_3);

// var x = 1, y = 2
// var z = 'hello'
// var t = 'world';
// var b = 5
// console.log(z+t);
// var diem = 4

// if (diem < 5) {
//     console.log('dưới trung bình');
// } 
// else if (diem == 5){
//     console.log('trung bình');
// }
// else{
//     console.log('trên trung bình')
// }

// chaythu = function(){
//     b = b + 1;
//     console.log('giá trị của b: ' + (b%5));
// }

// mảng
// var hv1 = 'minh',
//     hv2 = 'hung',
//     hv3 = 'trang'

// var hv = ['minh', 'hung', 'trang'];

// console.log(hv[0]);
// console.log(hv[2]);
// console.log(hv[1]);

// var hv2 = [];
// hv2[0]= 'anh';
// hv2[1]= 'ha';
// hv2[2]= 'giang';

// console.log(hv2[1]);

// var hv3 = new Array('kien', 'thuy', 'huong');
// console.log(hv3[2]);

// đối tượng
// var dongho = {
//     hang: "Casio",
//     mau: "den",
//     gia: "5000",
//     gioitinh: "nam",
//     thoigian: function(){console.log('08/02/2023');}
// }

// console.log(dongho.hang);
// console.log(dongho.gia);
// console.log(dongho.thoigian);

// var hocvien = {
//     ten: 'minh',
//     ho: "trinh",
//     tuoi: "26",
//     chieucao: 160,
//     cannang: 60,
//     tendaydu: function(){ return this.ho + ' ' + this.ten ;},
//     danhgia: function() {
//         if (this.chieucao/this.cannang < 3){ return "can doi"; }
//         else { return "ban hoi map nha"; }
//     }
// }

// console.log(hocvien.tendaydu());
// console.log(hocvien.danhgia());
// console.log('tuoi: '+ hocvien['tuoi']);

// for
// for (let i = 0; i <= 100; i++) {
//     console.log(i);
// }

// var sv = ['minh', 'hung', 'trang', 'huong'];
// console.log('in ra tat ca sinh vien: ');
// console.log(sv[1]);

// for (let t = 0; t < sv.length; t++) {
//     const element = sv[t];
//     console.log(element);
// }

// for in
// var hocvien = {
//     ten: 'minh',
//     tuoi: '26',
//     toan: 9,
//     van: 7,
//     anh: 8
// }

// console.log(hocvien.ten);
// console.log(hocvien['ten']);

// for (const key in hocvien) {
//     console.log(key);
//     console.log(hocvien[key]);
// }

// Use Strict: bật chế độ nghiêm khắc hơn khi khai báo phải có từ khóa var
// "use strict";
// y = 11;
// var x = 10;
// console.log(x);

// số
// var so1 = 10;
// var so2 = 30;
// so2 = so2.toString();

// var chu1 = "10";
// chu1 = Number(chu1);
// console.log(chu1 + 20);

// var chu2 = parseInt(chu1 + 1.2);
// console.log(chu2);

// hàm
// var x1 = 20;
// var x2 = 30;
// var tong = x1 +x2;
// console.log('tong la:' + tong );

// var y1 = 50;
// var y2 = 30;
// var tong2 = y1 +y2;
// console.log('tong 2 la:' + tong2 );

// function Tong(x,y){
//     var Tong = x + y;
//     console.log('Tong la:' + Tong);
// }

// Tong(10,30);
// Tong(10,50);

// function Hello(){
//     var name = "Minh";
//     console.log('Hello ' + name);
// }

// Hello();

// Return
// function tinhtbc(x,y){
//     var z =  (x+y)/2;
//     // console.log(z);
//     return z; //dừng luôn ở câu lệnh return
// }

// if (tinhtbc(10,50)>10){
//     console.log('tbc lon hon 10.');
// }

// console.log(tinhtbc(10,30));

// anonymous function: hàm không tên -> hàm chỉ dùng 1,2 lần => tiết kiệm bộ nhớ
// var z = function (x,y){
//     return (x+y)/2;
// }

// console.log(z(2,7));

// closure function: không gian đóng
// function Hello(){
//     var ten = "Minh";
//     return function(){
//         console.log('Hello '+ ten)
//     }
// }

// var h  = Hello(); // h là 1 hàm
// h();

// function Hello(){
//     var ten = "Minh";
//     var thongbao = function(){
//         console.log('Hello '+ ten );
//     }

//     ten = ten + " Cute";
//     return thongbao;
// }

// var h = Hello();
// h();

// constructor: hàm đối tượng
// var monan = {
//     ten: "thit kho tau",
//     nguyenlieu: "thit lon",
//     gia: 200
// };
// var monan2 = monan;
// monan2.ten = "Cha la not";

// var monan3 = {
//     ten: "Ca ran",
//     nguyenlieu: "ca",
//     gia: 250
// };

// console.log(monan);
// console.log(monan2);
// console.log(monan3);

// Phải khai báo từng cái
// => constructor
// function MonAn (t, nl, g){
//     this.ten = t;
//     this.nguyenlieu = nl;
//     this.gia = g;
// }

// var mon1 = new MonAn('rau xao', 'rau muon', 50);
// var mon2 = new MonAn('ca om dua', 'ca chep', 300);

// console.log(mon1);
// console.log(mon2);

// Khái niệm thường dùng trong javascript
// const:  biến không thể thay đổi trong toàn bộ code (thường viết in hoa toàn bộ)
