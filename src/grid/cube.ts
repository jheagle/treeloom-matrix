/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import buildMatrix from './buildMatrix'
import { Matrix, MatrixProps } from './types'

/**
 * Return a matrix where x, y, and z are equal
 * @param props - Additional data to append to each level: x for each column (the tile data), y for each row, z for
 * each layer and matrix for the matrix itself. Each is a single configuration object, not an array.
 * @param size - Used to define the width, height and depth as equal values
 */
const cube = ({ x = {}, y = {}, z = {}, matrix = {} }: MatrixProps = {}, size: number): Matrix => buildMatrix(
  { x: size, y: size, z: size },
  { x, y, z, matrix }
)

export default cube
