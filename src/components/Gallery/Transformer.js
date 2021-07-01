export default function(Glide, Components, Events) {
  Events.on('run.before', () => {
    const element = Components.Html.slides[Glide.index]
    element.style.transform = 'scale(1)'
    element.style.zIndex = 1
  })

  Events.on(['mount.after', 'run.after'], () => {
    const element = Components.Html.slides[Glide.index]
    element.style.transform = 'scale(1.15)'
    element.style.zIndex = 2
  })

  return this
}
