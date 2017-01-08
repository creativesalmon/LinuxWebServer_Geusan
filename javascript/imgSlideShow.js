/**
 * Created by dnay2 on 2017-01-02.
 */


/**
 * 이미지 슬라이드 자동으로 사진 바뀜 2초마다 바뀐다
 * @type {number}
 */
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
}

function Slider(element) {
    this.el = document.querySelector(element);
    this.init();
}

Slider.prototype = {
    init:function () {
        this.links = this.el.querySelectorAll("#slider-nav a");
        this.wrapper = this.el.querySelector("#slider-wrapper");
        this.navigate();
    },
    navigate: function () {
        for(var i =0; i <this.links.length; ++i){
            var link = this.links[i];
            this.slide(link);
        }
    },
    animate: function (slide) {
        var parent = slide.parentNode;
        var caption = slide.querySelector(".caption");
        var captions = slide.querySelectorAll(".caption");
        for(var k =0; k<captions.length;++k){
            var cap = captions[k];
            if(cap !== caption){
                cap.classList.remove("visible");
            }
            caption.classList.add("visible");
        }
    },
    slide: function (element) {
        var self = this;
        element.addEventListener("click", function (e) {
            e.preventDefault();
            var a = this;
            self.setCurrentLink(a);
            var index = parseInt(a.getAttribute("data-slide"), 10) +1;
            var currentSlide = self.el.querySelector(".slide:nth-child("+index+")");

            self.wrapper.style.left = "-" + currentSlide.offsetLeft + "px";
            self.animate(currentSlide);
        }, false);
    },
    setCurrentLink: function (link) {
        var parent = link.parentNode;
        var a = parent.querySelectorAll("a");

        link.className = "current";

        for( var j = 0; j<a.length; ++j){
            var cur = a[j];
            if( cur !== link){
                cur.className = "";
            }
        }
    }
};

document.addEventListener("DOMContentLoaded", function () {
    var aSlider = new Slider("#slider");
});
