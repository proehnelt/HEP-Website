


var PRODUCTLIST = new Array();
var SHOPPINGCART = new Array();

var cartTotalAmnt = 0;

var cartTotalPrice = 0;

class product {
    constructor(name, desc, price, imagesrc) {
        this.name = name;
        this.desc = desc;
        this.price = price;
        this.imagesrc = imagesrc; //fix images
    }
}


let p1 = new product('HEP Pencil', 'This is a Higgins Eraser Pencil.', '12.99', '../images/blueHEP1.png');
let p2 = new product('Lead Refils', 'Lead refils for Higgins Eraser Pencil.', '3.99', '../images/redLead.png');
let p3 = new product('Eraser Refils', 'Eraser refils for Higgins Eraser Pencil.', '4.50', '../images/redEraser.png');


PRODUCTLIST.push(p1);
PRODUCTLIST.push(p2);
PRODUCTLIST.push(p3);

var pname = document.getElementsByClassName('name');
var pdesc = document.getElementsByClassName('description');
var pprice = document.getElementsByClassName('price');
var pimg = document.getElementsByClassName('image');
var pimgText = document.getElementById('imageText');


for (let i = 0; i < 3; i++) {
    pname[i].innerHTML = PRODUCTLIST[i].name;
    pdesc[i].innerHTML = PRODUCTLIST[i].desc;
    pprice[i].innerHTML = PRODUCTLIST[i].price;
    pimg[i].src = PRODUCTLIST[i].imagesrc;
    pimgText[i].innerHTML = PRODUCTLIST[i].name;
}




