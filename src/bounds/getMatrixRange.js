import 'core-js/stable'
import getAllPoints from './getAllPoints.js'
import siFunciona from 'si-funciona'

/**
 * Get the lowest and highest points in the matrix as the range.
 * @function
 * @param {module:matrixObjects~Matrix} matrix
 * @returns {Array.<module:matrixObjects~Point>}
 */
const getMatrixRange = matrix => getAllPoints(matrix).reduce(
    (range, point) => {
        if (range.length === 0) {
            range.push(siFunciona.cloneObject(point), siFunciona.cloneObject(point))
        }
        if (point.x < range[0].x) {
            range[0].x = point.x
        }
        if (point.y < range[0].y) {
            range[0].y = point.y
        }
        if (point.z < range[0].z) {
            range[0].z = point.z
        }
        if (point.x > range[1].x) {
            range[1].x = point.x
        }
        if (point.y > range[1].y) {
            range[1].y = point.y
        }
        if (point.z > range[1].z) {
            range[1].z = point.z
        }
        return range
    },
    []
)

export default getMatrixRange
