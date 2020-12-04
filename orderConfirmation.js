var item_count=0;


var cartCount = document.getElementById("cart_item_count");
var locData = localStorage.getItem("cartData");
if(locData !== null && locData.length > 0){
    var cart_data = JSON.parse(locData);
    for(var i=0; i<cart_data.length; i++){
        item_count += cart_data[i].count;
    }
    cartCount.innerText = item_count;
}

var dropdownWrapper = document.getElementById("menu_dropdown");
var hamburgerIcon = document.getElementById("hamburger_icon");
var menuDropDown = document.getElementById("dropdown_list"); 
var closeIcon = document.getElementById("dropdown_close_icon");

dropdownWrapper.addEventListener('mouseover', function(){
    menuDropDown.style.display = "block";
  })

  dropdownWrapper.addEventListener('mouseout', function(){
    menuDropDown.style.display = "none";
  })

  hamburgerIcon.addEventListener('click', function(){
    menuDropDown.style.display = "block";
  })

  closeIcon.addEventListener('click', function(){
    menuDropDown.style.display = "none";
  })