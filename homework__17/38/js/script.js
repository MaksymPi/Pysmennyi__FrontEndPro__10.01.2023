function randomImage (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const img = randomImage(1, 10)
const image = document.getElementById("img");
image.src = "./img/" + img + ".jpeg"