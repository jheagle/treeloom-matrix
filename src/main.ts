/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/**
 * All of the treeloom-matrix functions and objects necessary to create DOM Matrices
 */

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
 * All the functions of treeloom-matrix.
 */
const treeloomMatrix = {
  ...point,
  ...line,
  ...grid,
  ...bounds,
  ...lookup,
  ...random
}

root.treeloomMatrix = treeloomMatrix

// `export =` (not `export default`) so the compiled module.exports IS treeloomMatrix directly, not
// { default: treeloomMatrix } - browserify's standalone UMD wrapper exposes a bundle's module.exports
// as the global/CommonJS/AMD value verbatim, so a default export would otherwise surface as
// window.treeloomMatrix.default instead of window.treeloomMatrix itself.
export = treeloomMatrix
