/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import getLinePoints from './getLinePoints'
import { Line, LineSegment } from './types'

/**
 * Takes an array of arrays containing two points each. Calls getPointsLine for each array of points. Returns an
 * array of all points captured for each line segment
 * @param lines - An array of line segments, each is the arguments for getLinePoints (start, end, and optionally the type).
 * @returns All the points of all the lines in one array
 */
const getPointsForLines = (lines: LineSegment[]): Line => lines.reduce(
  (pointsArray: Line, line) => pointsArray.concat(getLinePoints(...line)),
  []
)

export default getPointsForLines
