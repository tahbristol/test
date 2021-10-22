const video = document.getElementById('video');
const play = document.getElementById('play');
const halt = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// Play & pause video

function toggleVideoStatus() {
  if(video.paused) {
    video.play()
    .then(res => {
      debugger
    })
  } else {
    video.pause();
  }

}

// update the play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
  }



// Update progress & timestamp
function updateProgress() {
  return true;
}

// Set video time to progress
function setVideoProgress() {
  return true;
}

// Stop video
function stopVideo() {
  return true;
}

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

halt.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);




