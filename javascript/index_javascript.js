/**
 *	Created by geusan
 */

function awesomeFunction(){
	document.getElementById("demo").innerHTML ="Hello javascript";
}


/**
 * 버튼을 누르면 드롭다운 메뉴가 나타남
 */
function dropDownMenu() {
	var x = document.getElementById("my_menu_bar");
	if(x.className === "menu_bar"){
		x.className += " responsive";
	} else {
		x.className = "menu_bar";
	}
}