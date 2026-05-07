// Inject Instagram embed iframes using the same URL format Instagram's own embed.js uses:
// /embed/versioned/ path + cr=1&v=14&wp=540&rd= params.
// Without these params, Instagram detects mobile browsers and serves a redirect page
// instead of the actual video player — so videos only play on desktop.
document.querySelectorAll('.ig-clip[data-src]').forEach(function(clip) {
  var iframe = document.createElement('iframe');
  var src = clip.dataset.src.replace('/embed/', '/embed/versioned/');
  src += '?cr=1&v=14&wp=540&rd=https%3A%2F%2Fwww.adambanerjee.com';
  iframe.src = src;
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; gyroscope; web-share');
  iframe.setAttribute('allowtransparency', 'true');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('scrolling', 'no');
  clip.appendChild(iframe);
});
