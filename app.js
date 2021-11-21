
$(window).scroll(function() {
    $('.video').each(function() {
        if ($(this).visible(true)) {
            $(this)[0].play();
        } else {
            $(this)[0].pause();
        }
    })
});

var i = 0;
var txt = 'The WebMasters'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("heading").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function checkGroupMembers() {
var no_of_member=parseInt(document.getElementById("groupmem").value);
// console.log(typeof no_of_member);
if (no_of_member==1){
  var GrpM1=document.getElementById("Member1")
  GrpM1.style.visibility="visible";
  var GrpM2=document.getElementById("Member2")
  GrpM2.style.visibility="hidden";
}
else if (no_of_member==2){
  var GrpM1=document.getElementById("Member1")
  GrpM1.style.visibility="visible";


  var GrpM2=document.getElementById("Member2")
  GrpM2.style.visibility="visible";
}else{
  var GrpM1=document.getElementById("Member1")
  GrpM1.style.visibility="hidden";

  var GrpM2=document.getElementById("Member2")
  GrpM2.style.visibility="hidden";
}
}


function playPauseVideo() {
  let videos = document.querySelectorAll("video");
  videos.forEach((video) => {
      // We can only control playback without insteraction if video is mute
      video.muted = true;
      // Play is a promise so we need to check we have it
      let playPromise = video.play();
      if (playPromise !== undefined) {
          playPromise.then((_) => {
              let observer = new IntersectionObserver(
                  (entries) => {
                      entries.forEach((entry) => {
                          if (
                              entry.intersectionRatio !== 1 &&
                              !video.paused
                          ) {
                              video.pause();
                          } else if (video.paused) {
                              video.play();
                          }
                      });
                  },
                  { threshold: 0.2 }
              );
              observer.observe(video);
          });
      }
  });
}

