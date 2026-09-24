import 'core-js/stable'
import nextCell from '../point/nextCell.js'
import point from '../point/point.js'
import pointDifference from '../point/pointDifference.js'

/**
 * Using a max an min point, find the ranges for each coordinate.
 * @function
 * @param {module:matrixObjects~Point} minPoint - The smallest point in the matrix
 * @param {module:matrixObjects~Point} maxPoint - The largest point in the matrix
 * @param {module:matrixObjects~Point|null} maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 * @returns {module:matrixObjects~Direction}
 */
const getCoordinateRanges = (minPoint, maxPoint, maxRanges = null) => {
  // Find the range by getting delta of min and max, then add 1 to each access to included the max point in the range
  const coordinateRanges = nextCell(pointDifference(minPoint, maxPoint), point(1, 1, 1))
  if (maxRanges) {
    coordinateRanges.x = Math.min(coordinateRanges.x, maxRanges.x)
    coordinateRanges.y = Math.min(coordinateRanges.y, maxRanges.y)
    coordinateRanges.z = Math.min(coordinateRanges.z, maxRanges.z)
  }
  return coordinateRanges
}

export default getCoordinateRanges
