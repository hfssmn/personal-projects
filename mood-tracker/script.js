

function setMood(mood){
    let message="";
    if (mood === "happy") {
    message = "🌸 Courage, tu fais du bon boulot. Sois fière de toi 💖";
  } 
  else if (mood === "tired") {
    message = "😴 Repose-toi, c’est important. Tu fais déjà de ton mieux 💭";
  } 
  else if (mood === "angry") {
    message = "✨ Les épreuves de la vie passent, reste forte. Tout finit par s’apaiser 🌙";
  }

  document.getElementById("result").innerText = message;
}

   
