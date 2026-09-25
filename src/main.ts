/**
 * All of the Matrix DOM functions and objects necessary to create DOM Matrices
 * @file
 * @author Joshua Heagle <joshuaheagle@gmail.com>
 * @version 1.0.0
 * @module matrixDom
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
 * Store reference to any pre-existing module of the same name
 */
const previousMatrixDom = root.matrixDom

/**
 * All the functions of matrix-dom.
 */
const matrixDom = Object.assign(
  {},
  point,
  line,
  grid,
  bounds,
  lookup,
  random
)

type MatrixDomFunctions = typeof matrixDom

/**
 * The matrix-dom library: all of its functions and noConflict.
 */
export interface MatrixDom extends MatrixDomFunctions {
  /** Return a reference to this library while preserving the original same-named library */
  noConflict: () => MatrixDom
}

const noConflict = (): MatrixDom => {
  root.matrixDom = previousMatrixDom
  return library
}

const library: MatrixDom = Object.assign(matrixDom, { noConflict })
root.matrixDom = library

export default library
