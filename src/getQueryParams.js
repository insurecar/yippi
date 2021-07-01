export default () => {
  if (typeof window === 'undefined') return new URLSearchParams()

  return new URLSearchParams(window.location.search)
}
