// embed.js adds scrolling="no" to every Instagram iframe it creates, which blocks
// iOS tap-to-play on mobile. Watch for those iframes on mobile and strip the attribute.
if (window.innerWidth <= 860) {
  var observer = new MutationObserver(function(mutations) {
    for (var i = 0; i < mutations.length; i++) {
      var nodes = mutations[i].addedNodes;
      for (var j = 0; j < nodes.length; j++) {
        var node = nodes[j];
        if (node.nodeName === 'IFRAME' && node.src && node.src.indexOf('instagram.com') !== -1) {
          node.removeAttribute('scrolling');
        }
      }
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
}
