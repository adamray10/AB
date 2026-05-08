// Inject Instagram embed iframes.
// scrolling="no" is omitted on mobile — it blocks iOS tap-to-play.
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
