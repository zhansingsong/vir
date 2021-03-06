import test from 'ava'
import Vir from '../dist/index'

test('移除所有事件', async t => {
  const App = Vir()
  const app = new App
  t.plan(0)
  app.on('a', () => {
    t.pass()
  })
  app.on('a', () => {
    t.pass()
  })
  app.off('a')
  app.emit('a')
  app.emit('a')
})

test('通过事件处理函数移除事件', async t => {
  const App = Vir()
  const app = new App
  t.plan(1)
  let handler1 = function () {
    t.pass()
  }
  let handler2 = function () {
    t.pass()
  }
  app.on('a', handler1)
  app.on('a', handler2)
  app.off('a', handler1)
  app.emit('a')
})

test('通过 on 的返回值移除事件', async t => {
  const App = Vir()
  const app = new App
  t.plan(0)
  let off1 = app.on('a', () => {
    t.pass()
  })
  let off2 = app.on('a', () => {
    t.pass()
  })
  off1()
  off2()
  app.emit('a')
  app.emit('a')
})