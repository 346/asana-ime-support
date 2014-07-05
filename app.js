(function() {
  "use strict";

  var view = window.HypertextInputView.MultiLine.prototype;
  view.__isEnableIme = false;
  view.__onKeyDown = view._onKeyDown;
  view._onKeyDown = function(a) {
    this.__isEnableIme = a.keyCode === 229;
    return this.__onKeyDown(a);
  };
  view.__addSelectionMarkersToDomIfFocused = view._addSelectionMarkersToDomIfFocused;
  view._addSelectionMarkersToDomIfFocused = function() {
    if (this.__isEnableIme === false) {
      return this.__addSelectionMarkersToDomIfFocused();
    }
  };

}());
