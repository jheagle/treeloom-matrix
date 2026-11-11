/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import getAllPoints from './getAllPoints'
import { Point } from '../point/types'
import { MatrixLevel } from '../grid/types'

/**
 * Return just the points on one z-layer of the matrix - the same points getAllPoints would find, filtered down to
 * a single layer. A convenience for the repeated getAllPoints(matrix).filter(p => p.z === z) pattern.
 * @param matrix - The matrix (or any level of it) to retrieve points from.
 * @param z - The layer to keep points from.
 */
const getLayerPoints = (matrix: MatrixLevel, z: Point['z']): Point[] => getAllPoints(matrix).filter(point => point.z === z)

export default getLayerPoints
