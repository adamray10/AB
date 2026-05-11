// Inject Instagram embed iframes.
// Desktop (>860px): scrolling="no" stops the iframe from internally scrolling,
//   which would reveal the chrome above/below that our CSS hides.
// Mobile (<=860px): omit scrolling="no" so iOS touch events reach the video player.
//   scrolling="no" is the confirmed cause of tap-to-play being blocked on iOS Safari.
var isMobile = window.innerWidth <= 860;

document.querySelectorAll('.ig-clip[data-src]').forEach(function(clip) {
  var iframe = document.createElement('iframe');
  iframe.src = clip.dataset.src;
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media');
  iframe.setAttribute('frameborder', '0');
  if (!isMobile) {
    iframe.setAttribute('scrolling', 'no');
  }
  clip.appendChild(iframe);
});
