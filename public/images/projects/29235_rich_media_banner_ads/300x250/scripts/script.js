var tl = new TimelineLite();

//Animation 1 -tch logo
tl.to('#frame1', 0.75, {
    css: {
        top: "0px",
        autoAlpha: 1
    },
    ease: Power2.easeOut
}, "+=0");
tl.to('#red-bar', 0.75, {
    css: {
        top: "0px",
        autoAlpha: 1
    },
    ease: Power2.easeOut
}, "-=.65");

//Animation 2 - switch background image
tl.from('#logo', 0.75, {
    css: {
        top: "25px",
        autoAlpha: 0
    },
    ease: Power2.easeOut
});


//Animation 4 - Fade in Text
tl.to('#content', 0.75, {
    css: {
        left: "0px",
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
var videoContainer;
var video;
var videoClose;
var myVidButton;
var sdkVideoPlayer;
var sdkVideoPlayButton;
var ctaButton;
var isIOS = (/iPhone|iPad|iPod/i).test(navigator.userAgent);

function initEB() {
    if (!EB.isInitialized()) {
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    } else {
        startAd();
    }
}

function startAd() {
    adDiv = document.getElementById("ad");
    videoContainer = document.getElementById("video-container");
    video = document.getElementById("video");
    sdkVideoPlayer = document.getElementById("sdk-video-player");
    sdkVideoPlayButton = document.getElementById("sdk-video-play-button");
    myVidButton = document.getElementById("logo");
    videoClose = document.getElementById("close");
    ctaButton = document.getElementById("cta-button")
    addEventListeners();
    initVideo();


    if (isIOS) {
        centerWebkitVideoControls();
    }
}


function addEventListeners() {
    ctaButton.addEventListener("click", clickthrough);

    myVidButton.addEventListener("click", function() {
        videoContainer.style.display = "block";
        video.play();
        console.log("playvid");
    });

    videoClose.addEventListener("click", hideVid);

    video.addEventListener("ended", function() {
        setTimeout(function() {
            hideVid();
        }, 3000);
    });
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
                useCustomClose: false
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

    //videoContainer.style.visibility = "hidden";
}

function clickthrough() {
    if (video) {
        video.pause();
    }
    EB.clickthrough();

}

function hideVid() {
    videoContainer.style.display = "none";
    video.pause();
    video.currentTime = 0
}

// function userActionCounter() {
//     EB.userActionCounter("CustomInteraction");
// }

function centerWebkitVideoControls() {
    document.body.classList.add("ios-center-video-controls");
}

window.addEventListener("load", initEB);
