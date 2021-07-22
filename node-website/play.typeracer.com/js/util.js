// Utilities for native JS (outside GWT)

/**
 * Toggles an entry in the given element's class attribute.  In newer browsers, this can be accomplished using
 * the element's <code>classList</code> property, but some older browsers (e.g. IE < 10) don't support that prop.
 *
 * @param elt the element on which the give class name will be set/unset
 * @param clsName the class name to set/unset
 * @return boolean false if the class was removed; true if the class was added
 */
function toggleClass(elt, clsName) {
  var classList = elt.classList;
  // Element.classList is not supported in some older browsers
  if (classList !== undefined) {
    return classList.toggle(clsName);
  } else {
    // this code borrowed from https://stackoverflow.com/a/44000106
    var classNames = this.className.split(' ');
    var idx = classNames.indexOf(clsName);
    var ret;
    if (idx === -1) {
      classNames.push(clsName);
      ret = true;
    }
    else {
      classNames.splice(idx, 1);
      ret = false;
    }
    this.className = classNames.join(' ');
    return ret;
  }
}
