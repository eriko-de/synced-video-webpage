/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import "core-js/stable";
import "regenerator-runtime/runtime";

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

console.log('Hello World from Webpacker')
const $ = require('jquery');

// $(() => {
//   var video = document.getElementById('video');
//   if (Hls.isSupported()) {
//     var hls = new Hls();
//     // bind them together
//     hls.attachMedia(video);
//     hls.loadSource(App.media_path);
//
//     // MEDIA_ATTACHED event is fired by hls object once MediaSource is ready
//     hls.on(Hls.Events.MEDIA_ATTACHED, function () {
//       console.log("video and hls.js are now bound together !");
//     });
//   }
// })
$(() => {
  var video = document.getElementById('video');
    if(Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(App.media_path);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED,function() {
        video.play();
    });
  }
   // hls.js is not supported on platforms that do not have Media Source Extensions (MSE) enabled.
   // When the browser has built-in HLS support (check using `canPlayType`), we can provide an HLS manifest (i.e. .m3u8 URL) directly to the video element through the `src` property.
   // This is using the built-in support of the plain video element, without using hls.js.
   // Note: it would be more normal to wait on the 'canplay' event below however on Safari (where you are most likely to find built-in HLS support) the video.src URL must be on the user-driven
   // white-list before a 'canplay' event will be emitted; the last video event that can be reliably listened-for when the URL is not on the white-list is 'loadedmetadata'.
  else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = App.media_path;
    video.addEventListener('loadedmetadata',function() {
      video.play();
    });
  }
})

$(() => {
  document.getElementById('play-btn').addEventListener('click', () => {
    App.video_commands.send_command('play')
  })

  document.getElementById('pause-btn').addEventListener('click', () => {
    App.video_commands.send_command('pause')
  })
})
