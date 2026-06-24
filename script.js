const track = document.getElementById("slider-track");

if (track) {
  track.innerHTML += track.innerHTML;
}

const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thanks! Your message has been received.");
    form.reset();
  });
}
