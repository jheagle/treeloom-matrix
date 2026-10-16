/**
 * All of the Matrix DOM functions and objects necessary to create DOM Matrices
 */

import 'core-js/stable'
import point from './point/index'
import line from './line/index'
import grid from './grid/index'
import bounds from './bounds/index'
import lookup from './lookup/index'
import random from './random/index'

/**
 * Store a reference to the global scope which will be Window if rendered via browser
 */
const root = (typeof window !== 'undefined' ? window : {}) as unknown as Record<string, unknown>

/**
 * All the functions of matrix-dom.
 */
const matrixDom = {
  ...point,
  ...line,
  ...grid,
  ...bounds,
  ...lookup,
  ...random
}

root.matrixDom = matrixDom

// `export =` (not `export default`) so the compiled module.exports IS matrixDom directly, not
// { default: matrixDom } - browserify's standalone UMD wrapper exposes a bundle's module.exports
// as the global/CommonJS/AMD value verbatim, so a default export would otherwise surface as
// window.matrixDom.default instead of window.matrixDom itself.
export = matrixDom
