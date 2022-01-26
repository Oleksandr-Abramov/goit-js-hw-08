const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});
// player.off('pause', function () {
//   console.log('stop the video!');
// });
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
