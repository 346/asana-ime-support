/*global chrome */
(function() {     
  "use strict";
  function injectScript(file, node) {
    var th = document.getElementsByTagName(node)[0];
    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('src', file);
    th.appendChild(s);
  }
  console.log("inject");
  injectScript(chrome.extension.getURL('/app.js'), 'body');
  
})();
