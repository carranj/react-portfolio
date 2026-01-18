var tl = new TimelineLite();

//Animation 1 -tch logo
tl.to('#frame1', 0.75, {css:{top:"0px", autoAlpha:1}, ease:Power2.easeOut}, "+=0");

//Animation 2 - switch background image
tl.from('#logo', 0.75, {css:{top:"25px", autoAlpha:0}, ease:Power2.easeOut}, "-=.65");

//Animation 3 - Fade in Text
tl.to('#blue-bar', 0.75, {css:{top:"0px", autoAlpha:1}, ease:Power2.easeOut}, "-=.75");
tl.to('#red-bar', 1.75, {css:{top:"0px", autoAlpha:1}, ease:Power2.easeOut}, "-=.75");
tl.to('#content', 0.75, {css:{top:"0px", autoAlpha:1}, ease:Power2.easeOut, delay:.15}, "-=.75");
tl.to('#watch-video', 0.75, {css:{top:"0px", autoAlpha:1}, ease:Power2.easeOut}, "-=.65");
tl.to('#cta-button', 0.75, {css:{right:"0px", autoAlpha:1}, ease:Power2.easeOut}, "-=.65");


var adDiv;
var videoContainer;
var video;
var sdkVideoPlayer;
var sdkVideoPlayButton;
var isIOS = (/iPhone|iPad|iPod/i).test(navigator.userAgent);
var expansionDiv;

function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    } else {
        startAd();
    }
}

function startAd() {
    EB.initExpansionParams(0,0,728,315);
    adDiv = document.getElementById("ad");
    videoContainer = document.getElementById("video-container");
    video = document.getElementById("video");
    sdkVideoPlayer = document.getElementById("sdk-video-player");
    sdkVideoPlayButton = document.getElementById("sdk-video-play-button");
    expansionDiv = document.getElementById("ad-expandable");
    expansionButton = document.getElementById("watch-video");
    expansionButton.addEventListener('click',expand);

    closeBttn = document.getElementById("closeBttn");
    closeBttn.addEventListener('click',collapse);

    bannerExpandable = document.getElementById("banner-expandable");
    bannerExpandable.addEventListener('click',clickthrough);

    ctaButton = document.getElementById("cta-button");
    ctaButton.addEventListener('click',clickthrough);


    initVideo();

    if (isIOS) {
        centerWebkitVideoControls();
    }
}

function expand(){
    TweenMax.to('#ad', .75, {css:{top:"-633px",autoAlpha:0}, ease:Power2.easeOut}, "-=.75");
    TweenMax.to('#ad-expandable', 0.75, {css:{top:"-603px", autoAlpha:1}, ease:Power2.easeOut}, "-=.75");
    TweenMax.to('video', 0.75, {css:{autoAlpha:1}, ease:Power2.easeOut}, "-=.85");

    video.play();
    EB.expand();
}

function collapse(){
    TweenMax.to('#ad', .75, {css:{top:"0px",autoAlpha:1}, ease:Power2.easeOut}, "-=.75");
    TweenMax.to('#ad-expandable', 0.75, {css:{top:"-633px", autoAlpha:0}, ease:Power2.easeOut}, "-=.75");
    TweenMax.to('video', 0.75, {css:{autoAlpha:0}, ease:Power2.easeOut}, "-=.85");

    video.pause();
    video.currentTime = 0;
    EB.collapse();
}

function initVideo() {
    var sdkData = EB.getSDKData();
    var useSDKVideoPlayer = false;
    var sdkPlayerVideoFormat = "mp4"; // or use "webm" for the webm format

    if (sdkData !== null) {
        if (sdkData.SDKType === "MRAID" && sdkData.version > 1) {
            document.body.classList.add("sdk");

            // set sdk to use custom close button
            EB.setExpandProperties({
                useCustomClose: true
            });

            var sourceTags = video.getElementsByTagName("source");
            var videoSource = "";

            for (var i = 0; i < sourceTags.length; i++) {
                if (sourceTags[i].getAttribute("type")) {
                    if (sourceTags[i].getAttribute("type").toLowerCase() === "video/" + sdkPlayerVideoFormat) {
                        videoSource = sourceTags[i].getAttribute("src");
                    }
                }
            }

            videoContainer.removeChild(video);
            video = null;

            sdkVideoPlayButton.addEventListener("click", function() {
                if (videoSource !== "") {
                    EB.playVideoOnNativePlayer(videoSource);
                }
            });

            useSDKVideoPlayer = false;
        }
    }

    if (!useSDKVideoPlayer) {
        videoContainer.removeChild(sdkVideoPlayer);
        var videoTrackingModule = new EBG.VideoModule(video);
    }

    videoContainer.style.visibility = "visible";
}

function clickthrough() {
console.log("clicked through");
    if (video) {
        video.pause();
    }
    EB.clickthrough();
    
    // for presentation only
    window.open('http://www.google.com');

}


function centerWebkitVideoControls() {
    document.body.classList.add("ios-center-video-controls");
}

window.addEventListener("load", initEB);
