export default function() {
  let unitButton = document.getElementById('unitButton')
  if (unitButton) {
    unitButton.addEventListener('click', function() {
      if (unitButton.innerHTML === 'Vis mer') {
        unitButton.innerHTML = 'Vis mindre'
      } else {
        unitButton.innerHTML = 'Vis mer'
      }
    })
  }

  let spoilerBody = document.querySelector('.spoiler-body')
  spoilerBody && (spoilerBody.style.display = 'none')

  function toggleSpoilerAnimated(
    spoilerElement,
    isInvertedCollapse,
    isInvertedExpand,
    duration = 300
  ) {
    let spoilerBody = spoilerElement.querySelector('.spoiler-body')
    let isCollapsing = spoilerElement.classList.contains('expanded')
    let heightBefore = spoilerElement.offsetHeight

    let offsetBefore = window.pageYOffset
    spoilerElement.classList.toggle('expanded', !isCollapsing)
    let isScrollRequired =
      (isCollapsing && isInvertedCollapse) || (!isCollapsing && isInvertedExpand)

    let scrollFunc = isScrollRequired
      ? () => {
        let heightNow = spoilerElement.offsetHeight
        let heightDelta = heightNow - heightBefore

        window.scrollTo(0, offsetBefore + heightDelta)
      }
      : undefined
    slideToggle(spoilerBody, !isCollapsing, {
      duration: duration,
      progress: scrollFunc,
      complete: scrollFunc
    })
  }

  for (let el of document.querySelectorAll('.spoiler-btn-top')) {
    el.addEventListener('click', () => toggleSpoilerAnimated(el.parentNode))
  }
  for (let el of document.querySelectorAll('.spoiler-btn-bottom')) {
    el.addEventListener('click', () => toggleSpoilerAnimated(el.parentNode, true, true))
  }

  function slideToggle(element, isOpening, options) {
    let duration = (options && options.duration) || 1000
    element.style.transitionDuration = duration + 'ms'
    element.style.transitionProperty = 'height'
    let start = null

    function step(timestamp) {
      if (!start) {
        start = timestamp
      }
      let progress = (1.0 * (timestamp - start)) / duration
      if (progress < 1.0) {
        if (options.progress) {
          options.progress()
        }
        window.requestAnimationFrame(step)
      }
    }

    element.style.display = 'block'
    setTimeout(() => {
      if (!isOpening) {
        element.style.display = 'none'
      }
      element.style.overflow = 'hidden'
      window.requestAnimationFrame(step)
    }, 3)
  }

  // collapse from up js

  const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'))

  window.addEventListener(
    'click',
    ev => {
      ev.composedPath().slice(0, -2).forEach(stepEl => {
        const targetSelector = stepEl.getAttribute('data-target')
        if (!!targetSelector) {
          toggleShevron(stepEl)
          collapse(targetSelector, 'toggle')
        }
      })
    },
    false
  )

  const toggleShevron = (parentEl) => {
    const shevronEl = parentEl.getElementsByClassName('fa')[0]
    if (!shevronEl) return;

    shevronEl.classList.toggle('fa-angle-down')
    shevronEl.classList.toggle('fa-angle-up')
  }

  const fnmap = {
    toggle: 'toggle',
    show: 'add',
    hide: 'remove'
  }
  const collapse = (selector, cmd) => {
    const targets = Array.from(document.querySelectorAll(selector))
    targets.forEach(target => {
      target.classList[fnmap[cmd]]('show')
    })
  }

}
