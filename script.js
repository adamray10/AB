// Inject Instagram embed iframes. On desktop (>860px) add scrolling="no" to prevent
// the iframe's internal scroll from revealing chrome above/below the video.
// On mobile, omit scrolling="no" so iOS touch events reach the video player.
document.querySelectorAll('.ig-clip[data-src]').forEach(function(clip) {
  var iframe = document.createElement('iframe');
  iframe.src = clip.dataset.src;
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; gyroscope; web-share');
  iframe.setAttribute('frameborder', '0');
  if (window.innerWidth > 860) {
    iframe.setAttribute('scrolling', 'no');
  }
  clip.appendChild(iframe);
});
