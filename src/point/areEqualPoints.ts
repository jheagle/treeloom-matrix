/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { Point } from './types'

/**
 * Given two points, compare the x, y, and z of each to see if they are the same
 * @param p1 - The first point to compare
 * @param p2 - The other point to be compared
 */
const areEqualPoints = (p1: Point, p2: Point): boolean => p1.x === p2.x && p1.y === p2.y && p1.z === p2.z

export default areEqualPoints
