const text = "Hoy celebramos 35 años de una persona maravillosa. Gracias por tu sonrisa, por tu cariño y por cada momento compartido. Que este nuevo año de vida esté lleno de salud, felicidad y sueños cumplidos. Te amo mucho ❤️🐼🎂";

const typed = document.getElementById("typed");
let i = 0;

function typeWriter(){
  if(i < text.length){
    typed.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 45);
  }
}

setTimeout(typeWriter, 2500);

const heartsContainer = document.getElementById("hearts");
const panda = document.getElementById("panda");

function createHeart(){
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";

  const pandaRect = panda.getBoundingClientRect();

  heart.style.left = (pandaRect.left + 90) + "px";
  heart.style.top = (pandaRect.top + 120) + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 800);

const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");

musicBtn.addEventListener("click", async () => {
  try{
    if(music.paused){
      await music.play();
      musicBtn.textContent = "⏸️ Pausar";
    }else{
      music.pause();
      musicBtn.textContent = "🎵 Música";
    }
  }catch(e){
    alert("Coloca un archivo llamado 'musica.mp3' en la misma carpeta del proyecto.");
  }
});
