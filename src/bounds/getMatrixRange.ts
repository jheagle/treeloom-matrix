import 'core-js/stable'
import getAllPoints from './getAllPoints'
import siFunciona from 'si-funciona'
import { Point } from '../point/types'
import { Matrix } from '../grid/types'

/**
 * Get the lowest and highest points in the matrix as the range.
 * @function
 * @param matrix - The matrix to find the range of.
 * @returns The lowest point followed by the highest point (empty when the matrix has no points)
 */
const getMatrixRange = (matrix: Matrix): Point[] => getAllPoints(matrix).reduce(
    (range: Point[], point) => {
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
