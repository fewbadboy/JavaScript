function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    get () {
      return val
    },
    set (newVal) {
      if (newVal !== val) {
        val = newVal
      }
    }
  })
}