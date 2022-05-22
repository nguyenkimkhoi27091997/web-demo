
// Menu 
var menuItems = document.querySelector('#menu-items')
var menuIcon = document.querySelector('.menu-icon')

menuItems.style.maxHeight = "0px"

menuIcon.onclick = function() {

    if(menuItems.style.maxHeight === "0px") {
        menuItems.style.maxHeight = "200px"
    } else {
        menuItems.style.maxHeight = "0px"
    }
}