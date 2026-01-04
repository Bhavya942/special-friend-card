function openGift(){
  document.getElementById("cover").style.display="none";
  document.getElementById("birthday").style.display="block";

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
