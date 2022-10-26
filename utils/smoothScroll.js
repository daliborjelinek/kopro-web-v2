export const scrollToFc = (hash, doc = null) => {
  function easeInOutCubic (t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
  }
  const definedDocument = doc || document
  const scrollTo = definedDocument.getElementById(hash.substring(1))
  if (!scrollTo) {
    return
  }
  // Using the history api to solve issue: back doesn't work
  // most browser don't update :target when the history api is used:
  // THIS IS A BUG FROM THE BROWSERS.
  if (window.history.pushState && location.hash !== hash) { window.history.pushState('', '', hash) }

  // Get duration from element, default to 500ms
  const duration = 500

  // Get offset from element, default to 0
  const offset = -100

  const clock = Date.now()

  // Get the top position of an element in the document
  // return value of html.getBoundingClientRect().top ... IE : 0, other browsers : -pageYOffset
  let end = scrollTo.nodeName === 'HTML' ? -window.pageYOffset : scrollTo.getBoundingClientRect().top + window.pageYOffset

  // Ajusts offset from the end
  end += offset
  const startPoint = window.pageYOffset
  // we use requestAnimationFrame to be called by the browser before every repaint
  const requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
        function (fn) { window.setTimeout(fn, 16) }

  const easeFn = easeInOutCubic
  const step = function () {
    // the time elapsed from the beginning of the scroll
    const elapsed = Date.now() - clock
    // calculate the scroll position we should be in
    let position = end
    if (elapsed < duration) {
      position = startPoint + (end - startPoint) * easeFn(elapsed / duration)
      requestAnimationFrame(step)
    }
    window.scrollTo(0, position)
    // container === window ? container.scrollTo(0, position) : (container.scrollTop = position)
  }
  step()
}
