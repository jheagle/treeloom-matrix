import siFunciona from 'si-funciona'
import alterCoordinates from '../point/alterCoordinates'
import getCoordinateRanges from '../bounds/getCoordinateRanges'
import getHighestAbsoluteCoordinate from '../point/getHighestAbsoluteCoordinate'
import getMatrixRange from '../bounds/getMatrixRange'
import nextCell from '../point/nextCell'
import randomPoint from './randomPoint'
import randDirectionWithInterval from './randDirectionWithInterval'
import { Direction, Point } from '../point/types'
import { Matrix } from '../grid/types'

/**
 * Generate a random starting point for a line with the provided length and direction.
 * @param matrix - The matrix in which the line will be drawn.
 * @param length - The intended length (intersected tiles) of the resulting line, null will use a random length within the matrix
 * @param dir - The direction the line will extend towards, null will use a random direction within the matrix
 * @param maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 */
const randomStart = (matrix: Matrix, length: number | null = null, dir: Direction | null = null, maxRanges: Point | null = null): Point => {
  const [minPoint, maxPoint] = getMatrixRange(matrix)
  maxRanges = getCoordinateRanges(minPoint, maxPoint, maxRanges)
  // length must be at least 1, and less than the highest coordinate in the matrix
  const lineLength: number = length ?? siFunciona.randomInteger(getHighestAbsoluteCoordinate(maxRanges) - 2, 1)
  if (dir === null) {
    dir = randDirectionWithInterval(matrix, null, lineLength, maxRanges)
  }
  // check direction has at least one non-zero component
  if (dir.x === 0 && dir.y === 0 && dir.z === 0) {
    throw new Error('Direction must have at least one non-zero coordinate')
  }
  const multipleToLength = alterCoordinates(dir, coordinate => {
    if (lineLength % coordinate !== 0) {
      return null
    }
    return lineLength / coordinate
  })
  const timesToLength = siFunciona.reduceObject(multipleToLength, (times: number, coordinate: number | null) => {
    if (coordinate === null) {
      return times
    }
    if (coordinate < times) {
      return coordinate
    }
    return times
  }, lineLength)
  for (let i = 0; i < timesToLength; ++i) {
    maxRanges = dir.prev(maxRanges)
  }
  return nextCell(minPoint, randomPoint(matrix, maxRanges))
}

export default randomStart
