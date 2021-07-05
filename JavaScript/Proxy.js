
const p = new Proxy(target, handler)
var handler =
{
  // target.prop
  // target目标对象 property被获取的属性名 receiverProxy或者继承Proxy的对象
  get: function(target, property, receiver) {},
  // target.prop = value
  set: function(target, property, value, receiver) {},
  // 'prop' in target
  has: function(target, property) {},
  // delete target.prop
  deleteProperty: function(target, property) {},
  // target(function(target, property, receiver) {}args)
  apply: function(target, thisArg, argumentsList) {},
  // new target(function(target, property, receiver) {}args)
  construct: function(target, argumentsList, newTarget) {},
  // Object.getOwnPropertyDescriptor(target, 'prop')
  getOwnPropertyDescriptor: function(target, property) {},
  // Object.defineProperty(target, 'prop', descriptor)
  defineProperty: function(target, property, descriptor) {},
  // Object.getPrototypeOf(target), Reflect.getPrototypeOf(target),
  // target.__proto__, object.isPrototypeOf(target), object instanceof target
  getPrototypeOf: function(target) {},
  // Object.setPrototypeOf(target), Reflect.setPrototypeOf(target)
  setPrototypeOf: function(target, property) {},
  // Object.keys(target)
  ownKeys: function(target) {},
  // Object.preventExtensions(target)
  preventExtensions: function(target) {},
  // Object.isExtensible(target)
  isExtensible :function(target) {}
}