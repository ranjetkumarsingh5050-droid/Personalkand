document.addEventListener("DOMContentLoaded", function () {
  const aboutBtn = document.getElementById("aboutBtn");
  const aboutPopup = document.getElementById("aboutPopup");
  const closePopup = document.getElementById("closePopup");

  aboutBtn.addEventListener("click", function (event) {
    event.preventDefault();
    aboutPopup.style.display = "flex";
  });

  closePopup.addEventListener("click", function () {
    aboutPopup.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === aboutPopup) {
      aboutPopup.style.display = "none";
    }
  });

  const contactBtn = document.getElementById("contactBtn");

  if (contactBtn) {
    contactBtn.addEventListener("click", function (event) {
      event.preventDefault();
      alert("jarurat nahi 😎😎🤣😂");
    });
  }

});