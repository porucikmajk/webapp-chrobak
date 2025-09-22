document.getElementById("btn").addEventListener("click", () => {
  const container = document.getElementById("video-container");

  if (!document.querySelector("#video-container video")) {
    const video = document.createElement("video");
    video.autoplay = true;
    video.loop = true;
    video.preload = "auto";

    const source = document.createElement("source");
    source.src = "video.mp4";
    source.type = "video/mp4";

    video.appendChild(source);
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";

    video.addEventListener("canplaythrough", () => {
      container.style.display = "block"; // show only when ready
    });

    container.appendChild(video);
  }
});
