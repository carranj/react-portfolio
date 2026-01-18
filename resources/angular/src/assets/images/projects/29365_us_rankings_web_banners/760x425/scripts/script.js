var tl = new TimelineLite();

//Animation 1 -tch logo
tl.from('#logo', 0.75, {css:{top:"-187px", autoAlpha:0}, ease:Power2.easeOut});

//Animation 2 - switch background image
tl.to('#frame3', 0.75, {css:{left:"0px", autoAlpha:1}, ease:Power2.easeOut}, "-=.75");

//Animation 3 - red and blue bars
tl.to('#red-bar', 0.75, {css:{left:"0px", autoAlpha:1}, ease:Power2.easeOut}, "=0");
tl.to('#blue-bar', 0.75, {css:{left:"0px", autoAlpha:1}, ease:Power2.easeOut}, "-=0.75");


//Animation 4 - Fade in Text
tl.to('#content', 0.75, {css:{autoAlpha:1}, ease:Power2.easeOut}, "-=.25");
tl.to('#cta-button', 0.75, {css:{autoAlpha:1}, ease:Power2.easeOut}, "-=.75");

tl.to('#content', 0.75, {css:{autoAlpha:0},delay:2, ease:Power2.easeOut}, "-=.25");
tl.to('#content2', 0.75, {css:{autoAlpha:1}, ease:Power2.easeOut}, "-=.25");

var adDiv;

function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    } else {
        startAd();
    }
}

function startAd() {
    adDiv = document.getElementById("ad");

    addEventListeners();
}

function addEventListeners() {
    document.getElementById("clickthrough-button").addEventListener("click", clickthrough);
}

function clickthrough() {
    EB.clickthrough();
}

function userActionCounter() {
    EB.userActionCounter("CustomInteraction");
}

window.addEventListener("load", initEB);
