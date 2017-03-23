import {
  isFunction
} from '../lib/typeof'

export default function handler(watch) {
  for (let name in watch) {
    if (isFunction(watch[name])) {
      this.on(name, watch[name])
    } else {
      let watchs = watch[name]
      let i = 0;
      let len = watchs.length
      let options = {}
      for (; i < len; i++) {
        options[name] = watchs[i]
        handler.call(this, options)
      }
    }
  }
}