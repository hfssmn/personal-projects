

function setMood(mood){
    let message="";
    if (mood === "happy") {
    message = "Courage, tu fais du bon boulot. Sois fière de toi 💙";
  } 
  else if (mood === "tired") {
    message = "Repose-toi, c’est important. Tu fais déjà de ton mieux 🪐";
  } 
  else if (mood === "angry") {
    message = "Les épreuves de la vie passent, reste forte. Tout finit par s’apaiser 🌙";
  }

  document.getElementById("result").innerText = message;
}

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");

  const symbols = ["✨", "✦", "✧"];

  star.innerText = symbols[Math.floor(Math.random() * symbols.length)];

  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.fontSize = Math.random() * 10 + 10 + "px";
  star.style.animationDuration = Math.random() * 10 + 8 + "s";

  document.getElementById("stars").appendChild(star);
  
setTimeout(() => {
  star.remove();
}, Math.random() * 15000 + 5000);
  
}

// créer plein d'étoiles au début
for (let i = 0; i < 70; i++) {
  createStar();
}

// en rajouter en continusetInterval(createStar, 1200;
setInterval(createStar, 1200);

   
