import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
  }, 1000),
);

const savedData = localStorage.getItem(LOCALSTORAGE_KEY);

if (localStorage.getItem(LOCALSTORAGE_KEY)) {
  player.setCurrentTime(savedData);
}
