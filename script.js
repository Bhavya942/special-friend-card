let song;
let isPlaying = true;

window.onload = () => {
  song = document.getElementById("song");
};

function openGift(){
  // Switch pages
  document.getElementById("cover").style.display = "none";
  document.getElementById("birthday").style.display = "block";

  // 🎶 Auto play song (allowed because this runs on user click)
  song.play().catch(err => console.log("Autoplay blocked:", err));

  // 💖 Hearts animation
  for(let i=0;i<25;i++){
    let h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "💖";
    h.style.left = Math.random()*100 + "vw";
    h.style.bottom = "0";
    h.style.fontSize = (Math.random()*18 + 14) + "px";
    h.style.animationDuration = (Math.random()*3 + 3) + "s";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),6000);
  }
}

function toggleMusic(){
  const btn = document.querySelector(".music-btn");

  if(isPlaying){
    song.pause();
    btn.innerText = "🎶 Play Music";
  }else{
    song.play();
    btn.innerText = "⏸ Pause Music";
  }
  isPlaying = !isPlaying;
}
