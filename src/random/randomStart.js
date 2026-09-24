import 'core-js/stable'
import siFunciona from 'si-funciona'
import alterCoordinates from '../point/alterCoordinates.js'
import getCoordinateRanges from '../bounds/getCoordinateRanges.js'
import getHighestAbsoluteCoordinate from '../point/getHighestAbsoluteCoordinate.js'
import getMatrixRange from '../bounds/getMatrixRange.js'
import nextCell from '../point/nextCell.js'
import randomPoint from './randomPoint.js'
import randDirectionWithInterval from './randDirectionWithInterval.js'

/**
 * Generate a random starting point for a line with the provided length and direction.
 * @function
 * @param {module:matrixObjects~Matrix} matrix - The matrix in which the line will be drawn.
 * @param {number|null} [length=null] - The intended length (intersected tiles) of the resulting line, null will use a random length within the matrix
 * @param {module:matrixObjects~Direction|null} [dir=null] - The direction the line will extend towards, null will use a random direction within the matrix
 * @param {module:matrixObjects~Point} maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 * @returns {module:matrixObjects~Point}
 */
const randomStart = (matrix, length = null, dir = null, maxRanges = null) => {
  const [minPoint, maxPoint] = getMatrixRange(matrix)
  maxRanges = getCoordinateRanges(minPoint, maxPoint, maxRanges)
  if (length === null) {
    const highestCoordinate = getHighestAbsoluteCoordinate(maxRanges)
    // length must be at least 1, and less than the highest coordinate in the matrix
    length = siFunciona.randomInteger(highestCoordinate - 2, 1)
  }
  if (dir === null) {
    dir = randDirectionWithInterval(matrix, null, length, maxRanges)
  }
  // check direction has at least one non-zero component
  if (dir.x === 0 && dir.y === 0 && dir.z === 0) {
    throw new Error('Direction must have at least one non-zero coordinate')
  }
  const multipleToLength = alterCoordinates(dir, coordinate => {
    if (length % coordinate !== 0) {
      return null
    }
    return length / coordinate
  })
  const timesToLength = siFunciona.reduceObject(multipleToLength, (times, coordinate) => {
    if (coordinate === null) {
      return times
    }
    if (coordinate < times) {
      return coordinate
    }
    return times
  }, length)
  for (let i = 0; i < timesToLength; ++i) {
    maxRanges = dir.prev(maxRanges)
  }
  return nextCell(minPoint, randomPoint(matrix, maxRanges))
}

export default randomStart
