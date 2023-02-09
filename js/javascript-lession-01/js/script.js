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
var dongho = {
    hang: "Casio",
    mau: "den",
    gia: "5000",
    gioitinh: "nam",
    thoigian: function(){console.log('08/02/2023');}
}

console.log(dongho.hang);
console.log(dongho.gia);
console.log(dongho.thoigian);

var hocvien = {
    ten: 'minh',
    ho: "trinh",
    tuoi: "26",
    chieucao: 160,
    cannang: 60,
    tendaydu: function(){ return this.ho + ' ' + this.ten ;},
    danhgia: function() {
        if (this.chieucao/this.cannang < 3){ return "can doi"; }
        else { return "ban hoi map nha"; }
    }
}

console.log(hocvien.tendaydu());
console.log(hocvien.danhgia());
console.log('tuoi: '+ hocvien['tuoi']);