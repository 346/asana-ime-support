(function() {
  "use strict";

  var keymap = KeyMap.prototype;
  keymap.__processKey = keymap.processKey;
  keymap.processKey = function(a, b) {
    var target = a.target();
    var keyCode = a._event.keyCode;
    // if (target.__isEnableIme === true && keyCode === 13) {
    // }
    target.__isEnableIme = keyCode === 229;
    this.__processKey(a, b); 
  };

  var view = window.HypertextInputView.MultiLine.prototype;
  view.__addSelectionMarkersToDomIfFocused = view._addSelectionMarkersToDomIfFocused;
  view._addSelectionMarkersToDomIfFocused = function() {
    if (this.__isEnableIme === false) {
      return this.__addSelectionMarkersToDomIfFocused();
    }
  };

  var node = Node.prototype;
  node.__isEnableIme = false;
  node.__defaultHandler = node._defaultHandler;
  node._defaultHandler = function(a, b, c) {
    if (('_model' in b) && ('isBar' in b._model) && b._model.isBar() && this.__isEnableIme === true) {
      return Node.JUST_DEFAULT;
    } else {
      return this.__defaultHandler(a, b, c);
    }
  };
  
}());
