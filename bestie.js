function showMessage() {
      document.getElementById("message").style.display = "block";
    }

    const playButton = document.querySelector(".play-button");
    const audioPlayer = document.getElementById("audioPlayer");

    playButton.addEventListener("click", function(event) {
      event.stopPropagation(); // Prevent clicking parent
      const trackDiv = this.closest(".track");
      const songSrc = trackDiv.getAttribute("data-src");

      if (audioPlayer.src.includes(songSrc)) {
        if (audioPlayer.paused) {
          audioPlayer.play();
        } else {
          audioPlayer.pause();
        }
      } else {
        audioPlayer.src = songSrc;
        audioPlayer.play();
      }
    });
  </script>