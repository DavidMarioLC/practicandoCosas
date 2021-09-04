import "https://vjs.zencdn.net/7.14.3/video.min.js";

console.log("imported library");

ps5.classList.remove("hidden");

const player = videojs("ps5", {
  controls: true,
  preload: "auto",
});

export { player };
