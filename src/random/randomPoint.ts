/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import siFunciona from 'si-funciona'
import getCoordinateRanges from '../bounds/getCoordinateRanges'
import getMatrixRange from '../bounds/getMatrixRange'
import point from '../point/point'
import { Point } from '../point/types'
import { Matrix } from '../grid/types'

/**
 * Get random point within a matrix
 * @param matrix - The matrix that the point will be contained within.
 * @param maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 */
const randPoint = (matrix: Matrix, maxRanges: Point | null = null): Point => {
  const [minPoint, maxPoint] = getMatrixRange(matrix)
  const coordinateRanges = getCoordinateRanges(minPoint, maxPoint, maxRanges)
  return point(
    siFunciona.randomInteger(coordinateRanges.x, minPoint.x),
    siFunciona.randomInteger(coordinateRanges.y, minPoint.y),
    siFunciona.randomInteger(coordinateRanges.z, minPoint.z)
  )
}

export default randPoint
