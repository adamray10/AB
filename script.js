// Inject Instagram embed iframes. On desktop (>860px) add scrolling="no" to prevent
// the iframe's internal scroll from revealing the chrome above/below the video.
// On mobile we omit scrolling="no" so iOS touch events reach the iframe for playback.
document.querySelectorAll('.ig-clip[data-src]').forEach(function(clip) {
  var iframe = document.createElement('iframe');
  iframe.src = clip.dataset.src;
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture');
  if (window.innerWidth > 860) {
    iframe.setAttribute('scrolling', 'no');
  }
  clip.appendChild(iframe);
});
