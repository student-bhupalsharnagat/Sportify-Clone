console.log("Welcome to sportify ");
// intialize the variables
let songIndex = 0;
let audioElement = new Audio("Songs/brazil.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myprogressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  {
    songName: "Bazil",
    filepath: "Songs/brazil.mp3",
    coverpath: "Covers/brazil song.jpg",
  },
  {
    songName: "Dard Dilon ",
    filepath: "Songs/dard dilo ke kam.mp3",
    coverpath: "Covers/dard dilo ke img.jpg",
  },
  {
    songName: "Hawayein",
    filepath: "Songs/Hawayein song.mp3",
    coverpath: "Covers/hawayein song img.jpg",
  },
  {
    songName: "Tum Hi Aana",
    filepath: "Songs/tum hi aana song.mp3",
    coverpath: "Covers/tum hi aana song img.jpg",
  },
  {
    songName: "Khairiyat",
    filepath: "Songs/khariyat.mp3",
    coverpath: "Covers/khariyat img .jpg",
  },
  {
    songName: "Main Phir Bhi ",
    filepath: "Songs/mai phir tumko.mp3",
    coverpath: "Covers/mai phir bhi img.jpg",
  },
  {
    songName: "Chaar Din",
    filepath: "Songs/Chaar Din.mp3",
    coverpath: "Covers/Chaar din song img.jpg",
  },

  {
    songName: "Tum Hi Ho",
    filepath: "Songs/Tum Hi Ho.mp3",
    coverpath: "Covers/tum hi ho song img.jpeg",
  },
  {
    songName: "Bulleya",
    filepath: "Songs/Bulleya song.mp3",
    coverpath: "Covers/bulleya song img.jpeg",
  },
];
songItem.forEach((element, i) => {
  // console.log(element,i);
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
// audioElement.play();
// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    document.getElementById("0").classList.remove("fa-circle-play");
    document.getElementById("0").classList.add("fa-circle-pause");
    gif.style.opacity = "1";
  } else {
    audioElement.pause();
    masterPlay.classList.add("fa-circle-play");
    masterPlay.classList.remove("fa-circle-pause");
    gif.style.opacity = "0";
    document.getElementById("0").classList.remove("fa-circle-pause");
    document.getElementById("0").classList.add("fa-circle-play");
  }
});
// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar

  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

Array.from(document.getElementsByClassName("songitemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      // makeAllPlays();
      songIndex = e.target.id;

      if (e.target.classList.contains("fa-circle-play")) {
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");

        audioElement.src = `${songs[songIndex].filepath}`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");

        gif.style.opacity = "1";
      } else if (e.target.classList.contains("fa-circle-pause")) {
        audioElement.pause();
        e.target.classList.remove("fa-circle-pause");
        e.target.classList.add("fa-circle-play");

        masterPlay.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
      } else if (
        masterPlay.classList.contains("fa-circle-play") ||
        audioElement.paused
      ) {
        e.target.classList.add("fa-circle-play");
        e.target.classList.remove("fa-circle-pause");
        gif.style.opacity = "0";
      } else if (
        masterPlay.classList.contains("fa-circle-pause") ||
        audioElement.play
      ) {
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        gif.style.opacity = "1";
      }

      if (songIndex + 1) {
        document
          .getElementById(songIndex - 1)
          .classList.remove("fa-circle-pause");
        document.getElementById(songIndex - 1).classList.add("fa-circle-play");
      }

      masterPlay.addEventListener("click", () => {
        e.target.classList.remove("fa-circle-pause");
        e.target.classList.add("fa-circle-play");
        if (masterPlay.classList.contains("fa-circle-pause")) {
          e.target.classList.remove("fa-circle-play");
          e.target.classList.add("fa-circle-pause");
        }
        {
        }
      });
    });
  }
);

// next and previous btn
document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 8) {
    songIndex = 0;
  } else {
    songIndex++;
  }
  audioElement.src = `${songs[songIndex].filepath}`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
  gif.style.opacity = "1";

  document.getElementById(songIndex).classList.remove("fa-circle-play");
  document.getElementById(songIndex).classList.add("fa-circle-pause");

  if (songIndex + 1 && songIndex > 0) {
    document.getElementById(songIndex - 1).classList.remove("fa-circle-pause");
    document.getElementById(songIndex - 1).classList.add("fa-circle-play");
    console.log(songIndex);
  }

  if (songIndex == 0) {
    document.getElementById("8").classList.remove("fa-circle-pause");
    document.getElementById("8").classList.add("fa-circle-play");
  }

  masterPlay.addEventListener("click", () => {
    if (masterPlay.classList.contains("fa-circle-pause")) {
      document.getElementById(songIndex).classList.remove("fa-circle-play");
      document.getElementById(songIndex).classList.add("fa-circle-pause");

      document.getElementById("0").classList.remove("fa-circle-pause");
      document.getElementById("0").classList.add("fa-circle-play");
    }
    if (masterPlay.classList.contains("fa-circle-play")) {
      document.getElementById(songIndex).classList.remove("fa-circle-pause");
      document.getElementById(songIndex).classList.add("fa-circle-play");

      document.getElementById("0").classList.remove("fa-circle-pause");
      document.getElementById("0").classList.add("fa-circle-play");
    }

    if (
      masterPlay.classList.contains("fa-circle-pause") &&
      audioElement.src == "http://127.0.0.1:5500/brazil.mp3"
    ) {
      document.getElementById("0").classList.remove("fa-circle-play");
      document.getElementById("0").classList.add("fa-circle-pause");
    }

    {
    }
  });
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex--;
  }
  audioElement.src = `${songs[songIndex].filepath}`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
  gif.style.opacity = "1";

  document.getElementById(songIndex).classList.remove("fa-circle-play");
  document.getElementById(songIndex).classList.add("fa-circle-pause");
  if (songIndex - 1) {
    document.getElementById(songIndex + 1).classList.remove("fa-circle-pause");
    document.getElementById(songIndex + 1).classList.add("fa-circle-play");

    masterPlay.addEventListener("click", () => {
      document.getElementById(songIndex).classList.remove("fa-circle-pause");
      document.getElementById(songIndex).classList.add("fa-circle-play");
      if (masterPlay.classList.contains("fa-circle-pause")) {
        document.getElementById(songIndex).classList.remove("fa-circle-play");
        document.getElementById(songIndex).classList.add("fa-circle-pause");
      }
      {
      }
    });
  }
});
