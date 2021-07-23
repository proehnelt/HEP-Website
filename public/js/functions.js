document.getElementById("defaultOpen").click();

var INDEX;






//------------------------------- Opens each tab based on id name ---------------------------------------------
function openTab(evt, cityName) 
{
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) 
    {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) 
    {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    if(cityName == 'Products')
    {
      displayProducts();
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}






//------------------------------- Image Slide Show on Home Tab ---------------------------------------------
function displayProducts()
{
  var pname = document.getElementsByClassName("name");
  var price = document.getElementsByClassName("price");
  var desc = document.getElementsByClassName("description");
  var pimg = document.getElementsByClassName('image');
  var imgtxt = document.getElementsByClassName('imageTxt');

  for(let j = 0; j < 3; j++)
  {
    pname[j].innerHTML = PRODUCTLIST[j].name;
    desc[j].innerHTML = PRODUCTLIST[j].desc;
    price[j].innerHTML = PRODUCTLIST[j].price;
    pimg[j].src = PRODUCTLIST[j].imagesrc;
    imgtxt[j].innerHTML = PRODUCTLIST[j].name;
  }
}


  
//------------------------------- Image Slide Show on Home Tab ---------------------------------------------
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}





//------------------------ Closes Login modal when user clicks outside modal ---------------------------------------------
var loginmodal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) 
{
  if (event.target == loginmodal) {
    loginmodal.style.display = "none";
  }
}



//------------------------ Closes Product Page modal when user clicks outside modal ---------------------------------------------
var productmodal = document.getElementById('productPage');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) 
{
  if (event.target == productmodal) {
    productmodal.style.display = "none";
  }
}







//------------------------ Opens and Closes Modals  ---------------------------------------------
function closeModal()
{
  var modal = document.getElementsByClassName('productmodal');
  modal[0].style.display = 'none';
}
function openModal()
{
  var modal = document.getElementsByClassName('productmodal');
  modal[0].style.display = 'block';
}




//------------------------ Adds product to cart  ---------------------------------------------
          //      Accesses product info by using class names
          //      Inserted into dynamic table in shopping cart tab
function addToCart()
{
  var idx = document.getElementById('product-index').innerHTML;
  SHOPPINGCART.push(PRODUCTLIST[idx]);

  var cartTotal = document.getElementById('cartTotal');        
  cartTotal.innerHTML = SHOPPINGCART.length;



  var table = document.getElementById("myTable");

  var name = document.getElementById('product-name');
  var desc = document.getElementById('product-desc');
  var price = document.getElementById('product-price').innerHTML;
  
  var rowCount = table.rows.length;

  var row = table.insertRow(rowCount);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);

  var pimg = document.createElement('img');
  pimg = document.getElementById('product-image');

  cell1.innerHTML = '<img src=' + pimg.src + ' width="150" height="150" />';
  cell2.innerHTML = name.innerHTML;
  cell3.innerHTML = desc.innerHTML;
  cell4.innerHTML = '$' + price;
  cell5.innerHTML = "<button type='button' onclick='removeCartProduct(" + rowCount + "," + idx + ");' id='deleteCartBtn'><img src='../images/deleteIcon.png' width='20' height='20'>";

  // Calculating Cart Total Price
  cartTotalPrice = Number(cartTotalPrice) + Number(price);
  document.getElementById('totalPrice').innerHTML = '$' + cartTotalPrice.toFixed(2);

  //Calculating Sales Tax
  // var percent = 0.0625
  // var tax = document.getElementById('salestax');
  // var taxNum = Number(price) * percent;
  // tax.innerHTML = 'Sales Tax (6.25%):  $' + taxNum.toFixed(2);

  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  setTimeout(function() { popup.classList.toggle("show"); }, 1500);
  
  closeModal();
}






//------------------------ Removes Product from Cart ---------------------------------------------
//            - Doesn't work fully
//            - Won't delete correctly if products are deleted from bottom to top
function removeCartProduct(rowIndx, cartIndx)
{
  var table = document.getElementById('myTable');

  var price = table.rows[rowIndx].cells[3].innerHTML;
  price = price.substring(1, price.length);
  cartTotalPrice = Number(cartTotalPrice) - Number(price);
  document.getElementById('totalPrice').innerHTML = '$' + cartTotalPrice.toFixed(2);

  table.deleteRow(rowIndx);

  var prod = SHOPPINGCART[cartIndx];
  SHOPPINGCART.splice(cartIndx, 1);

  var cartTotal = document.getElementById('cartTotal');
  cartTotal.innerHTML = SHOPPINGCART.length;

}






