import $ from 'jquery'
import {
  create
} from '../lib/object'
import extend from './extend'
import initMixin from './mixin'
import initWatch from './watch'
import initBindEvents from './bindEvents'

let uid = 0

export default function (Vir) {
  Vir.prototype._init = function (defaultOptions, options) {
    let {
      el,
      tagName,
      data,
      events,
      methods,
      watch,
      validate,
      beforeInit,
      init,
      inited
    } = extend(defaultOptions, options)

    this._uid = ++uid
    this.$el = el ? $(el) : $('<' + tagName + '>')
    this.data = data
    this.validate = validate
    this._events = create(null)
    this._cache = create(null)

    beforeInit.call(this)
    initMixin.call(this, methods)
    initWatch.call(this, watch)
    initBindEvents.call(this, events)
    init.call(this)
    inited.call(this)
  }
}