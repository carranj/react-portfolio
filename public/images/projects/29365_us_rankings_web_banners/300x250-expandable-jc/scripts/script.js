var tl = new TimelineLite();

//Animation 1 -tch logo
tl.to('#frame1', 0.75, {css:{top:"0px", autoAlpha:1}, ease:Power2.easeOut}, "+=0");

//Animation 2 - switch background image
tl.from('#logo', 0.75, {css:{top:"25px", autoAlpha:0}, ease:Power2.easeOut}, "-=.65");


//Animation 4 - Fade in Text
tl.to('#content', 0.75, {css:{top:"0px", autoAlpha:1}, ease:Power2.easeOut}, "-=.75");
tl.to('#cta-button', 0.75, {css:{left:"0px", autoAlpha:1}, ease:Power2.easeOut}, "-=.75");

//Animation 5 - Fade in Text

var adDiv;
var expansionDiv;

function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    } else {
        startAd();
    }
}

function startAd() {
    EB.initExpansionParams(0,0,300,250);
    adDiv = document.getElementById("ad");
    expansionDiv = document.getElementById("ad-expandable");

        expansionButton = document.getElementById("cta-button");
            expansionButton.addEventListener('click',function(){
                // Start Frame1
                TweenMax.to('#ad', .75, {css:{top:"-252px",autoAlpha:0}, ease:Power2.easeOut}, "-=.75");
                TweenMax.to('#ad-expandable', 0.75, {css:{top:"-252px", autoAlpha:1}, ease:Power2.easeOut}, "-=.75");
                TweenMax.to('#redbar', 1, {css:{top:"0px", left:"0px", autoAlpha:1}, ease:Power2.easeOut}, "-=.75");
                TweenMax.to('#bluebar', 1.5, {css:{top:"0px", left:"0px", autoAlpha:1,}, ease:Power2.easeOut}, "-=.75");
                TweenMax.to('#expandable-logo', 1.5, {css:{top:"0px", left:"0px", autoAlpha:1,}, ease:Power2.easeOut}, "-=.75");
                TweenMax.to('#expandable-cta', 1.5, {css:{top:"0px", left:"0px", autoAlpha:1,}, ease:Power2.easeOut}, "-=.75");
                TweenMax.to('#expandable-frame1-content', 1.25, {css:{top:"0px", left:"0px", autoAlpha:1,}, ease:Power2.easeOut,delay:.5}, "+=4.75");                

                // Start Frame 2
                TweenMax.to('#frame2-expandable', 1, {css:{top:"0px", left:"0px", autoAlpha:1}, ease:Power2.easeOut, delay:3.5}, "+=-2.5");
                TweenMax.to('#expandable-frame1-content', 3.25, {css:{top:"150px", left:"0px", autoAlpha:1,}, ease:Power2.easeOut, delay:3.5}, "+=4.75");
                TweenMax.to('#expandable-frame2-content', 1.25, {css:{top:"0px", left:"0px", autoAlpha:1,}, ease:Power2.easeOut,delay:3.5}, "+=4.75");
                
                // Start Frame 3
                TweenMax.to('#frame3-expandable', 1, {css:{top:"0px", left:"0px", autoAlpha:1}, ease:Power2.easeOut, delay:6.5}, "+=2.5");
                TweenMax.to('#expandable-frame2-content', 3.25, {css:{top:"150px", left:"0px", autoAlpha:1,}, ease:Power2.easeOut, delay:7}, "+=4.75");
                TweenMax.to('#expandable-frame3-content', 1.25, {css:{top:"0px", left:"0px", autoAlpha:1,}, ease:Power2.easeOut,delay:7}, "+=4.75");
                console.log('click, click, click');
            });
}

function expand(){
    EB.expand();
}
function collapse(){
    expansionDiv.style.visibility = "hidden";
    expansionDiv.style.display = "none";
    removeClass(adDiv, "expanded");
    setClass(adDiv, "collapsed");
    autoExpanded=false;
    EB.collapse();
}

function handleCloseButtonClick(){
    collapse();
    expStop();
}

function clickthrough() {
    if (video) {
        video.pause();
    }
    EB.clickthrough();
}

function userActionCounter() {
    EB.userActionCounter("CustomInteraction");
}

function centerWebkitVideoControls() {
    document.body.classList.add("ios-center-video-controls");
}

window.addEventListener("load", initEB);