//------------------------ Opens productPage modal ---------------------------------------------
          //      Updates modal elements to display correct product info
          //      Currently not displaying description
          //      Modal will not open again once a product has been viewed and closed
function viewProduct(indx)
{
  openModal();

  var n = document.getElementById('product-name');
  var d = document.getElementById('product-desc');
  var p = document.getElementById('product-price');
  var i = document.getElementById('product-image');
  var idx = document.getElementById('product-index');

  n.innerHTML = PRODUCTLIST[indx].name;
  d.innerHTML = PRODUCTLIST[indx].desc;
  p.innerHTML = PRODUCTLIST[indx].price;
  i.src = PRODUCTLIST[indx].imagesrc;
  idx.innerHTML = indx;
}




//------------------------ Admin Login Function ---------------------------------------------
          //      Checks username and password
          //      Displays product page editing ability
function attemptLogin()
{
  var username = document.getElementById('uname').value;
  var password = document.getElementById('psw').value;

  // Checks for correct admin login info
  if (username == "admin" && password == "123")
  {
    document.getElementById('id01').style.display = 'none';
    document.getElementById('loginbtn').style.display = 'none';


    var accnt = document.getElementById('accntbtn');
    accnt.style.display = 'block';
    accnt.innerHTML = username;
    document.getElementById('accntbtn').innerHTML = username;
    accnt.style.background = "#FEDA81";
    var uname = document.getElementsByClassName('accntName');
    uname[0].innerHTML = username;
  
    var mids = document.getElementsByClassName('middle1');
    mids[0].style.display='block';
    for (var key in mids) {
      mids[key].style.display='block';
    }
  }
  else
  {
    window.alert('wrong password');
  }
}




//------------------------ Disable Admin Function ---------------------------------------------
        //      Checks username and password
        //      Displays product page editing ability
function disableAdmin()
{
  var accntModal = document.getElementById('accntModal');
  accntModal.style.display = 'none';

  var loginBtn = document.getElementById('loginbtn');
  loginBtn.style.display = 'block';

  var accntBtn = document.getElementById('accntbtn');
  accntBtn.style.display = 'none';

  var mids = document.getElementsByClassName('middle1');
  for (var key in mids) {
    mids[key].style.display='none';
  }
}






//------------------------ Display Admin Elements/Functions ---------------------------------------------
function displayAdminElem()
{
  document.getElementById('loginbtn').style.display = 'none';

  var accnt = document.getElementById('accntbtn');
  accnt.style.display = 'block';
  accnt.innerHTML = username;
  document.getElementById('accntbtn').innerHTML = username;

  var mids = document.getElementsByClassName('middle1');
  mids[0].style.display='block';
  for (var key in mids) {
    mids[key].style.display='block';
  }
}






//------------------------ Admin- Opens Edit Product Function ---------------------------------------------
function openEditProduct(indx)
{
  closeModal();
  var editProduct = document.getElementById('editProductPage');
  editProduct.style.display = 'block';
  INDEX = indx;
}




//------------------------ Admin- Saves Product Changes ---------------------------------------------
function saveProductChanges()
{
  writeFile();

  var n = document.getElementById('pname');
  var d = document.getElementById('pdesc');
  var p = document.getElementById('pprice');
  var i = document.getElementsByClassName('previewImg');

  if (n.value != '')
  {
    PRODUCTLIST[INDEX].name = n.value;
  }
  if (d.value != '')
  {
    PRODUCTLIST[INDEX].desc = d.value;
  }
  if (p.value != '')
  {
    PRODUCTLIST[INDEX].price = p.value;
  }
  // if (i[0].src != '')
  // {
  //   PRODUCTLIST[INDEX].imagesrc = i[0].src;
  // }

  displayProducts();

    // Close Modal
  var editmodal = document.getElementById('editProductPage');
  editmodal.style.display = 'none';

  document.getElementById('pname').value = '';
  document.getElementById('pdesc').value = '';
  document.getElementById('pprice').value = '';
  var previmg = document.getElementsByClassName('previewImg');
  previmg[0].src = '';
 
 // editmodal.reset();

}




//------------------------ Admin- Loads New Product Image File ---------------------------------------------
function loadFile(event)
{
  var img = document.getElementsByClassName('previewImg');
  img[0].src = URL.createObjectURL(event.target.files[0]);
}

