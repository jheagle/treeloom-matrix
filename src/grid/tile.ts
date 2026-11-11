/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import { MatrixTile } from './types'

/**
 * A default tile in the Matrix, the point is filled in once the matrix is built (see updateMatrixPoints).
 */
const tile = (): MatrixTile => ({
  point: {} as MatrixTile['point']
})

export default tile
