// 三斜线指令是包含单个XML标签的单行注释。 注释的内容会做为编译器指令使用。

// 三斜线指令仅可放在包含它的文件的最顶端。


// JSDOC 类型检查
// @type
// @param (or @arg or @argument)
// @returns (or @return)
// @typedef
// @callback
// @template
// @class (or @constructor)
// @this
// @extends (or @augments)
// @enum

/**
 * @param {string} p - A string param
 * @returns {string}
 */
function say(p) {
  return p + ''
}
