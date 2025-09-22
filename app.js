document.getElementById("btn").addEventListener("click", () => {
  const container = document.getElementById("video-container");

  if (!document.querySelector("#video-container video")) {
    container.innerHTML = `
      <video autoplay loop>
        <source src="video.mp4" type="video/mp4">
        Tvoj prehliadač nepodporuje prehrávanie videa.
      </video>
    `;
    container.style.display = "block";
  }
});
