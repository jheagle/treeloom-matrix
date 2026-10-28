import { Point } from '../point/types'
import { MatrixColumn, MatrixLevel } from '../grid/types'

/**
 * Return an array of all the points in the matrix
 * @param matrix - The matrix (or any level of it) to retrieve points from.
 * @param allPoints - The array of points to add the found points to.
 */
const getAllPoints = (matrix: MatrixLevel, allPoints: Point[] = []): Point[] => ((matrix as MatrixColumn).point)
  ? allPoints.concat([(matrix as MatrixColumn).point])
  : (matrix.children as MatrixLevel[]).reduce(
      (allPoints: Point[], child) => allPoints.concat(getAllPoints(child, [])),
      []
    )

export default getAllPoints
