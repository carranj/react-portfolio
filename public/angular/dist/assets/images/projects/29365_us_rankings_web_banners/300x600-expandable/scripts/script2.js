(function(){


var tl1 = new TimelineLite();
tl1.to('#frame1', 1, {css:{top:"0px", left:"0px", autoAlpha:1},delay:0.15, ease:Power2.easeOut}, "-=.75");
tl1.to('#redbar', 1, {css:{bottom:"0px", right:"0px", autoAlpha:1}, ease:Power2.easeOut}, "0");
tl1.to('#bluebar', 1.5, {css:{bottom:"0px", right:"0px", autoAlpha:1,}, ease:Power2.easeOut}, "-=.75");
tl1.to('#logo', 0.75, {css:{top:"0px", autoAlpha:1}, ease:Power2.easeOut}, "-=.65");
tl1.to('#expandable-bttn', 0.75, {css:{bottom:"0px", autoAlpha:1, right:"130px"}, ease:Power2.easeOut}, "-=.75");
tl1.to('#content-frame1', 0.75, {css:{right:"0px",bottom:"0px", autoAlpha:1}, ease:Power2.easeOut}, "-=.75");
tl1.to('#arrow-expand', 1, {css:{top:"0px", left:"0px", autoAlpha:1}, delay:1.25,ease:Power2.easeOut}, "0");

var tl2 = new TimelineLite({paused:true});

tl2.to('#content-frame1', 0.75, {css:{right:"200px",bottom:"0px", autoAlpha:0}, ease:Power2.easeOut}, "0");
tl2.to('#expandable-content-frame1', 1, {css:{bottom:"0px", right:"0px", autoAlpha:1},delay:0.25, ease:Power2.easeOut}, "-=.75");
tl2.to('#expandable-content-frame1', 1, {css:{bottom:"-200px", right:"0px", autoAlpha:1},delay:2.5, ease:Power2.easeOut}, "-=.75");
tl2.to('#frame2', 0.75, {css:{left:"0px", autoAlpha:1},ease:Power2.easeOut}, "-=.75");

tl2.to('#expandable-content-frame2', 1, {css:{bottom:"0px", right:"0px", autoAlpha:1},delay:0.15, ease:Power2.easeOut}, "-=.75");
tl2.to('#frame1', 1, {css:{top:"0px", left:"0px", autoAlpha:0},delay:0.15, ease:Power2.easeOut}, "-=.75");
tl2.to('#expandable-content-frame2', 1, {css:{bottom:"-200px", right:"0px", autoAlpha:1},delay:2.5, ease:Power2.easeOut}, "-=.75");

tl2.to('#frame3', 0.75, {css:{left:"0px", autoAlpha:1},ease:Power2.easeOut}, "-=.75");
tl2.to('#expandable-content-frame3', 1, {css:{bottom:"0px", right:"0px", autoAlpha:1},delay:0.15, ease:Power2.easeOut}, "-=.75");
tl2.to('#frame3', 1, {css:{top:"0px", left:"0px", autoAlpha:1},delay:0.15, ease:Power2.easeOut}, "-=.75");
tl2.to('#frame2', 1, {css:{top:"0px", left:"0px", autoAlpha:0},delay:0.15, ease:Power2.easeOut}, "-=.75");
    
    var expandBttn = document.getElementById("arrow-expand");
    var closeBttn = document.getElementById("closeBttn");

    ctaButton = document.getElementById("expandable-bttn");
    ctaButton.addEventListener('click',clickthrough);

function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    } else {
        startAd();
    }
}

function startAd() {
    EB.initExpansionParams(0,0,300,600);

    expandBttn.addEventListener('click', expand);
    closeBttn.addEventListener('click', collapse);

    tl1.play();
}


function expand(){
    // Start Frame1
    TweenMax.to('#ad', 0.75, {css:{width:"500px"}, ease:Power2.easeOut}, "-=.75");
    TweenMax.to('#frame1', 0.75, {css:{left:"0px", autoAlpha:1}, ease:Power2.easeOut}, "-=.75");                
    TweenMax.to('#closeBttn', 0.75, {css:{opacity:"1"}, ease:Power2.easeOut}, "-=.75");
    TweenMax.to('#arrow-expand', 0.5, {css:{top:"0px", left:"0px", autoAlpha:0}, ease:Power2.easeOut}, "0");

    tl2.play();

    EB.expand();
}
function collapse(){
    TweenMax.to('#ad', 0.75, {css:{width:"300px"}, ease:Power2.easeOut}, "-=.75");
    TweenMax.to('#frame1', 0.75, {css:{left:"-200px", autoAlpha:1}, ease:Power2.easeOut}, "-=.75");    
    TweenMax.to('#closeBttn', 0.75, {css:{opacity:"0"}, ease:Power2.easeOut}, "-=.75");

    TweenMax.to('#expandable-content-frame1', 1, {css:{bottom:"-200px", autoAlpha:0}, ease:Power2.easeOut}, "-=.75");
    TweenMax.to('#expandable-content-frame2', 1, {css:{bottom:"-200px", autoAlpha:0}, ease:Power2.easeOut}, "-=.75");
    TweenMax.to('#expandable-content-frame3', 1, {css:{bottom:"-200px", autoAlpha:0}, ease:Power2.easeOut}, "-=.75");

    TweenMax.to('#arrow-expand', 0.5, {css:{top:"0px", left:"0px", autoAlpha:1}, ease:Power2.easeOut}, "0");

    tl2.pause();
    tl2.seek(0);

    EB.collapse();
}

function clickthrough() {
console.log("clicked through");
    
    EB.clickthrough();
    
    // for presentation only
    window.open('http://www.google.com');

}

window.addEventListener("load", initEB);


})();

