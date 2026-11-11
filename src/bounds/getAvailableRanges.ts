/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import getCoordinateRanges from './getCoordinateRanges'
import getMatrixRange from './getMatrixRange'
import { Point } from '../point/types'
import { Matrix } from '../grid/types'

/**
 * Find the range of the matrix from smallest to largest point.
 * @param matrix - The matrix that the point will be contained within.
 * @param maxRanges - The maximum ranges for the point. If null, the matrix will be used.
 * @returns The number of available coordinates on each axis
 */
const getAvailableRanges = (matrix: Matrix, maxRanges: Point | null = null): Point => {
  const [minPoint, maxPoint] = getMatrixRange(matrix)
  return getCoordinateRanges(minPoint, maxPoint, maxRanges)
}

export default getAvailableRanges
