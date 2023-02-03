export default function directiveFocus(app) {
  app.directive("focus",{
    mounted(el) {
      // console.log(el)
      el?.focus()
    }
  })
}