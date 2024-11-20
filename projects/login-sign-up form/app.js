function showDiv() {
  const overlay = document.getElementById("overlay");
  const popup = document.getElementById("popup");
  const closeButton = document.getElementById("closeButton");
  const body = document.body;
  const forgotPass = document.getElementsByClassName("fpass-container");
  overlay.style.display = "block";

  // Add event listener to close the popup when clicking the close button
  closeButton.addEventListener("click", hideDiv);
}

function hideDiv() {
  const overlay = document.getElementById("overlay");
  const body = document.body;

  overlay.style.display = "none";
  body.style.filter = "none";
}