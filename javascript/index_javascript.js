/**
 *    Created by geusan
 */

/**
 * 버튼을 누르면 드롭다운 메뉴가 나타남
 */
function dropDownMenu() {
    var x = document.getElementById("my_menu_bar");
    if (x.className === "menu_bar") {
        x.className += " responsive";
    } else {
        x.className = "menu_bar";
    }
}

function selectNavItem(item) {
    document.getElementById("my_menu_bar").className = "menu_bar";

    switch( item.getAttribute("id")){
        case "btn_intro":
            window.scroll(0, getOffsetTop(document.getElementById("intro")));
            break;
        case "btn_first":
            window.scroll(0, getOffsetTop(document.getElementById("section1")));
            break;
        case "btn_second":
            window.scroll(0, getOffsetTop(document.getElementById("section2")));
            break;
        case "btn_third":
            window.scroll(0, getOffsetTop(document.getElementById("section3")));
            break;
    }
}

/**
 * 버튼을 클릭하면 스크롤 애니메이션으로 이동하고
 * 메뉴바는 처음으로 돌아오는 애니메이션
 */
// function getOffsetTop(el) {
//     var top = 0;
//     if(el.offsetParent){
//         do{
//             top+= 1;
//         } while(el = el.offsetParent);
//         return [top];
//     }
// }
// window.scroll(0, getOffsetTop(document.getElementById("third")));


/**
 * 스크롤을 내리면 네비게이션 바가 위에 고정
 * 스크롤을 맨위로 올리면 네비게이션바가 맨위에 위치
 * @type {number}
 */
var scrolly= 0;
function scrolldown(){
    if(scrollY <= 0){
        document.getElementById("topnav").style.position = "relative";
    } else {
        document.getElementById("topnav").style.position = "fixed";
    }
    //document.getElementById("first").innerHTML = scrollY;
}

/**
 * horizontal slider
 */
function getLeft(){
    var left = document.getElementById("").style.left;
    return Number(left.substr(0, left.length - 2));
}

