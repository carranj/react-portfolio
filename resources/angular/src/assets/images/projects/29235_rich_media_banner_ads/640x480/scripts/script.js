var tl = new TimelineLite();

//Animation 1 -tch logo
tl.from('#frame1', 0.75, {
    css: {
        top: "0px",
        autoAlpha: 0
    },
    ease: Power2.easeOut
});
tl.from('#logo', 0.9, {
    css: {
        top: "-187px",
        autoAlpha: 0
    },
    ease: Power2.easeOut
}, "-=.75");

//Animation 2 - switch background image
tl.to('#frame3', 0.75, {
    css: {
        left: "0px",
        autoAlpha: 1
    },
    ease: Power2.easeOut
}, "+=1.85");

//Animation 3 - red and blue bars
tl.to('#blue-bar', 0.9, {
    css: {
        left: "0px",
        autoAlpha: 1
    },
    ease: Power2.easeOut
}, "-=.35");
tl.to('#red-bar', 0.9, {
    css: {
        left: "0px",
        autoAlpha: 1
    },
    ease: Power2.easeOut
}, "-=.55");

//Animation 4 - Fade in Text
tl.to('#content', 0.75, {
    css: {
        autoAlpha: 1
    },
    ease: Power2.easeOut
}, "-=.25");
tl.to('#cta-button', 0.75, {
    css: {
        autoAlpha: 1
    },
    ease: Power2.easeOut
}, "-=.75");


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
