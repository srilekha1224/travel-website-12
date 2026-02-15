const images = [
  "https://picsum.photos/1200/400?travel1",
  "https://picsum.photos/1200/400?travel2",
  "https://picsum.photos/1200/400?travel3"
];
let i = 0;
setInterval(() => {
  const slide = document.getElementById("slide");
  if (slide) {
    i = (i + 1) % images.length;
    slide.src = images[i];
  }
}, 3000);

function validateDate() {
  const selected = new Date(document.getElementById("date").value);
  const today = new Date();
  today.setHours(0,0,0,0);
  if (selected < today) {
    alert("Please select a future date");
    return false;
  }
  return true;
}
