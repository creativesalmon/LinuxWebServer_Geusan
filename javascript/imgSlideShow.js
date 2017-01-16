/**
 * Created by dnay2 on 2017-01-02.
 */

/**
 * 미리 준비 해둔 json 코드 파싱
 * @type {XMLHttpRequest}
 */
var myIndex = 0;

var req = new XMLHttpRequest();
req.open("GET", "basicDatas/jsons/home_images_list.json");
req.onreadystatechange = function () {
    if (this.readyState == 4) {
        console.log(this.response);
        var slider_wrapper = document.getElementById("slider-wrapper");
        var data = JSON.parse(this.response);
        for (var i = 0; i < data.length; i++) {
            var div = document.getElementById("intro").children[0];
            var img = document.createElement("img");
            img.setAttribute("class", "mySlides");
            img.style.width = "100%";
            img.src = data[i];
            div.appendChild(img);


            //slider
            var slide = document.createElement("div");
            var slide_img = document.createElement("img");
            var caption = document.createElement("p");

            caption.setAttribute("class", "caption");
            caption.innerHTML = "caption" + (i + 1);

            slide.setAttribute("class", "slide");

            slide_img.src = data[i];
            slide_img.alt = "";

            slide.appendChild(slide_img);
            slide.appendChild(caption);
            slider_wrapper.appendChild(slide);

            //slide-navigator
            var slider_nav = document.getElementById("slider-nav");
            var nav_item = document.createElement("a");
            nav_item.setAttribute("href", "#");
            nav_item.setAttribute("data-slide", "" + i);
            nav_item.style.color = "#ffffff";
            nav_item.innerHTML = "" + (i + 1);
            slider_nav.appendChild(nav_item);


        }
        carousel();
        createSlider();
    }
};
req.send();

/**
 * 이미지 슬라이드 자동으로 사진 바뀜 2초마다 바뀐다
 * @type {number}
 */
function carousel() {

    var x = document.getElementsByClassName("mySlides");
    // var y = document.getElementById("slider-wrapper").children;
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        // y[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1;
    }
    x[myIndex - 1].style.display = "block";
    // y[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
}


/**
 * 이미지 슬라이더를 만드는 곳
 * @param element
 * @constructor
 */

function Slider(element) {
    this.el = document.getElementById(element);
    this.init();
}

Slider.prototype = {
    init: function () {
        this.links = document.getElementById("slider-nav").children;
        this.wrapper = document.getElementById("slider-wrapper");
        this.navigate();
    },
    navigate: function () {
        for (var i = 0; i < this.links.length; ++i) {
            var link = this.links[i];
            this.slide(link);
        }
    },
    slide: function (element) {
        var self = this;
        element.addEventListener("click", function (e) {
            e.preventDefault();
            var a = this;
            self.setCurrentLink(a);
            var index = parseInt(a.getAttribute("data-slide"), 10) + 1;
            var currentSlide = self.el.querySelector(".slide:nth-child(" + index + ")");

            self.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
            self.animate(currentSlide);
        }, false);
    },
    setCurrentLink: function (link) {
        var parent = link.parentNode;
        var a = parent.childNodes;

        link.className = "current";

        for (var j = 0; j < a.length; ++j) {
            var cur = a[j];
            if (cur !== link) {
                cur.className = "";
            }
        }
    },
    animate: function (slide) {
        var parent = slide.parentNode;
        var caption = slide.querySelector(".caption");
        var captions = slide.querySelectorAll(".caption");
        for (var k = 0; k < captions.length; ++k) {
            var cap = captions[k];
            if (cap !== caption) {
                cap.classList.remove("visible");
            }
            caption.classList.add("visible");
        }
        //일정시간 후에 지워짐
        setTimeout(function () {
            caption.classList.remove("visible");
        },1000);
    }
};

function createSlider() {
    var aSlider = new Slider("slider");
}

// document.addEventListener("DOMContentLoaded", function () {
//     var aSlider = new Slider("#slider");
// });
//
