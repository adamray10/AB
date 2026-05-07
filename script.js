// Inject Instagram embed iframes. Plain /embed/ URL is the reliable format for Reels.
// scrolling="no" prevents the iframe's internal scroll from revealing chrome above/below.
document.querySelectorAll('.ig-clip[data-src]').forEach(function(clip) {
  var iframe = document.createElement('iframe');
  iframe.src = clip.dataset.src;
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('scrolling', 'no');
  clip.appendChild(iframe);
});
